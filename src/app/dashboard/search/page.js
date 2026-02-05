"use client";

import { useEffect, useState } from "react";

export default function SearchVehiclePage() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [slots, setSlots] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/slots")
      .then((res) => res.json())
      .then((data) => setSlots(data));
  }, []);

  const handleSearch = () => {
    setError("");
    setResult(null);

    if (!vehicleNumber) {
      setError("Please enter a vehicle number");
      return;
    }

    const found = slots.find(
      (slot) =>
        slot.isOccupied &&
        slot.vehicleNumber?.toLowerCase() === vehicleNumber.toLowerCase()
    );

    if (!found) {
      setError("Vehicle is not currently parked");
      return;
    }

    setResult(found);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex items-center justify-center px-6">
      {/* Card */}
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          🔍 Search Vehicle
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
          onClick={handleSearch}
          className="w-full py-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 transition text-gray-900 font-semibold shadow-lg"
        >
          Search Vehicle
        </button>

        {/* Error (UI only) */}
        {error && (
          <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 font-medium">
            ❌ {error}
          </div>
        )}

        {/* Result (UI only) */}
        {result && (
          <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-green-800 mb-3">
              ✅ Vehicle Found
            </h3>
            <p><strong>Vehicle Number:</strong> {result.vehicleNumber}</p>
            <p><strong>Slot Number:</strong> {result.slotNumber}</p>
            <p>
              <strong>Entry Time:</strong>{" "}
              {new Date(result.entryTime).toLocaleString()}
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
