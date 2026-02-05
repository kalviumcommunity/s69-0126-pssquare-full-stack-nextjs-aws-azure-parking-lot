export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 text-gray-800">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-md rounded-b-2xl">
        <h1 className="text-2xl font-bold tracking-wide">
          ParkSmart
        </h1>
        <a
          href="/login"
          className="px-5 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 transition text-gray-900 font-semibold shadow"
        >
          Login
        </a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-24 px-6">
        <div className="bg-white rounded-3xl shadow-xl p-14 max-w-4xl">

          <h2 className="text-5xl font-extrabold leading-tight">
            Smart Parking{" "}
            <span className="text-yellow-500">Made Simple</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            A full-stack parking management system that automates
            slot allocation, tracks vehicle entry & exit, and calculates
            parking fees accurately.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="/dashboard"
              className="px-8 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 transition text-lg text-gray-900 font-semibold shadow"
            >
              Go to Dashboard
            </a>
            <a
              href="/login"
              className="px-8 py-3 rounded-xl border border-yellow-400 hover:bg-yellow-100 transition text-lg text-gray-800 shadow"
            >
              Admin / Staff Login
            </a>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="mt-32 px-10">
        <div className="bg-yellow-50 rounded-3xl p-12 shadow-lg">

          <h3 className="text-3xl font-bold text-center mb-14">
            Why ParkSmart?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-3">
                🚘 Auto Slot Allocation
              </h4>
              <p className="text-gray-600">
                Automatically assigns free parking slots without any
                manual intervention.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-3">
                ⏱ Accurate Time & Billing
              </h4>
              <p className="text-gray-600">
                Entry and exit times are recorded digitally and parking
                fees are calculated precisely.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-3">
                🔐 Secure Role-Based Access
              </h4>
              <p className="text-gray-600">
                Admin and Staff have controlled access using secure
                authentication.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-32 py-6 text-center text-gray-500 border-t border-yellow-200">
        <p>
          ©️ 2026 ParkSmart | Built by Team PSsquare
        </p>
      </footer>

    </main>
  );
}