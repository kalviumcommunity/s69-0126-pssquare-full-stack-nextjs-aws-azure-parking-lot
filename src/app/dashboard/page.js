import { requireAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

async function getSlots() {
  const res = await fetch("http://localhost:3000/api/slots", {
    cache: "no-store",
  });
  return res.json();
}

export default async function DashboardPage() {
  const session = await requireAuth();

  if (!session) {
    redirect("/login");
  }

  const slots = await getSlots();

  const total = slots.length;
  const occupied = slots.filter((s) => s.isOccupied).length;
  const free = total - occupied;

  const occupiedPercent = total ? (occupied / total) * 100 : 0;
  const freePercent = total ? (free / total) * 100 : 0;

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800">
          Parking Dashboard
        </h1>
        <p className="mt-2 text-slate-600">
          Welcome, <span className="font-semibold">{session.user.email}</span>
        </p>
        <p className="text-sm text-slate-500">
          Role: {session.user.role}
        </p>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-slate-500">Total Slots</h3>
          <p className="text-3xl font-bold text-slate-800">{total}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-slate-500">Occupied</h3>
          <p className="text-3xl font-bold text-red-600">{occupied}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-slate-500">Free</h3>
          <p className="text-3xl font-bold text-green-600">{free}</p>
        </div>
      </section>

      {/* Chart */}
      <section className="bg-white p-8 rounded-2xl shadow mb-12">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          Parking Usage Overview
        </h2>

        {/* Occupied Bar */}
        <div className="mb-4">
          <p className="text-sm text-slate-600 mb-1">
            Occupied Slots ({occupied})
          </p>
          <div className="w-full bg-slate-200 rounded-full h-6">
            <div
              className="bg-red-500 h-6 rounded-full"
              style={{ width: `${occupiedPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Free Bar */}
        <div>
          <p className="text-sm text-slate-600 mb-1">
            Free Slots ({free})
          </p>
          <div className="w-full bg-slate-200 rounded-full h-6">
            <div
              className="bg-green-500 h-6 rounded-full"
              style={{ width: `${freePercent}%` }}
            ></div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a
          href="/dashboard/entry"
          className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold mb-2">🚘 Vehicle Entry</h2>
          <p className="text-slate-600">
            Register vehicle entry and allocate slot automatically.
          </p>
        </a>

        <a
          href="/dashboard/exit"
          className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold mb-2">🧾 Vehicle Exit</h2>
          <p className="text-slate-600">
            Record vehicle exit and calculate parking fee.
          </p>
        </a>

        <a
          href="/dashboard/slots"
          className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold mb-2">📊 View Slots</h2>
          <p className="text-slate-600">
            See real-time parking slot availability.
          </p>
        </a>
      </section>

      <footer className="mt-16 text-center text-slate-500 text-sm">
        © 2026 ParkSmart | Team PSsquare
      </footer>
    </main>
  );
}
