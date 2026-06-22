import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { collections } from "@/data/collections";
import { products } from "@/data/products";
import { roomIdeas } from "@/data/rooms";

export const dynamic = "force-static";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zonakomforta.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/catalog",
    "/collections",
    "/ideas",
    "/about",
    "/contacts",
    "/request",
    "/delivery",
    "/warranty",
    "/returns",
    "/faq",
    "/privacy",
    "/terms"
  ].map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date()
    }));

  const categoryRoutes = categories.map((category) => ({
    url: `${base}/catalog/${category.slug}`,
    lastModified: new Date()
  }));

  const collectionRoutes = collections.map((collection) => ({
    url: `${base}/collections/${collection.slug}`,
    lastModified: new Date()
  }));

  const ideaRoutes = roomIdeas.map((idea) => ({
    url: `${base}/ideas/${idea.slug}`,
    lastModified: new Date()
  }));

  const productRoutes = products.map((product) => ({
    url: `${base}/product/${product.slug}`,
    lastModified: new Date()
  }));

  return [...routes, ...categoryRoutes, ...collectionRoutes, ...ideaRoutes, ...productRoutes];
}
