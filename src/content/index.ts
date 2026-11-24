import type { SiteContent } from "@/types/content";
import { en } from "./en";
import { ar } from "./ar";

export const contentByLocale: Record<string, SiteContent> = { en, ar };

/** Active locale. Flip to "ar" together with siteConfig.direction to go RTL. */
export const defaultLocale = "en";

export const content: SiteContent = contentByLocale[defaultLocale] ?? en;

export { en, ar };
