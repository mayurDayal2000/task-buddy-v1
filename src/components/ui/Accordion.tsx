/**
 * Accordion Component
 *
 * An expandable/collapsible section with smooth animation.
 * Used for task grouping by status in list view.
 */
import { ReactNode, useState, useCallback } from "react";
import ChevronIcon from "../../assets/icons/icon-chevron.svg?react";

/**
 * Props for the Accordion component
 */
export interface AccordionProps {
  /**
   * Title displayed in the accordion header
   */
  title: string;

  /**
   * Unique identifier for accessibility and animations
   */
  id: string;

  /**
   * Whether the accordion should be initially expanded
   */
  isActive: boolean;

  /**
   * Color configuration for styling
   */
  color: {
    /**
     * Background color CSS class
     */
    bg: string;

    /**
     * Stroke color CSS class for the chevron
     */
    stroke: string;
  };

  /**
   * Content to display when accordion is expanded
   */
  children: ReactNode;
}

/**
 * Expandable/collapsible accordion component
 *
 * @param props - Component props
 */
export function Accordion({
  title,
  id,
  isActive,
  children,
  color,
}: AccordionProps) {
  // State to track if accordion is expanded/collapsed
  const [isOpen, setIsOpen] = useState(() => isActive);

  // Toggle accordion state with memoized callback
  const toggleAccordion = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Generate unique IDs for accessibility
  const headerId = `accordion-header-${id}`;
  const contentId = `accordion-content-${id}`;

  return (
    <div
      className={`mb-4 w-full rounded-xl last:mb-0 md:mb-6 xl:mb-8 ${color.bg}`}
    >
      <button
        type="button"
        className="flex w-full flex-wrap items-center justify-between p-3"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={contentId}
        id={headerId}
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
            aria-hidden="true"
          />
        </div>
      </button>

      <div
        className={`grid overflow-hidden rounded-b-xl border border-[#FFFAEA] bg-[#F1F1F1] transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        id={contentId}
        role="region"
        aria-labelledby={headerId}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
