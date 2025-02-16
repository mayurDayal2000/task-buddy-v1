import { ReactNode, useState } from "react";
import ChevronIcon from "../../assets/icons/icon-chevron.svg?react";

interface AccordionProps {
  title: string;
  id: string;
  isActive: boolean;
  color: {
    bg: string;
    stroke: string;
  };
  children: ReactNode;
}

export function Accordion({
  title,
  id,
  isActive,
  children,
  color,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(() => isActive);

  return (
    <div
      className={`mb-4 w-full rounded-xl last:mb-0 md:mb-6 xl:mb-8 ${color.bg}`}
    >
      <button
        type="button"
        className="flex w-full flex-wrap items-center justify-between p-3"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={`accordion-text-${id}`}
      >
        <div className="flex-1">
          <h2 className="font-mulish text-left text-sm font-semibold md:text-base">
            {title}
          </h2>
        </div>

        <div className="flex-0">
          <ChevronIcon
            className={`h-4 w-4 origin-center transform transition duration-200 ease-out md:h-6 md:w-6 ${
              isOpen ? "-rotate-180" : ""
            } ${color.stroke}`}
          />
        </div>
      </button>

      <div
        className={`grid overflow-hidden rounded-b-xl border border-[#FFFAEA] bg-[#F1F1F1] transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        id={`accordion-text-${id}`}
        role="region"
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
