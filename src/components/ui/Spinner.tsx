import LoaderIcon from "../../assets/icons/icon-loader.svg?react";

export function Spinner() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center gap-1">
      <LoaderIcon className="w-10 h-10 stroke-blue-600 animate-spin" />
      <span className="font-mulish font-semibold text-xs text-blue-600 md:text-base xl:text-lg">Loading...</span>
    </div>
  );
}
