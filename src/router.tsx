/**
 * Application Router Configuration
 *
 * Sets up routing with code splitting, authentication protection,
 * and fallback loading states.
 */
import { createBrowserRouter, Navigate } from "react-router";
import Root from "./Root";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthProvider from "./providers/AuthProvider";
import { lazy, Suspense } from "react";
import { Spinner } from "./components/ui/Spinner";
import ErrorBoundary from "./routes/ErrorRoute";

// Lazy-loaded page components for code splitting and performance
const SignInPage = lazy(() =>
  import("./pages/SignInPage").then((module) => ({
    default: module.default,
  }))
);

const ListPage = lazy(() =>
  import("./pages/Dashboard/ListPage").then((module) => ({
    default: module.default,
  }))
);

const BoardPage = lazy(() =>
  import("./pages/Dashboard/BoardPage").then((module) => ({
    default: module.default,
  }))
);

/**
 * Application router configuration
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Root />
      </AuthProvider>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      // Redirect root to the appropriate view based on auth state
      {
        index: true,
        element: <Navigate to="/dashboard/list-view" replace />,
      },

      // Authentication routes
      {
        path: "auth",
        children: [
          {
            path: "sign-in",
            element: (
              <Suspense fallback={<Spinner />}>
                <SignInPage />
              </Suspense>
            ),
          },
        ],
      },

      // Dashboard routes (protected)
      {
        path: "dashboard",
        children: [
          // Default dashboard view redirects to list view
          {
            index: true,
            element: <Navigate to="/dashboard/list-view" replace />,
          },
          // List view
          {
            path: "list-view",
            element: (
              <ProtectedRoute>
                <Suspense fallback={<Spinner />}>
                  <ListPage />
                </Suspense>
              </ProtectedRoute>
            ),
          },
          // Board view (kanban)
          {
            path: "board-view",
            element: (
              <ProtectedRoute>
                <Suspense fallback={<Spinner />}>
                  <BoardPage />
                </Suspense>
              </ProtectedRoute>
            ),
          },
        ],
      },

      // Catch-all route for unmatched paths
      {
        path: "*",
        element: <Navigate to="/auth/sign-in" replace />,
      },
    ],
  },
]);

export default router;
