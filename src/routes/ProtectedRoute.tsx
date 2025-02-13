import { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return <>{children}</>;
}
