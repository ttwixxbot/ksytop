"use client";

import { useEffect, useMemo, useState } from "react";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/utils";

type SafeImageProps = {
  src?: string;
  alt: string;
  className?: string;
  fallback?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
};

const DEFAULT_FALLBACK = "/images/generated/products/sofas-1.png";

export function SafeImage({
  src,
  alt,
  className,
  fallback = DEFAULT_FALLBACK,
  loading = "lazy",
  fetchPriority
}: SafeImageProps) {
  const fallbackSrc = useMemo(() => assetPath(fallback), [fallback]);
  const resolvedSrc = useMemo(() => assetPath(src || fallback), [src, fallback]);
  const [currentSrc, setCurrentSrc] = useState(resolvedSrc);

  useEffect(() => {
    setCurrentSrc(resolvedSrc);
  }, [resolvedSrc]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={cn("bg-ink-900", className)}
      loading={loading}
      fetchPriority={fetchPriority}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}
