import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Collection } from "@/data/collections";
import { assetPath } from "@/lib/asset-path";

export function CollectionCard({ collection, large = false }: { collection: Collection; large?: boolean }) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group relative isolate min-h-[210px] overflow-hidden rounded-[14px] border border-bronze-200/18 bg-ink-900 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-bronze-200/60 hover:shadow-bronze"
    >
      <img
        src={assetPath(collection.image)}
        alt={collection.title}
        className="image-lift absolute inset-0 h-full w-full object-cover opacity-78"
        loading="lazy"
      />
      <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,7,0.88),rgba(5,6,7,0.22)_70%)]" />
      <span className="relative z-10 flex h-full min-h-[210px] flex-col justify-between p-6">
        <span>
          <span className="font-display text-3xl text-ivory">{collection.title}</span>
          <span className="mt-3 block max-w-sm text-sm leading-6 text-mist">{collection.description}</span>
        </span>
        <span className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-bronze-100">
          Смотреть коллекцию
          <span className="grid h-8 w-8 place-items-center rounded-full border border-bronze-200/30">
            <ArrowRight size={15} aria-hidden />
          </span>
        </span>
      </span>
      {large ? <span className="absolute right-5 top-5 rounded-full border border-bronze-200/25 px-3 py-1 text-xs text-mist">{collection.room}</span> : null}
    </Link>
  );
}
