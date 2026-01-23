export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold tracking-wide">
          🚗 ParkSmart
        </h1>
        <a
          href="/login"
          className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
        >
          Login
        </a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-24 px-6">
        <h2 className="text-5xl font-extrabold leading-tight max-w-4xl">
          Smart Parking <span className="text-blue-400">Made Simple</span>
        </h2>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          A full-stack parking management system that automates
          slot allocation, tracks vehicle entry & exit, and calculates
          parking fees accurately.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="/dashboard"
            className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-lg"
          >
            Go to Dashboard
          </a>
          <a
            href="/login"
            className="px-8 py-3 rounded-xl border border-gray-400 hover:bg-gray-700 transition text-lg"
          >
            Admin / Staff Login
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="mt-32 px-10">
        <h3 className="text-3xl font-bold text-center mb-14">
          Why ParkSmart?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-3">
              🚘 Auto Slot Allocation
            </h4>
            <p className="text-gray-300">
              Automatically assigns free parking slots without any
              manual intervention.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-3">
              ⏱ Accurate Time & Billing
            </h4>
            <p className="text-gray-300">
              Entry and exit times are recorded digitally and parking
              fees are calculated precisely.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-3">
              🔐 Secure Role-Based Access
            </h4>
            <p className="text-gray-300">
              Admin and Staff have controlled access using secure
              authentication.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-32 py-6 text-center text-gray-400 border-t border-gray-700">
        <p>
          ©️ 2026 ParkSmart | Built by Team PSsquare
        </p>
      </footer>
    </main>
  );
}