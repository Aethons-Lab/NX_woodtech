export interface Client {
  id: string;
  name: string;
  industry: string;
  logo: string;
  description: string;
  projectCount: number;
  testimonial: string;
  testimonialAuthor: string;
  testimonialAuthorRole: string;
  yearsPartnership: number;
}

export const clients: Client[] = [
  // Ordered to match provided corporate client list
  {
    id: "client-001",
    name: "Bangladesh Machine Tools Factory Ltd (BMTF)",
    industry: "Industrial Manufacturing",
    logo: "/clients/bmtf-logo.svg",
    description:
      "Commercial enterprise under Bangladesh Army management, specializing in precision engineering and machinery manufacturing.",
    projectCount: 18,
    testimonial:
      "Woodtech's reliable supply chain and quality materials have been essential to our manufacturing excellence for over a decade.",
    testimonialAuthor: "Brigadier (Retd) M. A. Halim",
    testimonialAuthorRole: "Director, BMTF",
    yearsPartnership: 10,
  },
  {
    id: "client-029",
    name: "Brac",
    industry: "Non-profit / Development",
    logo: "/clients/brac-logo.svg",
    description:
      "International development organization working across microfinance, education, and social development projects.",
    projectCount: 12,
    testimonial:
      "Woodtech's sustainable materials have supported our community infrastructure initiatives.",
    testimonialAuthor: "Dr. Muhammad Musa",
    testimonialAuthorRole: "Program Director, BRAC",
    yearsPartnership: 4,
  },
  {
    id: "client-030",
    name: "MAX Group",
    industry: "Conglomerate",
    logo: "/clients/maxgroup-logo.svg",
    description:
      "Diversified group with interests in manufacturing, real estate, and services.",
    projectCount: 10,
    testimonial:
      "MAX Group values Woodtech's dependable supply and product quality across divisions.",
    testimonialAuthor: "Md. Arif Khan",
    testimonialAuthorRole: "Head of Procurement, MAX Group",
    yearsPartnership: 3,
  },
  {
    id: "client-002",
    name: "Khulna Shipyard Ltd",
    industry: "Shipbuilding & Maritime",
    logo: "/clients/khulna-shipyard-logo.svg",
    description:
      "Leading shipbuilding facility involved in maritime construction and naval vessel manufacturing.",
    projectCount: 22,
    testimonial:
      "The durability and finish quality of Woodtech's veneer and plywood products are critical for our maritime applications.",
    testimonialAuthor: "Captain Rashid Ahmed",
    testimonialAuthorRole: "Operations Head, Khulna Shipyard Ltd",
    yearsPartnership: 8,
  },
  {
    id: "client-027",
    name: "Military Engineer Services (MES)",
    industry: "Defense & Military Engineering",
    logo: "/clients/mes-logo.svg",
    description:
      "Bangladesh Army's engineering division handling critical military construction and infrastructure projects.",
    projectCount: 28,
    testimonial:
      "MES values Woodtech's reliability and quality for strategic defense installations.",
    testimonialAuthor: "Brigadier Rajesh Kumar",
    testimonialAuthorRole: "Chief Engineer, MES",
    yearsPartnership: 9,
  },
  {
    id: "client-031",
    name: "Paharpur Cooling Towers Ltd. (Rooppur Power Plant)",
    industry: "Power Plant Equipment",
    logo: "/clients/paharpur-logo.svg",
    description:
      "Engineering firm supplying cooling tower solutions for large power generation projects.",
    projectCount: 4,
    testimonial:
      "Woodtech supplies materials that meet the industrial-grade requirements of power projects.",
    testimonialAuthor: "Eng. S. Rahman",
    testimonialAuthorRole: "Project Lead, Paharpur Cooling Towers",
    yearsPartnership: 2,
  },
  {
    id: "client-026",
    name: "Aviation Dhaka Consortium (ADC)",
    industry: "Aviation & Infrastructure",
    logo: "/clients/adc-logo.svg",
    description:
      "Consortium managing Dhaka Airport third phase development and modernization.",
    projectCount: 24,
    testimonial:
      "For critical aviation infrastructure, ADC relies on Woodtech's materials that meet international safety standards.",
    testimonialAuthor: "Air Cdre. Mohammad Alauddin",
    testimonialAuthorRole: "Project Director, ADC",
    yearsPartnership: 5,
  },
  {
    id: "client-011",
    name: "AFCON Engineering",
    industry: "Civil Engineering",
    logo: "/clients/afcon-logo.svg",
    description:
      "Specialized in elevated expressway and highway construction throughout Bangladesh.",
    projectCount: 14,
    testimonial:
      "AFCON appreciates Woodtech's reliability in supplying materials for our transportation infrastructure projects.",
    testimonialAuthor: "Eng. M.R. Chowdhury",
    testimonialAuthorRole: "Chief Engineer, AFCON",
    yearsPartnership: 5,
  },
  {
    id: "client-009",
    name: "ITALIAN THAI DEVELOPMENT PLC (ITD)",
    industry: "Construction & Transportation",
    logo: "/clients/itd-logo.svg",
    description:
      "Major international contractor working on metro rail, highways, and critical infrastructure projects.",
    projectCount: 38,
    testimonial:
      "For metro rail interiors and infrastructure applications, Woodtech provides materials that meet strict safety and quality standards.",
    testimonialAuthor: "Somchai Prasad",
    testimonialAuthorRole: "Project Manager, ITD Bangladesh",
    yearsPartnership: 5,
  },
  {
    id: "client-003",
    name: "TEKKEN Corporation",
    industry: "Heavy Engineering",
    logo: "/clients/tekken-logo.svg",
    description:
      "Specialized in heavy mechanical and structural engineering projects across Bangladesh and Southeast Asia.",
    projectCount: 15,
    testimonial:
      "Woodtech's structural plywood meets our stringent engineering specifications consistently.",
    testimonialAuthor: "Eng. Kamal Uddin",
    testimonialAuthorRole: "Technical Director, TEKKEN Corporation",
    yearsPartnership: 6,
  },
  {
    id: "client-010",
    name: "Simplex Infrastructures Ltd",
    industry: "Residential Development",
    logo: "/clients/simplex-logo.svg",
    description:
      "Residential developer focused on quality construction and interior-ready project delivery.",
    projectCount: 26,
    testimonial:
      "Simplex trusts Woodtech for interior finishing materials in our premium development projects.",
    testimonialAuthor: "Md. Fazlul Haque",
    testimonialAuthorRole: "Managing Director, Simplex Infrastructures",
    yearsPartnership: 8,
  },
  {
    id: "client-008",
    name: "Larsen & Toubro Ltd",
    industry: "Construction & Infrastructure",
    logo: "/clients/lt-logo.svg",
    description:
      "Global construction giant executing major infrastructure projects including the Khulna-Mongla Rail Bridge.",
    projectCount: 42,
    testimonial:
      "Woodtech's structural materials meet international standards required for our large-scale infrastructure projects.",
    testimonialAuthor: "Ashok Sharma",
    testimonialAuthorRole: "Project Director, L&T Bangladesh",
    yearsPartnership: 7,
  },
  {
    id: "client-004",
    name: "Brothers Furniture",
    industry: "Furniture Manufacturing",
    logo: "/clients/brothers-furniture-logo.svg",
    description:
      "Premium furniture manufacturer producing contemporary and traditional designs for residential and commercial sectors.",
    projectCount: 28,
    testimonial:
      "Brothers Furniture relies on Woodtech for consistent quality in veneers that define our brand identity.",
    testimonialAuthor: "Md. Raisul Islam",
    testimonialAuthorRole: "Managing Director, Brothers Furniture",
    yearsPartnership: 9,
  },
  {
    id: "client-025",
    name: "Next Space Limited",
    industry: "Construction & Infrastructure",
    logo: "/clients/nextspace-logo.svg",
    description:
      "Construction and infrastructure developer working on contemporary commercial projects.",
    projectCount: 12,
    testimonial:
      "Next Space's modern properties showcase Woodtech's contemporary veneer collections beautifully.",
    testimonialAuthor: "Sayeed Khan",
    testimonialAuthorRole: "Director, Next Space Limited",
    yearsPartnership: 4,
  },

  // Others
  {
    id: "client-026",
    name: "Aviation Dhaka Consortium (ADC)",
    industry: "Aviation & Infrastructure",
    logo: "/clients/adc-logo.svg",
    description:
      "Consortium managing Dhaka Airport third phase development and modernization.",
    projectCount: 24,
    testimonial:
      "For critical aviation infrastructure, ADC relies on Woodtech's materials that meet international safety standards.",
    testimonialAuthor: "Air Cdre. Mohammad Alauddin",
    testimonialAuthorRole: "Project Director, ADC",
    yearsPartnership: 5,
  },
  {
    id: "client-027",
    name: "Military Engineer Services (MES)",
    industry: "Defense & Military Engineering",
    logo: "/clients/mes-logo.svg",
    description:
      "Bangladesh Army's engineering division handling critical military construction and infrastructure projects.",
    projectCount: 28,
    testimonial:
      "MES values Woodtech's reliability and quality for strategic defense installations.",
    testimonialAuthor: "Brigadier Rajesh Kumar",
    testimonialAuthorRole: "Chief Engineer, MES",
    yearsPartnership: 9,
  },
  {
    id: "client-028",
    name: "BENGAL ENGINEERING & SERVICES (BES)",
    industry: "Engineering Services",
    logo: "/clients/bes-logo.svg",
    description:
      "Specialized engineering services firm supporting major industrial and infrastructure projects.",
    projectCount: 15,
    testimonial:
      "BES appreciates Woodtech's technical support and quality assurance in our engineering projects.",
    testimonialAuthor: "Md. Mizanur Rahman",
    testimonialAuthorRole: "CEO, BES",
    yearsPartnership: 6,
  },
  // Additional corporate clients requested
  {
    id: "client-029",
    name: "Brac",
    industry: "Non-profit / Development",
    logo: "/clients/brac-logo.svg",
    description:
      "International development organization working across microfinance, education, and social development projects.",
    projectCount: 12,
    testimonial:
      "Woodtech's sustainable materials have supported our community infrastructure initiatives.",
    testimonialAuthor: "Dr. Muhammad Musa",
    testimonialAuthorRole: "Program Director, BRAC",
    yearsPartnership: 4,
  },
  {
    id: "client-030",
    name: "MAX Group",
    industry: "Conglomerate",
    logo: "/clients/maxgroup-logo.svg",
    description:
      "Diversified group with interests in manufacturing, real estate, and services.",
    projectCount: 10,
    testimonial:
      "MAX Group values Woodtech's dependable supply and product quality across divisions.",
    testimonialAuthor: "Md. Arif Khan",
    testimonialAuthorRole: "Head of Procurement, MAX Group",
    yearsPartnership: 3,
  },
  {
    id: "client-031",
    name: "Paharpur Cooling Towers Ltd. (Rooppur Power Plant)",
    industry: "Power Plant Equipment",
    logo: "/clients/paharpur-logo.svg",
    description:
      "Engineering firm supplying cooling tower solutions for large power generation projects.",
    projectCount: 4,
    testimonial:
      "Woodtech supplies materials that meet the industrial-grade requirements of power projects.",
    testimonialAuthor: "Eng. S. Rahman",
    testimonialAuthorRole: "Project Lead, Paharpur Cooling Towers",
    yearsPartnership: 2,
  },
  {
    id: "client-032",
    name: "Asset Development & Holdings Ltd.",
    industry: "Real Estate & Investment",
    logo: "/clients/assetdev-logo.svg",
    description:
      "Investment and development firm focused on premium commercial and residential projects.",
    projectCount: 6,
    testimonial:
      "Woodtech's finishes enhance the premium quality of our developments.",
    testimonialAuthor: "Sofia Rahman",
    testimonialAuthorRole: "Head of Projects, Asset Development & Holdings",
    yearsPartnership: 3,
  },
  {
    id: "client-033",
    name: "Tilottoma Bangla Group",
    industry: "Conglomerate",
    logo: "/clients/tilottoma-logo.svg",
    description:
      "Group with operations in manufacturing, textiles, and real estate sectors.",
    projectCount: 5,
    testimonial:
      "Consistent product quality from Woodtech supports our manufacturing and build needs.",
    testimonialAuthor: "Md. Tanvir",
    testimonialAuthorRole: "Group Operations Head, Tilottoma Bangla Group",
    yearsPartnership: 2,
  },
  {
    id: "client-034",
    name: "Liberation War Museum",
    industry: "Cultural / Institutional",
    logo: "/clients/liberationwar-logo.svg",
    description:
      "National museum preserving the history and artifacts of Bangladesh's liberation movement.",
    projectCount: 2,
    testimonial:
      "Woodtech provided materials that respected conservation and display requirements for museum exhibits.",
    testimonialAuthor: "Dr. A. H. Khan",
    testimonialAuthorRole: "Curator, Liberation War Museum",
    yearsPartnership: 1,
  },
  {
    id: "client-035",
    name: "Bricks & Bridge Ltd.",
    industry: "Construction & Engineering",
    logo: "/clients/bricksbridge-logo.svg",
    description:
      "Engineering and construction firm delivering bridge, road, and civil infrastructure projects.",
    projectCount: 7,
    testimonial:
      "Woodtech meets the technical demands of our civil engineering applications.",
    testimonialAuthor: "Eng. Z. Karim",
    testimonialAuthorRole: "Managing Director, Bricks & Bridge Ltd.",
    yearsPartnership: 3,
  },
  {
    id: "client-036",
    name: "Khulna City Medical College Hospital",
    industry: "Healthcare",
    logo: "/clients/khulna-medical-logo.svg",
    description:
      "Regional medical college hospital providing tertiary healthcare services in Khulna.",
    projectCount: 3,
    testimonial:
      "Woodtech's hygienic and durable materials are suitable for healthcare facility fit-outs.",
    testimonialAuthor: "Dr. M. S. Alam",
    testimonialAuthorRole:
      "Medical Superintendent, Khulna City Medical College Hospital",
    yearsPartnership: 2,
  },
  {
    id: "client-037",
    name: "Popular Diagnostic Centre, Khulna",
    industry: "Healthcare",
    logo: "/clients/popular-diagnostic-logo.svg",
    description: "Diagnostic and medical testing centre serving Khulna region.",
    projectCount: 2,
    testimonial:
      "Reliable materials from Woodtech help maintain a clean and professional diagnostic environment.",
    testimonialAuthor: "Dr. A. Karim",
    testimonialAuthorRole: "Director, Popular Diagnostic Centre",
    yearsPartnership: 1,
  },
  {
    id: "client-038",
    name: "Khulna Administrative Convention Centre",
    industry: "Public / Institutional",
    logo: "/clients/khulna-convention-logo.svg",
    description:
      "Government-supported convention facility hosting administrative and public events.",
    projectCount: 1,
    testimonial:
      "Woodtech provided finishes that suited the multipurpose nature of our venue.",
    testimonialAuthor: "Md. Alamgir",
    testimonialAuthorRole: "Administrator, Khulna Convention Centre",
    yearsPartnership: 1,
  },
  {
    id: "client-039",
    name: "Hotel City Inn, Khulna",
    industry: "Hospitality",
    logo: "/clients/hotel-cityinn-logo.svg",
    description:
      "Mid-scale hotel serving business and leisure travellers in Khulna.",
    projectCount: 2,
    testimonial:
      "Woodtech's finishes uplifted our guestroom interiors while staying within budget.",
    testimonialAuthor: "Mr. R. Chowdhury",
    testimonialAuthorRole: "General Manager, Hotel City Inn",
    yearsPartnership: 1,
  },
  {
    id: "client-040",
    name: "Doreen Developments Ltd.",
    industry: "Real Estate & Development",
    logo: "/clients/doreen-logo.svg",
    description:
      "Renowned real estate developer delivering residential and mixed-use projects across Bangladesh.",
    projectCount: 9,
    testimonial:
      "Doreen relies on Woodtech for consistent finishing materials across our developments.",
    testimonialAuthor: "Md. Kamal",
    testimonialAuthorRole: "Head of Procurement, Doreen Developments",
    yearsPartnership: 4,
  },
  {
    id: "client-041",
    name: "CHARUTA Private Limited",
    industry: "Design & Construction",
    logo: "/clients/charuta-logo.svg",
    description:
      "Private limited company engaged in architectural and construction services.",
    projectCount: 3,
    testimonial:
      "Woodtech supports our bespoke interior projects with quality materials and service.",
    testimonialAuthor: "Arch. Charuta S.",
    testimonialAuthorRole: "Founder, CHARUTA Pvt. Ltd.",
    yearsPartnership: 2,
  },
  {
    id: "client-042",
    name: "MYTH Ltd.",
    industry: "Design & Creative",
    logo: "/clients/myth-logo.svg",
    description:
      "Creative design firm working on interiors, exhibitions, and bespoke joinery projects.",
    projectCount: 4,
    testimonial:
      "We choose Woodtech for its finish quality and material reliability on creative builds.",
    testimonialAuthor: "Md. Rafi",
    testimonialAuthorRole: "Creative Director, MYTH Ltd.",
    yearsPartnership: 2,
  },
  {
    id: "client-043",
    name: "VITTI STHAPATI BRINDO Ltd.",
    industry: "Architecture & Design",
    logo: "/clients/vitti-logo.svg",
    description:
      "Architectural consultancy focused on urban and institutional design projects.",
    projectCount: 3,
    testimonial:
      "Woodtech's product range complements our material palette for civic projects.",
    testimonialAuthor: "Arch. S. B. Rahman",
    testimonialAuthorRole: "Director, Vitti Sthapati Brindo",
    yearsPartnership: 1,
  },
  {
    id: "client-044",
    name: "Sthapotto Design & Development Ltd.",
    industry: "Design & Development",
    logo: "/clients/sthapotto-logo.svg",
    description:
      "Design and development consultancy focusing on residential and commercial projects.",
    projectCount: 5,
    testimonial:
      "Woodtech helps us meet our design intent with reliable finishes and textures.",
    testimonialAuthor: "Arch. N. Aziz",
    testimonialAuthorRole: "Principal, Sthapotto Design & Development",
    yearsPartnership: 2,
  },
  {
    id: "client-045",
    name: "Volume Zero Architects",
    industry: "Architecture",
    logo: "/clients/volumezero-logo.svg",
    description:
      "Contemporary architecture studio delivering modern residential and commercial work.",
    projectCount: 4,
    testimonial:
      "Volume Zero trusts Woodtech for premium veneers that realize our design details.",
    testimonialAuthor: "Arch. Laila Sultana",
    testimonialAuthorRole: "Principal Architect, Volume Zero",
    yearsPartnership: 2,
  },
  {
    id: "client-046",
    name: "SHATOTTO",
    industry: "Architecture & Design",
    logo: "/clients/shatotto-logo.svg",
    description:
      "Design studio working on diverse architectural and interior projects.",
    projectCount: 3,
    testimonial:
      "Woodtech's sustainable options align with our practice's environmental goals.",
    testimonialAuthor: "Arch. R. Khan",
    testimonialAuthorRole: "Founder, SHATOTTO",
    yearsPartnership: 1,
  },
  {
    id: "client-047",
    name: "Professional Associates Ltd.",
    industry: "Engineering & Consultancy",
    logo: "/clients/professional-associates-logo.svg",
    description:
      "Engineering and consultancy firm providing MEP and structural consulting services.",
    projectCount: 6,
    testimonial:
      "Woodtech's technical team assists us in specifying appropriate materials for complex projects.",
    testimonialAuthor: "Eng. M. Hasan",
    testimonialAuthorRole: "Senior Consultant, Professional Associates Ltd.",
    yearsPartnership: 3,
  },
  {
    id: "client-048",
    name: "Hotel DS Palace",
    industry: "Hospitality",
    logo: "/clients/hotel-ds-palace-logo.svg",
    description: "Hotel and hospitality operator for regional properties.",
    projectCount: 2,
    testimonial:
      "Woodtech's finishes contributed to an elevated guest experience at our properties.",
    testimonialAuthor: "Mr. Aminul",
    testimonialAuthorRole: "General Manager, Hotel DS Palace",
    yearsPartnership: 1,
  },
  {
    id: "client-049",
    name: "Dcon Design Studio",
    industry: "Design & Interiors",
    logo: "/clients/dcon-logo.svg",
    description:
      "Interior design and fit-out studio delivering bespoke joinery and finishes.",
    projectCount: 4,
    testimonial:
      "Dcon depends on Woodtech for quality materials that match our design standards.",
    testimonialAuthor: "Arch. D. Chowdhury",
    testimonialAuthorRole: "Founder, Dcon Design Studio",
    yearsPartnership: 2,
  },
  {
    id: "client-050",
    name: "Priyanka Group",
    industry: "Manufacturing & Retail",
    logo: "/clients/priyanka-logo.svg",
    description:
      "Group active in manufacturing, retail, and distribution sectors.",
    projectCount: 5,
    testimonial:
      "Priyanka Group benefits from Woodtech's consistent material performance across projects.",
    testimonialAuthor: "Mr. Priyo Kumar",
    testimonialAuthorRole: "Director, Priyanka Group",
    yearsPartnership: 3,
  },
];
