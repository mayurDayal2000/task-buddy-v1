import TaskIcon from "../assets/icons/icon-task.svg?react";
import GoogleIcon from "../assets/icons/icon-google.svg?react";
import illustration from "../assets/images/illustration-task.jpg";

import { useAuth } from "../hooks/useAuth";

export default function SignInPage() {
  const { login } = useAuth();
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFF9F9] bg-[url(/src/assets/images/bg-mobile.svg)] bg-cover bg-no-repeat px-4 sm:px-6 lg:px-8 xl:bg-[url(/src/assets/images/bg-desktop.svg)] xl:bg-contain xl:bg-right">
      <div className="w-full flex flex-col xl:flex-row lg:items-center">
        <main className="flex flex-col justify-center flex-1">
          <div className="w-full max-w-sm mx-auto">
            <div className="flex items-center justify-center gap-1 xl:justify-start">
              <TaskIcon className="w-8 h-8 sm:w-10 sm:h-10" />
              <h1 className="text-center text-2xl font-semibold text-[#7B1984] md:text-3xl">
                TaskBuddy
              </h1>
            </div>
            <p className="mt-1 text-center text-xs md:text-sm font-medium xl:text-start">
              Streamline your workflow and track progress effortlessly with our
              all-in-one task management app.
            </p>
          </div>

          <div className="mt-6 w-full max-w-xs mx-auto md:max-w-sm ">
            <button
              type="button"
              className="w-full flex justify-center items-center gap-2 px-6 py-3 text-sm md:text-base font-bold text-white bg-[#292929] rounded-full shadow-md border border-[#292929] hover:bg-white hover:text-[#292929] transition-colors cursor-pointer"
              onClick={login}
            >
              <GoogleIcon className="w-5 h-5" />
              Continue with Google
            </button>
          </div>
        </main>

        <aside className="hidden xl:block xl:max-w-2xl flex-1">
          <img
            src={illustration}
            alt="task view illustration"
            className="w-full"
          />
        </aside>
      </div>
    </div>
  );
}
