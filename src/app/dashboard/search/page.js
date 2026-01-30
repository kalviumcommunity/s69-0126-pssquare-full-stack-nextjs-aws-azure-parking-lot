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
    <main className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-3xl font-bold mb-6">🔍 Search Vehicle</h1>

      <div className="mb-6">
        <input
          className="border p-2 rounded w-72"
          placeholder="Enter Vehicle Number"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="ml-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded w-fit">
          ❌ {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="mt-6 p-6 bg-green-100 rounded shadow w-fit">
          <h2 className="text-xl font-semibold mb-2">
            ✅ Vehicle Found
          </h2>
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
    </main>
  );
}