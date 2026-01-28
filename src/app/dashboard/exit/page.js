"use client";

import { useState } from "react";

export default function ExitPage() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleExit = async () => {
    setError("");
    setResult(null);

    const res = await fetch("/api/parking/exit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vehicleNumber }),
    });

    if (!res.ok) {
      const text = await res.text();
      setError(text);
      return;
    }

    const data = await res.json();
    setResult(data);
    setVehicleNumber("");
  };

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <h2 className="text-3xl font-bold mb-6">🧾 Vehicle Exit</h2>

      <input
        className="border p-2 rounded w-72"
        placeholder="Enter Vehicle Number"
        value={vehicleNumber}
        onChange={(e) => setVehicleNumber(e.target.value)}
      />
      <br /><br />
      <button
        onClick={handleExit}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Checkout Vehicle
      </button>

      {/* Error */}
      {error && (
        <div className="mt-6 p-4 bg-red-100 text-red-700 rounded">
          ❌ {error}
        </div>
      )}

      {/* Success */}
      {result && (
        <div className="mt-6 p-6 bg-green-100 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">✅ Vehicle Exited</h3>
          <p><strong>Hours Parked:</strong> {result.hoursParked}</p>
          <p><strong>Total Fee:</strong> ₹{result.fee}</p>
        </div>
      )}
    </main>
  );
}
