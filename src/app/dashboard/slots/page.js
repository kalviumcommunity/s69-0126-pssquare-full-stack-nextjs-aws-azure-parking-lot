"use client";

import { useEffect, useState } from "react";

export default function SlotsPage() {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    fetch("/api/slots")
      .then((res) => res.json())
      .then((data) => setSlots(data));
  }, []);

  const occupiedSlots = slots.filter((s) => s.isOccupied);
  const freeSlots = slots.filter((s) => !s.isOccupied);

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-3xl font-bold mb-8">📊 Parking Slots Overview</h1>

      {/* OCCUPIED SLOTS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">
          🚗 Occupied Slots ({occupiedSlots.length})
        </h2>

        {occupiedSlots.length === 0 ? (
          <p className="text-slate-600">No occupied slots.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {occupiedSlots.map((slot) => (
              <div
                key={slot._id}
                className="bg-red-50 border border-red-200 rounded-xl p-5 shadow"
              >
                <h3 className="text-xl font-semibold text-red-700 mb-2">
                  Slot #{slot.slotNumber}
                </h3>
                <p>
                  <strong>Vehicle:</strong> {slot.vehicleNumber}
                </p>
                <p>
                  <strong>Entry Time:</strong>{" "}
                  {new Date(slot.entryTime).toLocaleString()}
                </p>
                <p className="mt-2 font-semibold text-red-600">
                  Status: Occupied
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FREE SLOTS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-green-600">
          🟢 Free Slots ({freeSlots.length})
        </h2>

        {freeSlots.length === 0 ? (
          <p className="text-slate-600">No free slots available.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {freeSlots.map((slot) => (
              <div
                key={slot._id}
                className="bg-green-50 border border-green-200 rounded-xl p-4 text-center shadow"
              >
                <p className="text-lg font-semibold text-green-700">
                  Slot #{slot.slotNumber}
                </p>
                <p className="text-sm text-green-600 mt-1">Free</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}