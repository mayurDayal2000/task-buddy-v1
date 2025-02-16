import Header from "../../components/Header/Header";
import TabMenu from "../../components/TabMenu/TabMenu";
import { BoardCard } from "../../components/ui/BoardCard";

export default function BoardPage() {
  return (
    <>
      <Header />
      <TabMenu />

      <main className="my-8 px-4 md:px-6 xl:px-8">
        <div className="container mx-auto">
          <section className="grid w-full max-w-5xl grid-cols-3 gap-6">
            <BoardCard title="To-Do" color="bg-[#FAC3FF]" />
            <BoardCard title="In-Progress" color="bg-[#85D9F1]" />
            <BoardCard title="Completed" color="bg-[#A2D6A0]" />
          </section>
        </div>
      </main>
    </>
  );
}
