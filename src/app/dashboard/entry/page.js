"use client";

import { useState } from "react";

export default function EntryPage() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [message, setMessage] = useState("");
  const [parsedResult, setParsedResult] = useState(null);

  const handleEntry = async () => {
    setMessage("");
    setParsedResult(null);

    const res = await fetch("/api/parking/entry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vehicleNumber }),
    });

    const text = await res.text();

    // UI-only: check if response is JSON and format it
    try {
      const json = JSON.parse(text);
      setParsedResult(json);
      setVehicleNumber("");
    } catch {
      // Not JSON → show normal message (error)
      setMessage(text);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex items-center justify-center px-6">
      {/* Entry Card */}
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          🚗 Vehicle Entry
        </h2>

        {/* Input */}
        <input
          placeholder="Enter Vehicle Number"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-6"
        />

        {/* Button */}
        <button
          onClick={handleEntry}
          className="w-full py-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 transition text-gray-900 font-semibold shadow-lg"
        >
          Enter Vehicle
        </button>

        {/* Error Message */}
        {message && (
          <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 font-medium">
            ❌ {message}
          </div>
        )}

        {/* Success Result (UI like Search Vehicle) */}
        {parsedResult && (
          <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-green-800 mb-3">
              ✅ Slot Allocated
            </h3>
            <p><strong>Vehicle Number:</strong> {parsedResult.vehicleNumber}</p>
            <p><strong>Slot Number:</strong> {parsedResult.slotNumber}</p>
            <p>
              <strong>Entry Time:</strong>{" "}
              {new Date(parsedResult.entryTime).toLocaleString()}
            </p>
            <p className="mt-2 font-semibold text-green-700">
              Status: Parked
            </p>
          </div>
        )}
      </div>
    </main>
  );
}