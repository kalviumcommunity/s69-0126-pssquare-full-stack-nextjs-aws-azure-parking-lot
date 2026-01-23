import { requireAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await requireAuth();

  if (!session) {
    redirect("/login");
  }

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

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Entry */}
        <a
          href="/dashboard/entry"
          className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold text-slate-800 mb-3">
            🚘 Vehicle Entry
          </h2>
          <p className="text-slate-600">
            Register a vehicle entering the parking area and automatically
            allocate a free slot.
          </p>
        </a>

        {/* Exit */}
        <a
          href="/dashboard/exit"
          className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold text-slate-800 mb-3">
            🧾 Vehicle Exit
          </h2>
          <p className="text-slate-600">
            Record vehicle exit, calculate parking duration, and generate fees.
          </p>
        </a>

        {/* Slots */}
        <a
          href="/dashboard/slots"
          className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold text-slate-800 mb-3">
            📊 Parking Slots
          </h2>
          <p className="text-slate-600">
            View all parking slots and check which ones are occupied or free.
          </p>
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-slate-500 text-sm">
        © 2026 ParkSmart Dashboard | Team PSsquare
      </footer>
    </main>
  );
}
