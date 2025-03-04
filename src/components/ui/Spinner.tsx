/**
 * Spinner Component
 *
 * A loading indicator that displays a spinning animation with text.
 * Used during async operations to provide visual feedback to users.
 */
import LoaderIcon from "../../assets/icons/icon-loader.svg?react";

interface SpinnerProps {
  /**
   * Optional text to display alongside spinner
   * @default "Loading..."
   */
  text?: string;

  /**
   * Whether to display in fullscreen mode
   * @default true
   */
  fullscreen?: boolean;
}

/**
 * Loading spinner component for visual feedback during async operations
 */
export function Spinner({
  text = "Loading...",
  fullscreen = true,
}: SpinnerProps) {
  const containerClasses = fullscreen
    ? "w-full min-h-screen flex items-center justify-center gap-1"
    : "flex items-center justify-center gap-1 p-4";

  return (
    <div className={containerClasses} role="status" aria-live="polite">
      <LoaderIcon
        className="w-10 h-10 stroke-blue-600 animate-spin"
        aria-hidden="true"
      />
      <span className="font-mulish font-semibold text-xs text-blue-600 md:text-base xl:text-lg">
        {text}
      </span>
    </div>
  );
}
