"use client";

import { useState } from "react";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: send `email` to your mailing list (e.g. a route handler or Mailchimp/Resend).
    setDone(true);
  }

  if (done) {
    return <p className="notify-success">🧀 You&apos;re on the list! We&apos;ll email you the moment we open.</p>;
  }

  return (
    <form className="notify" onSubmit={onSubmit}>
      <label htmlFor="email" className="sr-only">Email address</label>
      <input
        id="email"
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Notify me</button>
    </form>
  );
}
