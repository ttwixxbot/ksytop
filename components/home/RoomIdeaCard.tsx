import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { RoomIdea } from "@/data/rooms";
import { assetPath } from "@/lib/asset-path";

export function RoomIdeaCard({ idea }: { idea: RoomIdea }) {
  return (
    <Link
      href={`/ideas/${idea.slug}`}
      aria-label={`Открыть идею ${idea.title}`}
      className="group relative min-h-[250px] overflow-hidden rounded-[14px] border border-bronze-200/18 bg-ink-900 transition duration-300 hover:-translate-y-1 hover:border-bronze-200/55 hover:shadow-bronze"
    >
      <img
        src={assetPath(idea.image)}
        alt={idea.title}
        className="image-lift h-full w-full object-cover"
        loading="lazy"
      />
      <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,6,7,0.86))]" />
      <span className="absolute inset-x-0 bottom-0 p-5">
        <span className="block font-display text-2xl text-ivory">{idea.title}</span>
        <span className="mt-2 block text-sm leading-5 text-mist">{idea.description}</span>
        <span className="mt-4 inline-grid h-9 w-9 place-items-center rounded-full border border-bronze-200/35 text-bronze-100 opacity-90 transition group-hover:translate-x-1 group-hover:opacity-100">
          <ArrowRight size={16} aria-hidden />
        </span>
      </span>
    </Link>
  );
}
