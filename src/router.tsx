import { createBrowserRouter, Navigate } from "react-router";
import Root from "./Root";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthProvider from "./providers/AuthProvider";
import { lazy, Suspense } from "react";
import { Spinner } from "./components/ui/Spinner";

const SignInPage = lazy(() => import("./pages/SignInPage"));
const ListPage = lazy(() => import("./pages/Dashboard/ListPage"));
const BoardPage = lazy(() => import("./pages/Dashboard/BoardPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Root />
      </AuthProvider>
    ),
    children: [
      {
        path: "/auth/sign-in",
        element: (
          <Suspense fallback={<Spinner />}>
            <SignInPage />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/list-view",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Spinner />}>
              <ListPage />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/board-view",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Spinner />}>
              <BoardPage />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/auth/sign-in" replace />,
      },
    ],
  },
]);

export default router;
