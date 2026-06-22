import type { Metadata } from "next";
import { RoomIdeaCard } from "@/components/home/RoomIdeaCard";
import { roomIdeas } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Идеи для дома",
  description: "Интерьерные идеи для гостиной, спальни, кухни, кабинета, прихожей и детской."
};

export default function IdeasPage() {
  return (
    <section className="section-shell !pt-16">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm uppercase text-bronze-100">Интерьерные идеи</p>
        <h1 className="page-title mt-3">Идеи для дома</h1>
        <p className="mt-6 text-lg leading-8 text-mist">
          Подберите настроение комнаты и сохраните товары, которые помогут собрать такой же
          сценарий у себя.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {roomIdeas.map((idea) => (
          <RoomIdeaCard key={idea.slug} idea={idea} />
        ))}
      </div>
    </section>
  );
}
