"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const safeImages = images.length ? images : ["/images/generated/products/sofas-1.png"];
  const activeIndex = Math.min(active, safeImages.length - 1);
  const activeImage = safeImages[activeIndex];

  return (
    <div className="grid gap-4">
      <div className="glass-card relative aspect-[1.18] overflow-hidden p-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.38 }}
            className="h-full w-full"
          >
            <SafeImage
              src={activeImage}
              alt={`${name}, изображение ${activeIndex + 1}`}
              className="h-full w-full rounded-[12px] object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-x-10 bottom-5 h-5 rounded-full bg-bronze-200/30 blur-2xl" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {safeImages.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActive(index)}
            className={`overflow-hidden rounded-[12px] border p-1 transition ${
              active === index
                ? "border-bronze-200 bg-bronze-300/12"
                : "border-bronze-200/18 bg-ivory/[0.03]"
            }`}
            aria-label={`Показать изображение ${index + 1}`}
          >
            <SafeImage src={image} alt="" className="aspect-[1.7] w-full rounded-[9px] object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
