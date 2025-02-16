import Header from "../../components/Header/Header";
import TabMenu from "../../components/TabMenu/TabMenu";
import { Accordion } from "../../components/ui/Accordion";

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

      <main>
        <div className="container mx-auto">
          {accordions.map((accordion, index) => (
            <Accordion
              key={`accordion-${index}`}
              id={`accordion-${index}`}
              title={accordion.title}
              color={accordion.color}
              isActive={accordion.isActive}
            >
              <div className="w-full min-h-[156px] flex items-center justify-center">
                <p className="font-mulish font-medium text-sm text-[#2F2F2F]">
                  No Tasks in {accordion.title}
                </p>
              </div>
            </Accordion>
          ))}
        </div>
      </main>
    </>
  );
}
