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
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex items-center justify-center px-6">
      
      {/* Entry Card */}
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md text-center">
        
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
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

        {/* Message */}
        {message && (
          <p className="mt-6 text-gray-700 font-medium bg-yellow-50 border border-yellow-200 rounded-xl py-3 px-4">
            {message}
          </p>
        )}

      </div>
    </main>
  );
}