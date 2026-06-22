import type { ReactNode } from "react";

type InfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function InfoPage({ eyebrow, title, description, children }: InfoPageProps) {
  return (
    <section className="section-shell !pt-16">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm uppercase text-bronze-100">{eyebrow}</p>
        <h1 className="page-title mt-3">{title}</h1>
        <p className="mt-6 text-lg leading-8 text-mist">{description}</p>
      </div>
      <div className="grid gap-5">{children}</div>
    </section>
  );
}

export function InfoCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`glass-card p-6 md:p-7 ${className}`}>{children}</div>;
}

export function InfoSection({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <InfoCard>
      <h2 className="font-display text-3xl text-ivory">{title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-mist">{children}</div>
    </InfoCard>
  );
}
