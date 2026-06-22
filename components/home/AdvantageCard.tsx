import type { LucideIcon } from "lucide-react";

type AdvantageCardProps = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export function AdvantageCard({ icon: Icon, title, text }: AdvantageCardProps) {
  return (
    <div className="flex gap-4 border-r border-bronze-200/10 px-2 py-2 last:border-r-0">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[10px] border border-bronze-200/25 bg-bronze-300/10 text-bronze-100">
        <Icon size={24} aria-hidden />
      </span>
      <span>
        <span className="block font-semibold text-ivory">{title}</span>
        <span className="mt-1 block text-sm leading-5 text-mist">{text}</span>
      </span>
    </div>
  );
}
