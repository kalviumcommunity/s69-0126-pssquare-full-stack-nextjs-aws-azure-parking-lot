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
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex items-center justify-center px-6">
      
      {/* Exit Card */}
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md text-center">
        
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          🧾 Vehicle Exit
        </h2>

        {/* Input */}
        <input
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-6"
          placeholder="Enter Vehicle Number"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleExit}
          className="w-full py-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 transition text-gray-900 font-semibold shadow-lg"
        >
          Checkout Vehicle
        </button>

        {/* Error Message */}
        {error && (
          <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-xl border border-red-200">
            ❌ {error}
          </div>
        )}

        {/* Success Result */}
        {result && (
          <div className="mt-6 p-6 bg-yellow-50 rounded-2xl shadow border border-yellow-200 text-left">
            <h3 className="text-xl font-semibold mb-3 text-green-700">
              ✅ Vehicle Exited Successfully
            </h3>
            <p className="text-gray-700">
              <strong>Hours Parked:</strong> {result.hoursParked}
            </p>
            <p className="text-gray-700">
              <strong>Total Fee:</strong> ₹{result.fee}
            </p>
          </div>
        )}

      </div>
    </main>
  );
}