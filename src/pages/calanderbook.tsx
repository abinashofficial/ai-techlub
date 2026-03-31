import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    google: any;
  }
}

const SCOPES = "https://www.googleapis.com/auth/calendar.app.created";

const CLIENT_ID = "209908503524-eanj5macufu0mj0c1jnkgmlpqbp0gkpp.apps.googleusercontent.com";
// const API_KEY = "AIzaSyDUAPEPsBzYe-2vw1F6MMdHC0zbYhK9Sj4";

export default function CalendarBookingApp() {
  const [tokenClient, setTokenClient] = useState<any>(null);
  const [accessToken, setAccessToken] = useState<string>("");
  const [calendarId, setCalendarId] = useState<string>("");

  // Load Google OAuth client
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.onload = initClient;
      document.body.appendChild(script);
    };

    const initClient = () => {
      const client = window.google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID, // 🔴 replace
        scope: SCOPES,
        callback: (response: any) => {
          setAccessToken(response.access_token);
        },
      });

      setTokenClient(client);
    };

    loadScript();
  }, []);

  // Step 1: Login
  const handleLogin = () => {
    tokenClient.requestAccessToken();
  };

  // Step 2: Create Calendar (only once ideally)
  const createCalendar = async () => {
    const res = await fetch(
      "https://www.googleapis.com/calendar/v3/calendars",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          summary: "My Booking App",
        }),
      }
    );

    const data = await res.json();
    console.log("Calendar:", data);
    setCalendarId(data.id);
  };

  // Step 3: Create Booking Event
  const createEvent = async () => {
    if (!calendarId) {
      alert("Create calendar first!");
      return;
    }

    const res = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          summary: "Booking Confirmed",
          description: "Your appointment is confirmed",
          start: {
            dateTime: "2026-04-01T10:00:00",
            timeZone: "Asia/Kolkata",
          },
          end: {
            dateTime: "2026-04-01T11:00:00",
            timeZone: "Asia/Kolkata",
          },
        }),
      }
    );

    const data = await res.json();
    console.log("Event created:", data);
    alert("Booking added to Google Calendar!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Google Calendar Booking</h2>

      <button onClick={handleLogin}>
        Connect Google Calendar
      </button>

      <br /><br />

      <button onClick={createCalendar} disabled={!accessToken}>
        Create Calendar
      </button>

      <br /><br />

      <button onClick={createEvent} disabled={!calendarId}>
        Book Appointment
      </button>
    </div>
  );
}