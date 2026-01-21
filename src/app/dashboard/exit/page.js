"use client";

import { useState } from "react";

export default function ExitPage() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [result, setResult] = useState("");

  const handleExit = async () => {
    const res = await fetch("/api/parking/exit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vehicleNumber }),
    });

    const data = await res.json();
    setResult(JSON.stringify(data));
  };

  return (
    <main style={{ padding: "40px" }}>
      <h2>Vehicle Exit</h2>

      <input
        placeholder="Vehicle Number"
        value={vehicleNumber}
        onChange={(e) => setVehicleNumber(e.target.value)}
      />
      <br /><br />
      <button onClick={handleExit}>Exit</button>

      <pre>{result}</pre>
    </main>
  );
}