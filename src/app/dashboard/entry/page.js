"use client";

import { useState } from "react";

export default function EntryPage() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleEntry = async () => {
    setError("");
    setResult(null);

    const res = await fetch("/api/parking/entry", {
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
      <h2 className="text-3xl font-bold mb-6">🚘 Vehicle Entry</h2>

      <input
        className="border p-2 rounded w-72"
        placeholder="Enter Vehicle Number"
        value={vehicleNumber}
        onChange={(e) => setVehicleNumber(e.target.value)}
      />
      <br /><br />
      <button
        onClick={handleEntry}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Allocate Slot
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
          <h3 className="text-xl font-semibold mb-2">✅ Slot Allocated</h3>
          <p><strong>Slot Number:</strong> {result.slotNumber}</p>
          <p><strong>Vehicle:</strong> {result.vehicleNumber}</p>
          <p><strong>Entry Time:</strong> {new Date(result.entryTime).toLocaleString()}</p>
          <p><strong>Status:</strong> Occupied</p>
        </div>
      )}
    </main>
  );
}