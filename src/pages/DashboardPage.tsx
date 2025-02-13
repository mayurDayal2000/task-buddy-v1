import { useAuth } from "../hooks/useAuth";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  return (
    <>
      <h1>Welcome User</h1>
      <p>Welcome, {user?.displayName}</p>

      <button type="button" onClick={logout}>
        Sign Out
      </button>
    </>
  );
}
