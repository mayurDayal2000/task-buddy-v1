import { useAuth } from "../hooks/useAuth";

export default function SignInPage() {
  const { login } = useAuth();
  return (
    <>
      <h1>Sign In / Sign Up</h1>
      <button type="button" onClick={login}>
        Sign In with Google
      </button>
    </>
  );
}
