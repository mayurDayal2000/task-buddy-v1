/**
 * Sign In Page Component
 *
 * Landing page for unauthenticated users with Google authentication option.
 * Features responsive design with full illustration on desktop.
 */
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import TaskIcon from "../assets/icons/icon-task.svg?react";
import GoogleIcon from "../assets/icons/icon-google.svg?react";
import illustration from "../assets/images/illustration-task.jpg";
import { useAuth } from "../hooks/useAuth";
import { Spinner } from "../components/ui/Spinner";

/**
 * Authentication page with Google sign-in
 */
export default function SignInPage() {
  const { login, isLoading } = useAuth();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Get redirect path from location state, or default to list view
  const from =
    (location.state as { from?: string })?.from || "/dashboard/list-view";

  /**
   * Handle login button click
   */
  const handleLogin = async () => {
    try {
      setIsAuthenticating(true);
      await login();

      // Redirect to the page user tried to access before authentication
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login failed:", error);
      setIsAuthenticating(false);
    }
  };

  // Show loading spinner during authentication
  if (isLoading || isAuthenticating) {
    return <Spinner text="Authenticating..." />;
  }

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-[#FFF9F9] bg-[url(/src/assets/images/bg-mobile.svg)] bg-cover bg-no-repeat px-4 sm:px-6 lg:px-8 xl:bg-[url(/src/assets/images/bg-desktop.svg)] xl:bg-contain xl:bg-right"
      data-testid="sign-in-page"
    >
      <div className="w-full flex flex-col xl:flex-row lg:items-center">
        <main className="flex flex-col justify-center flex-1">
          <div className="w-full max-w-sm mx-auto">
            <div className="flex items-center justify-center gap-1 xl:justify-start">
              <TaskIcon
                className="w-8 h-8 sm:w-10 sm:h-10"
                aria-hidden="true"
              />
              <h1 className="text-center text-2xl font-semibold text-[#7B1984] md:text-3xl">
                TaskBuddy
              </h1>
            </div>
            <p className="mt-1 text-center text-xs md:text-sm font-medium xl:text-start">
              Streamline your workflow and track progress effortlessly with our
              all-in-one task management app.
            </p>
          </div>

          <div className="mt-6 w-full max-w-xs mx-auto md:max-w-sm">
            {/* Google sign-in button */}
            <button
              type="button"
              className="w-full flex justify-center items-center gap-2 px-6 py-3 text-sm md:text-base font-bold text-white bg-[#292929] rounded-full shadow-md border border-[#292929] hover:bg-white hover:text-[#292929] transition-colors cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[#7B1984]"
              onClick={handleLogin}
              aria-label="Sign in with Google"
            >
              <GoogleIcon className="w-5 h-5" aria-hidden="true" />
              <span>Continue with Google</span>
            </button>
          </div>
        </main>

        {/* Illustration (desktop only) */}
        <aside className="hidden xl:block xl:max-w-2xl flex-1">
          <img
            src={illustration}
            alt="Task management illustration"
            className="w-full"
            loading="lazy"
          />
        </aside>
      </div>
    </div>
  );
}
