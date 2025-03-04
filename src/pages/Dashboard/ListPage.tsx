/**
 * List Page Component
 *
 * List view for task management with expandable sections by status.
 * Responsive design for both mobile and desktop.
 */
import Header from "../../components/Header/Header";
import TabMenu from "../../components/TabMenu/TabMenu";
import { Accordion } from "../../components/ui/Accordion";
import PlusIcon from "../../assets/icons/icon-plus.svg?react";

/**
 * Task status section definition
 */
interface TaskSection {
  id: string;
  title: string;
  isActive: boolean;
  color: {
    bg: string;
    stroke: string;
  };
}

/**
 * List view page component
 */
export default function ListPage() {
  /**
   * Task section definitions with styling
   */
  const taskSections: TaskSection[] = [
    {
      id: "todo",
      title: "Todo",
      isActive: true,
      color: { bg: "bg-[#FAC3FF]", stroke: "stroke-[#3E0344]" },
    },
    {
      id: "in-progress",
      title: "In-Progress",
      isActive: true,
      color: { bg: "bg-[#85D9F1]", stroke: "stroke-[#055167]" },
    },
    {
      id: "completed",
      title: "Completed",
      isActive: false,
      color: { bg: "bg-[#CEFFCC]", stroke: "stroke-[#0D7A0A]" },
    },
  ];

  return (
    <>
      <Header />
      <TabMenu />

      <main className="my-8 px-4 md:px-6 xl:px-8" aria-labelledby="list-title">
        <div className="container mx-auto">
          <h1 id="list-title" className="sr-only">
            Task List
          </h1>

          {/* Table header (desktop only) */}
          <div
            className="hidden py-2 xl:grid xl:grid-cols-4 xl:border-t xl:border-t-gray-300"
            role="row"
          >
            {/* Column headers */}
            {["Task name", "Due on", "Task Status", "Task Category"].map(
              (header, index) => (
                <div key={index} className="px-2" role="columnheader">
                  <h3 className="font-mulish font-bold text-gray-700 text-sm">
                    {header}
                  </h3>
                </div>
              )
            )}
          </div>

          {/* Task sections */}
          {taskSections.map((section) => (
            <Accordion
              key={section.id}
              id={section.id}
              title={section.title}
              color={section.color}
              isActive={section.isActive}
            >
              <div className="w-full min-h-[156px] flex flex-col">
                {/* Add task button (Todo section only) */}
                {section.title === "Todo" && (
                  <div className="border-b border-b-gray-300 px-6 py-1">
                    <button
                      type="button"
                      className="flex cursor-pointer items-center gap-1 rounded-full border border-transparent px-3 py-2 hover:border-[#7B1984] focus:outline-none focus:ring-2 focus:ring-[#7B1984] focus:border-transparent transition-all"
                      aria-label="Add new task"
                    >
                      <PlusIcon
                        className="h-4 w-4 stroke-[#7B1984]"
                        aria-hidden="true"
                      />
                      <span className="font-mulish text-sm font-bold uppercase">
                        Add Task
                      </span>
                    </button>
                  </div>
                )}

                {/* Empty state message (would be replaced with task list in full implementation) */}
                <div className="flex h-full items-center justify-center">
                  <p className="font-mulish text-sm font-medium text-[#2F2F2F]">
                    No Tasks in {section.title}
                  </p>
                </div>
              </div>
            </Accordion>
          ))}
        </div>
      </main>
    </>
  );
}
