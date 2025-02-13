import { ReactNode } from "react";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = null;

  if (!user) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return <>{children}</>;
}
