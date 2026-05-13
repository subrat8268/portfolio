export type DesignItem = {
  id: string;
  title: string;
  type: "Logo" | "Social" | "Brochure" | "Banner" | "Other";
  tools: string[];
  tags: string[];
  thumbnail: string; // path in /public, e.g. "/design/logo-1.png"
  description: string;
};

export const designItems: DesignItem[] = [
  {
    id: "brand-mark-craft",
    title: "Brand Mark for Modern Café",
    type: "Logo",
    tools: ["Canva"],
    tags: ["Minimal", "Monogram", "Warm"],
    thumbnail: "/design/placeholder-logo-1.png",
    description:
      "Clean, letter-based mark for a neighbourhood café, focusing on warmth, simplicity, and strong legibility at small sizes.",
  },
  {
    id: "social-launch-kit",
    title: "Social Media Launch Kit",
    type: "Social",
    tools: ["Canva"],
    tags: ["Carousel", "Instagram", "Product Launch"],
    thumbnail: "/design/placeholder-social-1.png",
    description:
      "A cohesive set of Instagram posts and stories designed to launch a new product with consistent typography and color system.",
  },
  {
    id: "event-brochure-clean",
    title: "Event Brochure Layout",
    type: "Brochure",
    tools: ["Canva"],
    tags: ["Print", "Grid", "Editorial"],
    thumbnail: "/design/placeholder-brochure-1.png",
    description:
      "Grid-driven brochure layout with clear hierarchy, generous white space, and tight alignment for an upcoming tech event.",
  },
  {
    id: "hero-banner-campaign",
    title: "Hero Banner Campaign",
    type: "Banner",
    tools: ["Canva"],
    tags: ["Web Banner", "Landing Page", "Hero"],
    thumbnail: "/design/placeholder-banner-1.png",
    description:
      "Responsive hero banner concept for a SaaS landing page, optimized for strong headline visibility and clear call-to-action.",
  },
];
