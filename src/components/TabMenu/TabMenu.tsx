import { NavLink, NavLinkProps } from "react-router";
import ListIcon from "../../assets/icons/icon-list.svg?react";
import BoardIcon from "../../assets/icons/icon-board.svg?react";
import { JSX } from "react";

type Tab = {
  to: string;
  icon: JSX.Element;
  label: string;
};

const tabs: Tab[] = [
  {
    to: "/dashboard/list-view",
    icon: <ListIcon className="w-4 h-4" />,
    label: "List",
  },
  {
    to: "/dashboard/board-view",
    icon: <BoardIcon className="w-4 h-4" />,
    label: "Board",
  },
];

const getNavLinkStyles: NavLinkProps["className"] = ({ isActive }) =>
  `flex items-center gap-1 border-b py-1 ${
    isActive ? "border-b-black" : "border-b-transparent"
  }`;

export default function TabMenu() {
  return (
    <nav className="hidden xl:block xl:px-8">
      <div className="container mx-auto">
        <ul className="flex items-center gap-6 px-2">
          {tabs.map((tab) => (
            <li key={tab.to}>
              <NavLink to={tab.to} className={getNavLinkStyles} end>
                {tab.icon}
                {tab.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
