export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  /** Canonical origin used for metadata, sitemap and robots. */
  url: string;
  locale: string;
  direction: "ltr" | "rtl";
  /**
   * Contact email. `null` renders no email anywhere — never ship an invented
   * address. Replace with the approved brand address before launch.
   */
  email: string | null;
  /**
   * Endpoint that receives the contact form as a JSON POST.
   * When `null` the form validates locally and does not claim delivery.
   */
  contactEndpoint: string | null;
  copyrightHolder: string;
}

export const siteConfig: SiteConfig = {
  name: "VULFAX",
  tagline: "Technology · Innovation · Future",
  description:
    "VULFAX designs and engineers premium digital systems — combining engineering precision with a forward-looking design language.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  locale: "en",
  direction: "ltr",
  email: null,
  contactEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || null,
  copyrightHolder: "VULFAX",
};
