/**
 * Tab Menu Component
 *
 * Navigation component for switching between list and board views.
 * Only visible on desktop viewports.
 */
import { NavLink, NavLinkProps } from "react-router";
import ListIcon from "../../assets/icons/icon-list.svg?react";
import BoardIcon from "../../assets/icons/icon-board.svg?react";
import { JSX, useMemo } from "react";

/**
 * Interface for tab configuration
 */
interface Tab {
  /**
   * Route path the tab links to
   */
  to: string;

  /**
   * SVG icon component to display
   */
  icon: JSX.Element;

  /**
   * Text label for the tab
   */
  label: string;

  /**
   * Aria label for accessibility
   */
  ariaLabel?: string;
}

/**
 * Tab navigation component for dashboard view switching
 */
export default function TabMenu() {
  // Define tabs with memoization to prevent recreation on each render
  const tabs: Tab[] = useMemo(
    () => [
      {
        to: "/dashboard/list-view",
        icon: <ListIcon className="w-4 h-4" />,
        label: "List",
        ariaLabel: "Switch to list view",
      },
      {
        to: "/dashboard/board-view",
        icon: <BoardIcon className="w-4 h-4" />,
        label: "Board",
        ariaLabel: "Switch to board view",
      },
    ],
    []
  );

  /**
   * Style function for NavLink components based on active state
   */
  const getNavLinkStyles: NavLinkProps["className"] = ({ isActive }) =>
    `flex items-center gap-1 border-b py-1 transition-colors ${
      isActive
        ? "border-b-black font-semibold"
        : "border-b-transparent hover:border-b-gray-400"
    }`;

  return (
    <nav
      className="hidden xl:block xl:px-8"
      aria-label="Dashboard view options"
    >
      <div className="container mx-auto">
        <ul className="flex items-center gap-6 px-2">
          {tabs.map((tab) => (
            <li key={tab.to}>
              <NavLink
                to={tab.to}
                className={getNavLinkStyles}
                end
                aria-label={tab.ariaLabel}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
