"use client";

import { useEffect, useState } from "react";

export default function SlotsPage() {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    fetch("/api/slots")
      .then(res => res.json())
      .then(data => setSlots(data));
  }, []);

  return (
    <main style={{ padding: "40px" }}>
      <h2>Parking Slots</h2>

      <ul>
        {slots.map((slot) => (
          <li key={slot._id}>
            Slot #{slot.slotNumber} — {slot.isOccupied ? "Occupied" : "Free"}
          </li>
        ))}
      </ul>
    </main>
  );
}