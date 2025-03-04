/**
 * Root Component
 *
 * Application root layout that handles navigation state and displays loading indicators.
 * Uses React Router's Outlet for rendering child routes.
 */
import { Outlet, useNavigation } from "react-router";
import { Spinner } from "./components/ui/Spinner";

/**
 * Root layout component for the application
 *
 * Manages navigation loading states and provides the main
 * outlet for nested routes to render their content
 */
export default function Root() {
  // Get navigation state from React Router
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Display loading spinner during navigation */}
      {isNavigating && (
        <div className="fixed inset-0 z-50 bg-white bg-opacity-70">
          <Spinner />
        </div>
      )}

      {/* Outlet for nested routes */}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
