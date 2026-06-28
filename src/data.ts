// ============================================
// boludevs portfolio — data.ts
// Updated: Education removed, Skills upgraded,
// Nav updated, Experience upgraded
// ============================================

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "tools", label: "Tools" },        // ✅ was "education"
  { id: "skills", label: "Services" },    // ✅ was "Skills"
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// ✅ SKILLS — removed percentage levels
// Replace progress bars in your component with
// simple badge/tag cards instead
export const SKILLS = [
  { name: "Website Design" },
  { name: "Website Development" },
  { name: "Google Maps Listing" },
  { name: "Social Media Advertising" },
  { name: "Graphic Design" },
  { name: "Digital Marketing" },
  { name: "Content Creation" },
  { name: "Branding" },
];

export type Experience = {
  role: string;
  type: string;
  period: string;
  points: string[];
};

// ✅ EXPERIENCES — upgraded copy to sound more professional
export const EXPERIENCES: Experience[] = [
  {
    role: "Freelance Website Designer",
    type: "Self-Employed · boludevs",
    period: "2023 — Present",
    points: [
      "Built and deployed modern, mobile-first websites for local Nigerian businesses using AI-powered tools and GitHub-based workflows.",
      "Connected client sites to custom .com.ng domains with free SSL — full end-to-end delivery.",
      "Consistently delivered projects within 72 hours, exceeding client expectations on speed and quality.",
    ],
  },
  {
    role: "Google Business Profile Specialist",
    type: "Local SEO",
    period: "2023 — Present",
    points: [
      "Set up and optimized Google Business Profiles for restaurants, salons, schools, and retail businesses across Lagos.",
      "Improved local search visibility, helping clients appear in Google Maps results for their target keywords.",
      "Managed client reviews, business info, and listing photos for consistent, trust-building online presence.",
    ],
  },
  {
    role: "Digital Marketing Consultant",
    type: "Consulting",
    period: "2023 — Present",
    points: [
      "Designed and managed Meta (Facebook & Instagram) ad campaigns for brand awareness and lead generation.",
      "Built content strategies and posting schedules that grew client accounts and increased customer engagement.",
      "Advised Nigerian SMEs on affordable digital marketing tactics that deliver measurable growth.",
    ],
  },
  {
    role: "Graphic Designer",
    type: "Creative",
    period: "2023 — Present",
    points: [
      "Designed logos, brand identities, and complete visual systems for new and growing Nigerian businesses.",
      "Created flyers, social media graphics, and promotional materials used across print and digital channels.",
      "Delivered consistent, on-brand design assets that helped clients look credible and professional online.",
    ],
  },
];

// ✅ TOOLS — replaces old EDUCATION section entirely
export const TOOLS = [
  {
    title: "Website Builder",
    place: "Lovable · GitHub",
    detail:
      "Building and deploying modern, responsive business websites using AI-powered tools and version control.",
  },
  {
    title: "Hosting & Deployment",
    place: "Vercel · Netlify · WhoGoHost",
    detail:
      "Fast, reliable site deployment with free SSL, custom domains, and auto-deploy from GitHub.",
  },
  {
    title: "Design & Branding",
    place: "Canva · Figma",
    detail:
      "Creating logos, flyers, social media graphics, and brand identities for local Nigerian businesses.",
  },
  {
    title: "Digital Marketing",
    place: "Google Business · Meta Ads",
    detail:
      "Google Maps optimization, social media advertising, and content strategy that drives real customer growth.",
  },
];

export const CATEGORIES = [
  "All",
  "Website Design",
  "Google Maps Listings",
  "Social Media Advertising",
  "Graphic Design",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Project = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  services: string[];
  image: string;
  featured: boolean;
};

// ✅ PROJECTS — kept your 12 projects
// featured: true = shown in top grid (your 6 best)
// featured: false = hidden behind "View All" button
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Corporate Business Website",
    category: "Website Design",
    description:
      "A clean, conversion-focused corporate website built for a growing service company to establish a credible online presence.",
    services: ["UI/UX Design", "Responsive Build", "Landing Page"],
    image:
      "https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Landing Page",
    category: "Website Design",
    description:
      "High-converting product landing page designed to drive leads and online sales for a retail brand.",
    services: ["Landing Page", "Lead Generation", "Mobile First"],
    image:
      "https://images.pexels.com/photos/7191162/pexels-photo-7191162.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true,
  },
  {
    id: 3,
    title: "Startup Portfolio Site",
    category: "Website Design",
    description:
      "A modern portfolio website that showcases a startup's products with smooth animations and a premium feel.",
    services: ["Web Design", "Animation", "SEO Setup"],
    image:
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
  },
  {
    id: 4,
    title: "Restaurant Google Profile",
    category: "Google Maps Listings",
    description:
      "Created and optimized a Google Business Profile that boosted a restaurant's local search rankings and foot traffic.",
    services: ["Profile Setup", "Local SEO", "Optimization"],
    image:
      "https://images.pexels.com/photos/5921677/pexels-photo-5921677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true,
  },
  {
    id: 5,
    title: "Local Store Map Listing",
    category: "Google Maps Listings",
    description:
      "Verified and optimized a retail store's map listing to attract more nearby customers searching online.",
    services: ["Map Verification", "Local Visibility", "Reviews"],
    image:
      "https://images.pexels.com/photos/5448160/pexels-photo-5448160.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
  },
  {
    id: 6,
    title: "Service Business Listing",
    category: "Google Maps Listings",
    description:
      "Optimized a service provider's Google profile with accurate info, photos and categories for stronger local reach.",
    services: ["Profile Setup", "Citations", "Local SEO"],
    image:
      "https://images.pexels.com/photos/5444631/pexels-photo-5444631.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
  },
  {
    id: 7,
    title: "Brand Awareness Campaign",
    category: "Social Media Advertising",
    description:
      "Planned and managed a multi-platform ad campaign that grew brand awareness and audience engagement.",
    services: ["Ad Strategy", "Campaign Mgmt", "Targeting"],
    image:
      "https://images.pexels.com/photos/15635241/pexels-photo-15635241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true,
  },
  {
    id: 8,
    title: "Lead Generation Ads",
    category: "Social Media Advertising",
    description:
      "Designed and ran targeted lead-generation ads delivering qualified prospects at a strong return on ad spend.",
    services: ["Meta Ads", "Analytics", "A/B Testing"],
    image:
      "https://images.pexels.com/photos/15595050/pexels-photo-15595050.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
  },
  {
    id: 9,
    title: "Content Marketing Plan",
    category: "Social Media Advertising",
    description:
      "Built a consistent content marketing calendar that increased reach and customer engagement over time.",
    services: ["Content Plan", "Scheduling", "Engagement"],
    image:
      "https://images.pexels.com/photos/6956303/pexels-photo-6956303.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
  },
  {
    id: 10,
    title: "Complete Brand Identity",
    category: "Graphic Design",
    description:
      "Developed a cohesive brand identity including logo, colour palette and visual guidelines for a new business.",
    services: ["Logo Design", "Brand Kit", "Guidelines"],
    image:
      "https://images.pexels.com/photos/8546649/pexels-photo-8546649.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true,
  },
  {
    id: 11,
    title: "Social Media Graphics",
    category: "Graphic Design",
    description:
      "Created a set of eye-catching social media templates and promotional graphics to keep branding consistent.",
    services: ["Social Templates", "Promo Graphics", "Branding"],
    image:
      "https://images.pexels.com/photos/15569284/pexels-photo-15569284.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
  },
  {
    id: 12,
    title: "Logo & Marketing Assets",
    category: "Graphic Design",
    description:
      "Designed a memorable logo and a suite of marketing materials including flyers and business cards.",
    services: ["Logo Design", "Print Assets", "Flyers"],
    image:
      "https://images.pexels.com/photos/17845/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true,
  },
];

export const CONTACTS = {
  whatsapp: ["09041490874", "09033372448"],
  call: ["09115327236"],
};
