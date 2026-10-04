"use client";

import { useEffect, useState } from "react";

// Change this to your real launch date.
const LAUNCH_DATE = new Date("2026-11-20T00:00:00");

function timeLeft() {
  const diff = Math.max(0, LAUNCH_DATE.getTime() - Date.now());
  return {
    Days: Math.floor(diff / 86_400_000),
    Hours: Math.floor((diff / 3_600_000) % 24),
    Minutes: Math.floor((diff / 60_000) % 60),
    Seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [t, setT] = useState<ReturnType<typeof timeLeft> | null>(null);

  useEffect(() => {
    setT(timeLeft());
    const id = setInterval(() => setT(timeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="countdown" aria-label="Time until launch">
      {(["Days", "Hours", "Minutes", "Seconds"] as const).map((unit) => (
        <div key={unit} className="countdown-cell">
          <span className="countdown-num">{t ? String(t[unit]).padStart(2, "0") : "--"}</span>
          <span className="countdown-label">{unit}</span>
        </div>
      ))}
    </div>
  );
}
