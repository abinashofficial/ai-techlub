import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { locateContext } from "../App";

declare global {
  interface Window {
    gapi: any;
    google: any;
  }

  const gapi: any;
  const google: any;
}

const CLIENT_ID = "631378468215-2suurs5co5noedgj3fifihdn26a6gfqn.apps.googleusercontent.com";
const API_KEY = "AIzaSyA89RVDizQX0znz0Qt27Vb_K15SUXL0274";
const SCOPES =
  "https://www.googleapis.com/auth/calendar.events.readonly https://www.googleapis.com/auth/calendar.events";
const DISCOVERY_DOC =
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";




// timeSlots predefined
const timeSlots = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "01:00 PM - 02:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
  "05:00 PM - 06:00 PM",
];


// Convert "09:00 AM" → "09:00"
const convertTo24Hour = (time: string): string => {
  const [t, modifier] = time.split(" ");
  let [hours, minutes] = t.split(":").map(Number);
  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
};

// Map API events to booked slots
const parseBookedSlots = (events: any[]): string[] => {
  const booked: string[] = [];

  events.forEach(event => {
    const start = new Date(event.start.dateTime); // use local time
    const hours = start.getHours();
    const minutes = start.getMinutes();
    const formattedStart = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

    // find matching slot
    const slot = timeSlots.find(s => convertTo24Hour(s.split(" - ")[0]) === formattedStart);
    if (slot) booked.push(slot);
  });

  return booked;
};

// ✅ check if a slot is active (weekday & future & within 9–6)
const isSlotActive = (date: string, slot: string): boolean => {
  if (!date) return false;

  const selected = new Date(date);
  const day = selected.getDay(); // 0=Sun, 6=Sat
  if (day === 0 || day === 6) return false; // weekends

  const [startLabel] = slot.split(" - ");
  const start24 = convertTo24Hour(startLabel);
  const startDateTime = new Date(`${date}T${start24}`);
  const now = new Date();

  // only future times on same day
  if (selected.toDateString() === now.toDateString()) {
    return startDateTime.getTime() > now.getTime();
  }

  return startDateTime.getTime() > now.getTime();
};

export default function GoogleCalendarDemo() {
  const [gapiLoaded, setGapiLoaded] = useState(false);
  const [tokenClient, setTokenClient] = useState<any>(null);
  const [signedIn, setSignedIn] = useState(false);
    const [book, setBook] = useState(false);

  const { setUser } = useContext(locateContext);

      const [title, setTitle] = useState("Demo Meeting");
const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [startDate, setDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const CALENDAR_ID = "prisonbirdstech@gmail.com"; // your public calendar ID
    const [attendees] = useState("prisonbirdstech@gmail.com");
        const [startTime, setStartTime] = useState(() => {
    const d = new Date();
    d.setMinutes(d.getMinutes() + 15);
    return d.toISOString().slice(0, 16);
  });
  const [endTime, setEndTime] = useState(() => {
    const d = new Date();
    d.setMinutes(d.getMinutes() + 45);
    return d.toISOString().slice(0, 16);
  });

  // ✅ Load gapi script dynamically and wait
  useEffect(() => {
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.body.appendChild(script);
      });
    };

    const initGapi = async () => {
      await loadScript("https://apis.google.com/js/api.js");
      window.gapi.load("client", async () => {
        await window.gapi.client.init({
          apiKey: API_KEY,
          discoveryDocs: [DISCOVERY_DOC],
        });
        setGapiLoaded(true);
      });
    };

    // Also load GIS library
    loadScript("https://accounts.google.com/gsi/client").then(() => {
      initGapi();
    });
  }, []);

  // // ✅ Initialize OAuth token client
  // useEffect(() => {
  //   if (!gapiLoaded) return;

  //   const client = window.google.accounts.oauth2.initTokenClient({
  //     client_id: CLIENT_ID,
  //     scope: SCOPES,
  //     callback: (resp: any) => {
  //       if (resp && resp.access_token) {
  //         setSignedIn(true);
  //         toast.success("Google Calendar connected!");
  //       }
  //     },
  //   });

  //   setTokenClient(client);
  // }, [gapiLoaded]);

  // Example useEffect with fetching user info
useEffect(() => {
  if (!gapiLoaded) return;

  const client = window.google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES, // e.g., "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
    callback: async (resp: any) => {
      if (resp && resp.access_token) {
        setSignedIn(true);
              setBook(true);
        toast.success("Google Calendar connected!");

        try {
          // Fetch user info
          const userRes = await fetch(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
              headers: {
                Authorization: `Bearer ${resp.access_token}`,
              },
            }
          );
          const userData = await userRes.json();
          console.log("Google User Data:", userData);

          // Example: set in context
          setUser({
            name: userData.name,
            email: userData.email,
            imageUrl: userData.picture,
          });
        } catch (err) {
          console.error("Error fetching user info", err);
        }
      }
    },
  });

  setTokenClient(client);
}, [gapiLoaded]);


  const handleSignIn = () => {
    if (!signedIn){
    tokenClient?.requestAccessToken();
    }else{
      setBook(true);
    }
  };

  // const handleSignOut = () => {
  //   window.google.accounts.oauth2.revoke(tokenClient.access_token, () => {
  //     setSignedIn(false);
  //     toast.info("Signed out.");
  //   });
  // };

  // const listEvents = async () => {
  //   if (!signedIn) return toast.warn("Please sign in first.");

  //   try {
  //     const now = new Date().toISOString();
  //     const response = await window.gapi.client.calendar.events.list({
  //       calendarId: "primary",
  //       timeMin: now,
  //       singleEvents: true,
  //       orderBy: "startTime",
  //     });

  //     const events = response.result.items || [];
  //     console.log("Events:", events);
  //     toast.success(`${events.length} events found`);
  //   } catch (err) {
  //     console.error("Error listing events:", err);
  //     toast.error("Failed to list events");
  //   }
  // };





  const fetchBookedSlots = async (date: string) => {
  if (!date) return;

  const startOfDay = new Date(`${date}T00:00:00+05:30`).toISOString();
  const endOfDay = new Date(`${date}T23:59:59+05:30`).toISOString();

  try {
    const res = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        CALENDAR_ID
      )}/events?key=${API_KEY}&timeMin=${startOfDay}&timeMax=${endOfDay}&singleEvents=true&orderBy=startTime`
    );

    const data = await res.json();
    const booked = parseBookedSlots(data.items || []);
    setBookedSlots(booked);
  } catch (err) {
    console.error(err);
  }
};


  // ✅ When date changes → fetch booked slots
  useEffect(() => {
    if (signedIn && startDate) {
      fetchBookedSlots(startDate);
    }
  }, [startDate, signedIn]);

  // combined check → active + not booked
  const isSlotAvailable = (date: string, slot: string): boolean => {
    return isSlotActive(date, slot) && !bookedSlots.includes(slot);
  };

  const handleSlotChange = (slot: string) => {
    const available = isSlotAvailable(startDate, slot);
    if (!available) {
      toast.error("This slot is not available!");
      return;
    }
    setSelectedSlot(slot);
      updateTimesFromSlot(startDate, slot); // ✅ update times

  };


  const createMeet = async () => {
        setLoading(false);



    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const startISO = new Date(startTime).toISOString();
      const endISO = new Date(endTime).toISOString();

      if (new Date(endISO) <= new Date(startISO)) {
        toast.error("End time must be after start time!");
      setLoading(true);

        return;
      }

      const event = {
        summary: title ,
        start: { dateTime: startISO, timeZone: tz },
        end: { dateTime: endISO, timeZone: tz },
        attendees: attendees.split(",").map((email:any) => ({ email: email.trim() })),
        conferenceData: {
          createRequest: {
            requestId: String(Date.now()),
            conferenceSolutionKey: { type: "hangoutsMeet" },
          },
        },
        reminders: { useDefault: true },
      };

      const res = await gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
        conferenceDataVersion: 1,
        sendUpdates: "all",
      });

            setLoading(true);
            setBook(false);
            setDate("");
setSelectedSlot("");
      toast.success("Demo booked successfully!");
      console.log("Meet link:", res.result.hangoutLink);

    //   setTimeout(() => {
    //     navigate("/blog");
    //   }, 3000);
    } catch (err) {
      console.error("Error creating meeting:", err);
      toast.error("Failed to create meeting.");
    } finally {
            setTimeout(() => {
      setLoading(true);
      }, 3000);
    }
  };
    // const isButtonDisabled = !startDate || !selectedSlot || !loading;
const updateTimesFromSlot = (date: string, slot: string) => {
  if (!date || !slot) return;

  const [startLabel, endLabel] = slot.split(" - ");

  // Convert to 24h format
  const start24 = convertTo24Hour(startLabel);
  const end24 = convertTo24Hour(endLabel);

  // Combine date + time
  setStartTime(`${date}T${start24}:00`); // append seconds
  setEndTime(`${date}T${end24}:00`);
};


  return (
    <div style={{ padding: 20 }}>
      <h2>Schedule Demo</h2>

      {!book ? (
        // <button style={{
        //                   background:"#388DA8",
        // borderRadius:"10px",
        // }} onClick={handleSignIn}>
        //   <div>
        //     {signedIn ? "Book Demo" : "Sign in with Google"}
        //   </div>
          
        //   </button>

                <div
                                  
                style={{ marginTop: "50px" ,
             background:"#388DA8",
                color:"white",
                borderRadius:"10px",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",

                      cursor: "pointer",

                }}
                onClick={handleSignIn}
                >
                  <button
                  
  //  disabled={isButtonDisabled}
                    style={{
                      // cursor: isButtonDisabled ? "not-allowed" : "pointer",
                background:"#388DA8",
                color:"white",
                                borderRadius:"10px"

                    }}
                  >
                  Book Demo
                  </button>
                  <i className="bi bi-arrow-right"></i>
                </div>

      ) : (

        <>
                {loading ? (
<form onSubmit={createMeet}>
                   

                        <div className="input-group">
                  <label>Title: </label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{
                        background:"white",
                        color:"black",
                    }}
                  />
                </div>


          <div  className="input-group">
            <label htmlFor="date-of-birth">Date</label>
            <input
                          id="date-of-birth"
style={{
  cursor:"pointer",
  background:"white",
  color:"black"
}}
              type="date"
              value={startDate}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
                            required
 onClick={(e) => (e.currentTarget as HTMLInputElement).showPicker()}
            />
          </div>


          <div  className="input-group">
            <label>Slot: </label>
            <select
              value={selectedSlot}
              onChange={(e) => handleSlotChange(e.target.value)}
                                          required

              disabled={!startDate}
              style={{
  cursor:"pointer",
  color:"black"
}}
            >
              <option value="">Select a time slot</option>
              {timeSlots.map((slot, i) => {
               const available = isSlotAvailable(startDate, slot);
                return (
                  <option
                    key={i}
                    value={slot}
                    disabled={!available}
                    style={{
                      color: available ? "green" : "red",
                      fontWeight: available ? "bold" : "normal",
                    }}
                  >
                    {available ? "🟢" : "🔴"} {slot}
                  </option>
                );
              })}
            </select>
          </div>

                {/* Book Button */}
                <div
                                  
                style={{ marginTop: "50px" ,
             background:"#388DA8",
                color:"white",
                borderRadius:"10px",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",


                }}>
                  <button
                  
 type="submit"                  
  //  disabled={isButtonDisabled}
                    style={{
                      // cursor: isButtonDisabled ? "not-allowed" : "pointer",
                      cursor: "pointer",
                background:"#388DA8",
                color:"white",
                                borderRadius:"10px"

                    }}
                  >
                  Book Demo
                  </button>
                  <i className="bi bi-arrow-right"></i>
                </div>
                   </form>
        ):(
<div className="spinner">
</div>
        )}
                    
        </>

      )}

      {/* <ToastContainer /> */}
    </div>
  );
}
