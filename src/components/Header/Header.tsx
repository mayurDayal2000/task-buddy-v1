/**
 * Header Component
 *
 * Application header with logo and user profile dropdown.
 * Appears on all authenticated pages.
 */
import { NavLink } from "react-router";
import Profile from "./Profile/Profile";
import TaskIcon from "../../assets/icons/icon-task.svg?react";

/**
 * Main application header component
 */
export default function Header() {
  return (
    <header
      className="w-full bg-[#FAEEFC] xl:bg-transparent shadow-md xl:shadow-none p-4 md:p-6 xl:p-8"
      role="banner"
    >
      <div className="container mx-auto flex items-center justify-between">
        <NavLink
          to="/dashboard/list-view"
          className="font-mulish text-base font-semibold text-[#2F2F2F] md:text-lg xl:text-2xl"
          aria-label="TaskBuddy Home"
        >
          <div className="flex items-center gap-1">
            <TaskIcon
              className="hidden fill-[#2F2F2F] xl:block"
              aria-hidden="true"
            />
            <span>TaskBuddy</span>
          </div>
        </NavLink>

        {/* User profile section */}
        <Profile />
      </div>
    </header>
  );
}
