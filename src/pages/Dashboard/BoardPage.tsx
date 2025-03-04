/**
 * Board Page Component
 *
 * Kanban board view for task management.
 * Desktop-only view that implements drag-and-drop functionality for tasks.
 */
import { Navigate } from "react-router";
import Header from "../../components/Header/Header";
import TabMenu from "../../components/TabMenu/TabMenu";
import { BoardCard } from "../../components/ui/BoardCard";
import useIsDesktop from "../../hooks/useIsDesktop";

/**
 * Type definitions for column configuration
 */
interface BoardColumn {
  id: string;
  title: string;
  color: string;
}

/**
 * Board view page component
 */
export default function BoardPage() {
  const isDesktop = useIsDesktop();

  // Redirect mobile users to list view
  if (!isDesktop) {
    return <Navigate to="/dashboard/list-view" replace />;
  }

  // Column definitions with consistent styling
  const columns: BoardColumn[] = [
    { id: "todo", title: "To-Do", color: "bg-[#FAC3FF]" },
    { id: "in-progress", title: "In-Progress", color: "bg-[#85D9F1]" },
    { id: "completed", title: "Completed", color: "bg-[#A2D6A0]" },
  ];

  return (
    <>
      <Header />
      <TabMenu />

      <main className="my-8 px-4 md:px-6 xl:px-8" aria-labelledby="board-title">
        <div className="container mx-auto">
          <h1 id="board-title" className="sr-only">
            Task Board
          </h1>

          <section
            className="grid w-full max-w-5xl grid-cols-3 gap-6"
            aria-label="Task columns"
          >
            {columns.map((column) => (
              <BoardCard
                key={column.id}
                title={column.title}
                color={column.color}
              />
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
