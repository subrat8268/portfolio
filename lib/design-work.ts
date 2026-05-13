export type DesignItem = {
  id: string;
  title: string;
  type: "Logo" | "Social" | "Brochure" | "Banner" | "Invitation" | "Other";
  clientOrEvent: string;
  year: string;
  tools: string[];
  tags: string[];
  thumbnail: string;
  images: string[];
  featured: boolean;
  description: string;
};

export const designItems: DesignItem[] = [
  {
    id: "ussepp-logo",
    title: "USSEPP Programme Identity",
    type: "Logo",
    clientOrEvent:
      "University Student's Skill Enhancement & Placement Programme",
    year: "2024",
    tools: ["Canva"],
    tags: ["Education", "Emblem", "Multi-colour", "Badge"],
    thumbnail: "/design/ussepp-logo.png",
    images: ["/design/ussepp-logo.png"],
    featured: true,
    description:
      "Circular emblem mark for a university placement programme. The design layers a central human figure within a stylised tree, representing growth and learning, surrounded by a classic laurel seal with the programme name set in arc text. Balances institutional authority with approachable energy through a warm yellow ground and multi-colour leaf motifs.",
  },
  {
    id: "ekadant-banner-2024",
    title: "Kumbharwadyacha Ekadant — Festival Banner 2024",
    type: "Banner",
    clientOrEvent:
      "Kumbharwadyacha Ekadant Sarvajanik Ganeshotsav Mandal, Mumbai",
    year: "2024",
    tools: ["Canva"],
    tags: ["Festival", "Marathi Typography", "Photo Composite", "Print & Digital"],
    thumbnail: "/design/ekadant-banner-2024.png",
    images: ["/design/ekadant-banner-2024.png"],
    featured: true,
    description:
      "Wide-format banner for the 37th year celebrations of a Mumbai Ganesh festival mandal. Balances devotional imagery on both ends with bold Devanagari typography at centre, an embossed title treatment, and the mandal's registration details. Designed to work at large print sizes and as a WhatsApp/social share graphic.",
  },
  {
    id: "ekadant-banner-2023",
    title: "Kisan Pahilwan Mitra Mandal — Festival Banner",
    type: "Banner",
    clientOrEvent: "Kumbharwadyacha Ekadant Ganeshotsav Mandal, Mumbai",
    year: "2023",
    tools: ["Canva"],
    tags: ["Festival", "Marathi Typography", "Photo Composite", "Deep Purple"],
    thumbnail: "/design/ekadant-banner-2023.png",
    images: ["/design/ekadant-banner-2023.png"],
    featured: false,
    description:
      "Alternative edition of the festival banner in a deep purple and gold palette, featuring two deity forms flanking the mandal name. Ornamental Mandala watermarks add depth to the background while keeping the main hierarchy — name, location, and devotional message — immediately readable.",
  },
  {
    id: "laxmi-global-impex-logo",
    title: "Laxmi Global Impex — Corporate Logo",
    type: "Logo",
    clientOrEvent: "Laxmi Global Impex",
    year: "2024",
    tools: ["Canva"],
    tags: ["Corporate", "Import Export", "Geometric", "Lettermark"],
    thumbnail: "/design/laxmi-global-logo.png",
    images: ["/design/laxmi-global-logo.png"],
    featured: true,
    description:
      "Wordmark + lettermark combination for an import-export business. The interlocked L-G monogram in navy and red sits inside a bold rectangular block, suggesting solidity and international scale. A globe wireframe to the right reinforces global trading identity. Clean, legible, and confident at any scale.",
  },
  {
    id: "ritika-birthday-invite",
    title: "Ritika's 1st Birthday Invitation",
    type: "Invitation",
    clientOrEvent: "Private — Birthday Event, Mumbai",
    year: "2024",
    tools: ["Canva"],
    tags: ["Print", "Invitation", "Pastel", "Kids"],
    thumbnail: "/design/ritika-birthday-invite.png",
    images: ["/design/ritika-birthday-invite.png"],
    featured: false,
    description:
      "Soft watercolour invitation card for a first birthday celebration in Mumbai. Loose botanical wreath frames a circular photo cutout, with a hand-script heading and clean serif body type. Pastel mint and dusty white palette creates warmth without being loud. Designed for both print and digital sharing.",
  },
];
