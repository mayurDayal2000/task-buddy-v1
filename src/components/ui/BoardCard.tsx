/**
 * Board Card Component
 *
 * A card component for the board view that displays a column of tasks.
 * Each column has a colored header and displays tasks or a placeholder message.
 */
import { ReactNode } from "react";

/**
 * Props for the BoardCard component
 */
export interface BoardCardProps {
  /**
   * Title of the card/column (e.g., "To-Do", "In Progress", "Completed")
   */
  title: string;

  /**
   * CSS class for background color of the title area
   */
  color: string;

  /**
   * Optional children to render inside the card (typically task items)
   */
  children?: ReactNode;
}

/**
 * Card component for board view columns
 *
 * @param props - Component props
 */
export function BoardCard({ title, color, children }: BoardCardProps) {
  return (
    <article
      className="flex min-h-[512px] flex-col rounded-xl border border-gray-300 bg-[#f1f1f1] p-3"
      aria-label={`${title} column`}
    >
      <h2
        className={`font-mulish self-start rounded-sm ${color} px-2 py-1 text-sm font-medium uppercase`}
      >
        {title}
      </h2>

      {/* Render children (tasks) or empty state message */}
      {children ? (
        <div className="flex flex-col gap-2 mt-3 flex-grow overflow-y-auto">
          {children}
        </div>
      ) : (
        <div className="flex h-full items-center justify-center">
          <p className="font-mulish text-sm font-medium text-[#2F2F2F]">
            No Tasks in {title}
          </p>
        </div>
      )}
    </article>
  );
}
