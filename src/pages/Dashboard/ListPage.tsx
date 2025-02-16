import Header from "../../components/Header/Header";
import TabMenu from "../../components/TabMenu/TabMenu";
import { Accordion } from "../../components/ui/Accordion";
import PlusIcon from "../../assets/icons/icon-plus.svg?react";

type Accordions = {
  title: string;
  isActive: boolean;
  color: {
    bg: string;
    stroke: string;
  };
};

const accordions: Accordions[] = [
  {
    title: "Todo",
    isActive: true,
    color: { bg: "bg-[#FAC3FF]", stroke: "stroke-[#3E0344]" },
  },
  {
    title: "In-Progress",
    isActive: true,
    color: { bg: "bg-[#85D9F1]", stroke: "stroke-[#055167]" },
  },
  {
    title: "Completed",
    isActive: false,
    color: { bg: "bg-[#CEFFCC]", stroke: "stroke-[#0D7A0A]" },
  },
];

export default function ListPage() {
  return (
    <>
      <Header />
      <TabMenu />

      <main className="my-8 px-4 md:px-6 xl:px-8">
        <div className="container mx-auto">
          <div className="hidden py-2 xl:grid xl:grid-cols-4 xl:border-t xl:border-t-gray-300">
            <div className="px-2">
              <h3 className="font-mulish font-bold text-gray-700 text-sm">
                Task name
              </h3>
            </div>
            <div className="px-2">
              <h3 className="font-mulish font-bold text-gray-700 text-sm">
                Due on
              </h3>
            </div>
            <div className="px-2">
              <h3 className="font-mulish font-bold text-gray-700 text-sm">
                Task Status
              </h3>
            </div>
            <div className="px-2">
              <h3 className="font-mulish font-bold text-gray-700 text-sm">
                Task Category
              </h3>
            </div>
          </div>

          {accordions.map((accordion, index) => (
            <Accordion
              key={`accordion-${index}`}
              id={`accordion-${index}`}
              title={accordion.title}
              color={accordion.color}
              isActive={accordion.isActive}
            >
              <div className="w-full h-[156px] flex flex-col">
                {accordion.title === "Todo" ? (
                  <div className="border-b border-b-gray-300 px-6 py-1">
                    <button
                      type="button"
                      className="flex cursor-pointer items-center gap-1 rounded-full border border-transparent px-3 py-2 hover:border-[#7B1984]"
                    >
                      <PlusIcon className="h-4 w-4 stroke-[#7B1984]" />
                      <span className="font-mulish text-sm font-bold uppercase">
                        Add Task
                      </span>
                    </button>
                  </div>
                ) : null}

                <div className="flex h-full items-center justify-center">
                  <p className="font-mulish text-sm font-medium text-[#2F2F2F]">
                    No Tasks in {accordion.title}
                  </p>
                </div>
              </div>
            </Accordion>
          ))}
        </div>
      </main>
    </>
  );
}
