/**
 * Authentication Hook
 *
 * A custom hook that provides access to the authentication context.
 * Throws an error if used outside of the AuthProvider component.
 */
import { useContext } from "react";
import { AuthContext, AuthContextType } from "../contexts/AuthContext";

/**
 * Hook to access authentication state and methods
 *
 * @returns Authentication context containing user state and auth methods
 * @throws Error if used outside of an AuthProvider
 */
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  // Validate context exists to ensure hook is used within AuthProvider
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider component");
  }

  return context;
}
