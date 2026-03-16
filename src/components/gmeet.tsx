import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { locateContext } from "../App";

declare global {
  interface Window {
    gapi: any;
    google: any;
  }
}

const CLIENT_ID =
  "209908503524-eanj5macufu0mj0c1jnkgmlpqbp0gkpp.apps.googleusercontent.com";

const API_KEY = "AIzaSyDUAPEPsBzYe-2vw1F6MMdHC0zbYhK9Sj4";

const SCOPES =
  "openid profile email https://www.googleapis.com/auth/calendar.events";

const DISCOVERY_DOC =
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";

const CALENDAR_ID = "shindentechnologies@gmail.com";

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

const convertTo24Hour = (time: string): string => {
  const [t, modifier] = time.split(" ");
  let [hours, minutes] = t.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
};

const parseBookedSlots = (events: any[]): string[] => {
  const booked: string[] = [];

  events.forEach((event) => {
    if (!event.start?.dateTime) return;

    const start = new Date(event.start.dateTime);
    const formattedStart = `${String(start.getHours()).padStart(
      2,
      "0"
    )}:${String(start.getMinutes()).padStart(2, "0")}`;

    const slot = timeSlots.find(
      (s) => convertTo24Hour(s.split(" - ")[0]) === formattedStart
    );

    if (slot) booked.push(slot);
  });

  return booked;
};

export default function GoogleCalendarDemo() {
  const { setUser } = useContext(locateContext);

  const [gapiLoaded, setGapiLoaded] = useState(false);
  const [tokenClient, setTokenClient] = useState<any>(null);
  const [accessToken, setAccessToken] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [book, setBook] = useState(false);

  const [title, setTitle] = useState("Demo Meeting");
  const [startDate, setDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    const loadScript = (src: string) =>
      new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });

    const init = async () => {
      await loadScript("https://apis.google.com/js/api.js");
      await loadScript("https://accounts.google.com/gsi/client");

      window.gapi.load("client", async () => {
        await window.gapi.client.init({
          apiKey: API_KEY,
          discoveryDocs: [DISCOVERY_DOC],
        });

        setGapiLoaded(true);
      });
    };

    init();
  }, []);

  useEffect(() => {
    if (!gapiLoaded) return;

    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,

      callback: async (resp: any) => {
        if (resp.access_token) {
          setAccessToken(resp.access_token);
          setSignedIn(true);
          setBook(true);

          toast.success("Google connected!");

          const userRes = await fetch(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
              headers: {
                Authorization: `Bearer ${resp.access_token}`,
              },
            }
          );

          const userData = await userRes.json();

          setUser({
            name: userData.name,
            email: userData.email,
            imageUrl: userData.picture,
          });
        }
      },
    });

    setTokenClient(client);
  }, [gapiLoaded]);

  const handleSignIn = () => {
    tokenClient?.requestAccessToken();
  };

  const fetchBookedSlots = async (date: string) => {
    if (!accessToken) return;

    const startOfDay = new Date(`${date}T00:00:00`).toISOString();
    const endOfDay = new Date(`${date}T23:59:59`).toISOString();

    const res = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        CALENDAR_ID
      )}/events?timeMin=${startOfDay}&timeMax=${endOfDay}&singleEvents=true&orderBy=startTime`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = await res.json();
    const booked = parseBookedSlots(data.items || []);
    setBookedSlots(booked);
  };

  useEffect(() => {
    if (startDate && signedIn) {
      fetchBookedSlots(startDate);
    }
  }, [startDate, signedIn]);

  const updateTimesFromSlot = (date: string, slot: string) => {
    const [startLabel, endLabel] = slot.split(" - ");

    const start24 = convertTo24Hour(startLabel);
    const end24 = convertTo24Hour(endLabel);

    setStartTime(`${date}T${start24}:00`);
    setEndTime(`${date}T${end24}:00`);
  };

  const createMeet = async (e: any) => {
    e.preventDefault();

    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const event = {
        summary: title,
        start: { dateTime: startTime, timeZone: tz },
        end: { dateTime: endTime, timeZone: tz },

        attendees: [{ email: "shindentechnologies@gmail.com" }],

        conferenceData: {
          createRequest: {
            requestId: String(Date.now()),
            conferenceSolutionKey: { type: "hangoutsMeet" },
          },
        },
      };

      const res = await window.gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
        conferenceDataVersion: 1,
        sendUpdates: "all",
      });

      toast.success("Demo booked!");

      console.log("Meet link:", res.result.hangoutLink);

      setDate("");
      setSelectedSlot("");
    } catch (err) {
      console.error(err);
      toast.error("Meeting creation failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Schedule Demo</h2>

      {!book ? (
        <button 
                            style={{
                      // cursor: isButtonDisabled ? "not-allowed" : "pointer",
                background:"#388DA8",
                color:"white",
                                borderRadius:"10px"

                    }}
        onClick={handleSignIn}>Sign in with Google</button>
      ) : (
        <form onSubmit={createMeet}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="date"
            value={startDate}
            onChange={(e) => setDate(e.target.value)}
          />

          <select
            value={selectedSlot}
            onChange={(e) => {
              setSelectedSlot(e.target.value);
              updateTimesFromSlot(startDate, e.target.value);
            }}
          >
            <option>Select slot</option>

            {timeSlots.map((slot) => {
              const booked = bookedSlots.includes(slot);

              return (
                <option key={slot} disabled={booked}>
                  {booked ? "🔴" : "🟢"} {slot}
                </option>
              );
            })}
          </select>

          <button type="submit">Book Demo</button>
        </form>
      )}
    </div>
  );
}