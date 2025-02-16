import { NavLink } from "react-router";
import Profile from "./Profile/Profile";
import TaskIcon from "../../assets/icons/icon-task.svg?react";

export default function Header() {
  return (
    <header className="w-full bg-[#FAEEFC] xl:bg-transparent shadow-md xl:shadow-none p-4 md:p-6 xl:p-8">
      <div className="container mx-auto flex items-center justify-between">
        <NavLink
          to="/dashboard"
          className="font-mulish text-base font-semibold text-[#2F2F2F] md:text-lg xl:text-2xl"
        >
          <div className="flex items-center gap-1">
            <TaskIcon className="hidden fill-[#2F2F2F] xl:block" />
            TaskBuddy
          </div>
        </NavLink>

        <Profile />
      </div>
    </header>
  );
}
