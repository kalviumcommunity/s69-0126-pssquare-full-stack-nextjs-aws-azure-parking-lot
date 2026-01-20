import { requireAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await requireAuth();

  if (!session) {
    redirect("/login");
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>Dashboard</h1>

      <p>Welcome, {session.user.email}</p>
      <p>Role: {session.user.role}</p>

      <ul>
        <li><a href="/dashboard/entry">Vehicle Entry</a></li>
        <li><a href="/dashboard/exit">Vehicle Exit</a></li>
        <li><a href="/dashboard/slots">View Slots</a></li>
      </ul>
    </main>
  );
}