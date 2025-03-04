/**
 * Application Entry Point
 *
 * Main entry point that bootstraps the React application.
 * Sets up the router provider and renders the app into the DOM.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import router from "./router";

/**
 * Main application initialization
 */
function initializeApp() {
  const rootElement = document.getElementById("root");

  // Validate that the root element exists
  if (!rootElement) {
    throw new Error("Root element not found. The app cannot be initialized.");
  }

  // Create React root and render the application
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

// Initialize the application
initializeApp();
