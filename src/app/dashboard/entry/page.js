"use client";

import { useState } from "react";

export default function EntryPage() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleEntry = async () => {
    const res = await fetch("/api/parking/entry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vehicleNumber }),
    });

    const text = await res.text();
    setMessage(text);
  };

  return (
    <main style={{ padding: "40px" }}>
      <h2>Vehicle Entry</h2>

      <input
        placeholder="Vehicle Number"
        value={vehicleNumber}
        onChange={(e) => setVehicleNumber(e.target.value)}
      />
      <br /><br />
      <button onClick={handleEntry}>Enter</button>

      <p>{message}</p>
    </main>
  );
}
