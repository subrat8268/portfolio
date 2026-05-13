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
    title: "Education Programme — Emblem Identity",
    type: "Logo",
    clientOrEvent:
      "University Student's Skill Enhancement & Placement Programme",
    year: "2024",
    tools: ["Canva"],
    tags: ["Education", "Emblem", "Multi-colour", "Badge"],
    thumbnail:
      "https://res.cloudinary.com/drmgqakwr/image/upload/v1778689052/Untitled_design_2_srqusw.png",
    images: [
      "https://res.cloudinary.com/drmgqakwr/image/upload/v1778689052/Untitled_design_2_srqusw.png",
    ],
    featured: true,
    description:
      "Circular emblem mark for a university placement programme. The design layers a central human figure within a stylised tree, representing growth and learning, surrounded by a classic laurel seal with the programme name set in arc text. Balances institutional authority with approachable energy through a warm yellow ground and multi-colour leaf motifs.",
  },
  {
    id: "ekadant-banner-2024",
    title: "Festival Mandal — Event Banner 2024",
    type: "Banner",
    clientOrEvent:
      "Kumbharwadyacha Ekadant Sarvajanik Ganeshotsav Mandal, Mumbai",
    year: "2024",
    tools: ["Canva"],
    tags: [
      "Festival",
      "Marathi Typography",
      "Photo Composite",
      "Print & Digital",
    ],
    thumbnail:
      "https://res.cloudinary.com/drmgqakwr/image/upload/v1778689107/Ekdant_diwali_23_cvewav.png",
    images: [
      "https://res.cloudinary.com/drmgqakwr/image/upload/v1778689107/Ekdant_diwali_23_cvewav.png",
    ],
    featured: true,
    description:
      "Wide-format banner for the 37th year celebrations of a Mumbai Ganesh festival mandal. Balances devotional imagery on both ends with bold Devanagari typography at centre, an embossed title treatment, and the mandal's registration details. Designed to work at large print sizes and as a WhatsApp/social share graphic.",
  },
  {
    id: "ekadant-banner-2023",
    title: "Festival Mandal — Event Banner 2023",
    type: "Banner",
    clientOrEvent: "Kumbharwadyacha Ekadant Ganeshotsav Mandal, Mumbai",
    year: "2023",
    tools: ["Canva"],
    tags: ["Festival", "Marathi Typography", "Photo Composite", "Deep Purple"],
    thumbnail:
      "https://res.cloudinary.com/drmgqakwr/image/upload/v1778689006/ekdant2023banner_bxpuve.jpg",
    images: [
      "https://res.cloudinary.com/drmgqakwr/image/upload/v1778689006/ekdant2023banner_bxpuve.jpg",
    ],
    featured: false,
    description:
      "Alternative edition of the festival banner in a deep purple and gold palette, featuring two deity forms flanking the mandal name. Ornamental mandala watermarks add depth to the background while keeping the main hierarchy — name, location, and devotional message — immediately readable.",
  },
  {
    id: "laxmi-global-impex-logo",
    title: "Import-Export Firm — Corporate Identity",
    type: "Logo",
    clientOrEvent: "Laxmi Global Impex",
    year: "2024",
    tools: ["Canva"],
    tags: ["Corporate", "Import Export", "Geometric", "Lettermark"],
    thumbnail:
      "https://res.cloudinary.com/drmgqakwr/image/upload/v1778688838/LGI_Variation_Logo_fcr5ac.png",
    images: [
      "https://res.cloudinary.com/drmgqakwr/image/upload/v1778688838/LGI_Variation_Logo_fcr5ac.png",
    ],
    featured: true,
    description:
      "Wordmark + lettermark combination for an import-export business. The interlocked L-G monogram in navy and red sits inside a bold rectangular block, suggesting solidity and international scale. A globe wireframe to the right reinforces global trading identity. Clean, legible, and confident at any scale.",
  },
  {
    id: "birthday-invitation-card",
    title: "First Birthday — Celebration Invite",
    type: "Invitation",
    clientOrEvent: "Private Event, Mumbai",
    year: "2024",
    tools: ["Canva"],
    tags: ["Print", "Invitation", "Pastel", "Watercolour", "Botanical"],
    thumbnail:
      "https://res.cloudinary.com/drmgqakwr/image/upload/v1778688651/Green_Watercolor_Cute_1st_Birthday_Invitation_ywxrbm.png",
    images: [
      "https://res.cloudinary.com/drmgqakwr/image/upload/v1778688651/Green_Watercolor_Cute_1st_Birthday_Invitation_ywxrbm.png",
    ],
    featured: false,
    description:
      "Soft watercolour invitation card for a first birthday celebration. Loose botanical wreath frames a circular photo cutout, with a hand-script heading and clean serif body type. Pastel mint and dusty white palette creates warmth without being loud. Designed for both print and digital sharing.",
  },
  {
    id: "epls-event-banner",
    title: "Campus Event — Promotional Banner",
    type: "Banner",
    clientOrEvent: "EPLS — Event & Programme, Mumbai",
    year: "2024",
    tools: ["Canva"],
    tags: ["Campus", "Event", "Banner", "Print & Digital"],
    thumbnail:
      "https://res.cloudinary.com/drmgqakwr/image/upload/v1778688950/EPLS1Banner_gdbyj3.jpg",
    images: [
      "https://res.cloudinary.com/drmgqakwr/image/upload/v1778688950/EPLS1Banner_gdbyj3.jpg",
    ],
    featured: false,
    description:
      "Promotional banner designed for a campus-level event or programme. Bold headline typography anchors the layout, supported by structured information hierarchy for date, venue, and branding. Balanced colour use ensures readability at both large print and digital display sizes.",
  },
];
