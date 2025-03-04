/**
 * Authentication Provider Component
 *
 * Manages authentication state and provides auth functionality to the application.
 * Handles login, logout, and automatic redirection based on auth state.
 */
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { ReactNode, useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router";
import { auth, googleProvider } from "../config/firebase";
import { AuthContext } from "../contexts/AuthContext";
import { Spinner } from "../components/ui/Spinner";

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Authentication Provider Component
 *
 * @param props - Component props
 * @param props.children - Child components that will have access to auth context
 */
export default function AuthProvider({ children }: AuthProviderProps) {
  // Authentication state
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  // Redirect authenticated users to dashboard if they're on auth pages
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      // Success handler
      (currentUser) => {
        setUser(currentUser);
        setIsLoading(false);

        // Redirect authenticated users to dashboard if they're not already there
        if (currentUser && !location.pathname.startsWith("/dashboard")) {
          navigate("/dashboard/list-view", { replace: true });
        }
      },
      // Error handler
      (authError) => {
        console.error("Auth state change error:", authError);
        setIsLoading(false);
      }
    );

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, [location.pathname, navigate]);

  /**
   * Initiates Google sign-in process
   */
  const login = useCallback(async () => {
    try {
      setIsLoading(true);
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
      setIsLoading(false);
    }
  }, []);

  /**
   * Signs out the current user
   */
  const logout = useCallback(async () => {
    try {
      setIsLoading(true);
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
      setIsLoading(false);
    }
  }, []);

  // Show loading spinner during initial authentication check
  if (isLoading && !user) {
    return <Spinner />;
  }

  // Provide auth context to children components
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
