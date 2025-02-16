import { ReactNode } from "react";

interface BoardCardProps {
  title: string;
  color: string;
  children?: ReactNode;
}

export function BoardCard({ title, color, children }: BoardCardProps) {
  return (
    <article className="flex min-h-[512px] flex-col rounded-xl border border-gray-300 bg-[#f1f1f1] p-3">
      <h2
        className={`font-mulish self-start rounded-sm ${color} px-2 py-1 text-sm font-medium uppercase`}
      >
        {title}
      </h2>

      {children ? (
        children
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
