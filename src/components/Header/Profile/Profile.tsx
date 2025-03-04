/**
 * Profile Component
 *
 * User profile dropdown with logout functionality.
 * Displays user avatar and name (on desktop) with a dropdown menu.
 */
import { useEffect, useState, useRef, useCallback } from "react";
import { useAuth } from "../../../hooks/useAuth";
import LogoutIcon from "../../../assets/icons/icon-logout.svg?react";
import UserIcon from "../../../assets/icons/icon-user.svg?react";

/**
 * Profile component with dropdown functionality
 */
export default function Profile() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // Reference to dropdown element for click outside detection
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get first name from display name
  const firstName = user?.displayName?.split(" ")[0] || "User";

  /**
   * Toggle dropdown visibility
   */
  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  /**
   * Handle logout action
   */
  const handleLogout = useCallback(async () => {
    try {
      await logout();
      setIsOpen(false);
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  }, [logout]);

  /**
   * Close dropdown when clicking outside
   */
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  // Add event listeners for click outside and keyboard navigation
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Profile button */}
      <button
        className="flex cursor-pointer items-center gap-2"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Profile menu"
      >
        <div className="h-6 w-6 rounded-full border border-gray-400 overflow-hidden md:h-8 md:w-8">
          <UserIcon
            className="h-full w-full fill-fuchsia-300"
            aria-hidden="true"
          />
        </div>

        <span className="font-mulish hidden text-base font-bold xl:block">
          {firstName}
        </span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-28 rounded-lg border border-fuchsia-200 bg-[#FFF9F9] shadow-md xl:left-1/2 xl:-translate-x-1/2 z-10"
          role="menu"
          aria-orientation="vertical"
        >
          <button
            className="font-mulish flex w-full cursor-pointer items-center gap-1 px-6 py-3 text-xs font-semibold hover:bg-fuchsia-50 transition-colors rounded-lg"
            onClick={handleLogout}
            role="menuitem"
          >
            <LogoutIcon className="w-4 h-4" aria-hidden="true" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
}
