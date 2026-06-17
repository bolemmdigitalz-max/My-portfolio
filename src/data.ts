export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const SKILLS = [
  { name: "Website Design", level: 95 },
  { name: "Website Development", level: 90 },
  { name: "Google Maps Listing", level: 92 },
  { name: "Social Media Advertising", level: 88 },
  { name: "Graphic Design", level: 90 },
  { name: "Digital Marketing", level: 85 },
  { name: "Content Creation", level: 80 },
  { name: "Branding", level: 82 },
];

export type Experience = {
  role: string;
  type: string;
  period: string;
  points: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Freelance Website Designer",
    type: "Self-Employed",
    period: "Present",
    points: [
      "Designed responsive websites for businesses and entrepreneurs.",
      "Created landing pages focused on lead generation and conversions.",
      "Improved clients' online presence and user experience.",
    ],
  },
  {
    role: "Google Maps Listing Specialist",
    type: "Local SEO",
    period: "Present",
    points: [
      "Set up and optimized Google Business Profiles.",
      "Improved local visibility for businesses.",
      "Assisted businesses in attracting more local customers.",
    ],
  },
  {
    role: "Digital Marketing Consultant",
    type: "Consulting",
    period: "Present",
    points: [
      "Managed social media advertising campaigns.",
      "Increased brand awareness and customer engagement.",
      "Created digital marketing strategies for business growth.",
    ],
  },
  {
    role: "Graphic Designer",
    type: "Creative",
    period: "Present",
    points: [
      "Designed marketing materials and brand assets.",
      "Created social media graphics and promotional content.",
      "Delivered visually appealing designs for businesses.",
    ],
  },
];

export const EDUCATION = [
  {
    title: "Secondary School Graduate",
    place: "Secondary Education",
    detail: "Completed secondary education successfully with a strong foundation for further studies.",
  },
  {
    title: "University Aspirant",
    place: "Olabisi Onabanjo University (OOU)",
    detail:
      "Aspiring to pursue higher education and further develop skills in technology, innovation, and digital solutions.",
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
    featured: false,
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
    featured: false,
  },
];

export const CONTACTS = {
  whatsapp: ["09041490874", "09033372448"],
  call: ["09115327236"],
};
