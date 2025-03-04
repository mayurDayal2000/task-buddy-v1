/**
 * Protected Route Component
 *
 * Renders children only if user is authenticated,
 * otherwise redirects to sign-in page.
 */
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { Spinner } from "../components/ui/Spinner";

interface ProtectedRouteProps {
  /**
   * Child components to render when user is authenticated
   */
  children: ReactNode;
}

/**
 * Component that protects routes requiring authentication
 *
 * @param props - Component props
 * @param props.children - Components to render when authenticated
 * @returns Children when authenticated, otherwise redirects to sign-in
 */
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return <Spinner />;
  }

  // Redirect to sign-in if not authenticated
  if (!user) {
    // Preserve the attempted URL for redirecting back after login
    return (
      <Navigate
        to="/auth/sign-in"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  // User is authenticated, render children
  return <>{children}</>;
}
