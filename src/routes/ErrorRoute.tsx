/**
 * Error boundary component for route errors
 */
const ErrorBoundary = () => (
  <div className="min-h-screen flex items-center justify-center p-4">
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
      <p className="mb-4">
        We're sorry, but there was an error loading this page.
      </p>
      <a
        href="/"
        className="inline-block px-4 py-2 bg-[#7B1984] text-white rounded-md"
      >
        Return to Home
      </a>
    </div>
  </div>
);

export default ErrorBoundary;
