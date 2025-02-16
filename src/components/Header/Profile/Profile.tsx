import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import LogoutIcon from "../../../assets/icons/icon-logout.svg?react";
import UserIcon from "../../../assets/icons/icon-user.svg?react";

export default function Profile() {
  const { user, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const toggler = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    const dropdown = document.getElementById(".profile-dropdown");

    if (dropdown && !dropdown.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" id="profile-dropdown">
      <button
        className="flex cursor-pointer items-center gap-2"
        onClick={toggler}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="h-6 w-6 rounded-full border border-gray-400 md:h-8 md:w-8">
          <UserIcon className="h-full w-full fill-fuchsia-300" />
        </div>

        <span className="font-mulish hidden text-base font-bold xl:block">
          {user?.displayName?.split(" ")[0]}
        </span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-28 rounded-lg border border-fuchsia-200 bg-[#FFF9F9] shadow-md xl:left-1/2 xl:-translate-x-1/2"
          role="menu"
          aria-orientation="vertical"
        >
          <button
            className="font-mulish flex w-full cursor-pointer items-center gap-1 px-6 py-3 text-xs font-semibold"
            onClick={logout}
          >
            <LogoutIcon className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
}
