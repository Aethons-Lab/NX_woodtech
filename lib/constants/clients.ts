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
  // Manufacturing & Industrial
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

  // Furniture & Interior Furnishing
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
    id: "client-005",
    name: "Nadia Furniture",
    industry: "Furniture Manufacturing",
    logo: "/clients/nadia-furniture-logo.svg",
    description:
      "Established furniture brand known for innovative designs and sustainable manufacturing practices.",
    projectCount: 20,
    testimonial:
      "Woodtech's decorative veneers help us maintain our reputation for quality and aesthetic excellence.",
    testimonialAuthor: "Nasir Uddin",
    testimonialAuthorRole: "CEO, Nadia Furniture",
    yearsPartnership: 7,
  },
  {
    id: "client-006",
    name: "Pacific Furniture",
    industry: "Furniture Manufacturing",
    logo: "/clients/pacific-furniture-logo.svg",
    description:
      "Modern furniture manufacturer serving residential and commercial projects.",
    projectCount: 19,
    testimonial:
      "Quality plywood from Woodtech has enabled us to expand our export operations significantly.",
    testimonialAuthor: "Tariq Hassan",
    testimonialAuthorRole: "Production Manager, Pacific Furniture",
    yearsPartnership: 6,
  },
  {
    id: "client-007",
    name: "WALTON Group",
    industry: "Electronics & Furniture",
    logo: "/clients/walton-logo.svg",
    description:
      "Diversified conglomerate with major interests in consumer electronics, furniture, and appliances.",
    projectCount: 35,
    testimonial:
      "As a leading corporate group, we require suppliers who can scale with our expanding operations. Woodtech delivers consistently.",
    testimonialAuthor: "Golam Kibria",
    testimonialAuthorRole: "Head of Operations, WALTON Group",
    yearsPartnership: 11,
  },

  // Construction & Infrastructure
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
    id: "client-012",
    name: "Associated Builders Corporation Ltd (ABC)",
    industry: "Construction & Real Estate",
    logo: "/clients/abc-logo.svg",
    description:
      "Prominent construction and real estate developer known for high-quality residential and commercial projects.",
    projectCount: 24,
    testimonial:
      "ABC relies on Woodtech for consistent supply of premium materials for our flagship development projects.",
    testimonialAuthor: "Salman F. Rahman",
    testimonialAuthorRole: "Managing Director, ABC",
    yearsPartnership: 9,
  },
  {
    id: "client-013",
    name: "National Development Engineers Ltd (NDE)",
    industry: "Construction & Engineering",
    logo: "/clients/nde-logo.svg",
    description:
      "Engineering and construction firm engaged in major development and infrastructure projects.",
    projectCount: 18,
    testimonial:
      "NDE values Woodtech's technical expertise and their ability to deliver specialized materials on schedule.",
    testimonialAuthor: "Eng. Farooq Ahmed",
    testimonialAuthorRole: "Chief Engineer, NDE",
    yearsPartnership: 6,
  },

  // Architecture & Design
  {
    id: "client-014",
    name: "Paradigm Architect & Engineering",
    industry: "Interior Design",
    logo: "/clients/paradigm-logo.svg",
    description:
      "Interior design and fit-out specialist delivering high-end interior environments across flagship projects.",
    projectCount: 31,
    testimonial:
      "For iconic projects like Hotel Four Points by Sheraton Dhaka and government buildings, Woodtech provides the quality finishes we demand.",
    testimonialAuthor: "Dr. Kashef Mahboob Chowdhury",
    testimonialAuthorRole: "Principal Architect, Paradigm",
    yearsPartnership: 10,
  },
  {
    id: "client-015",
    name: "ARCHVISTA",
    industry: "Architecture & Design",
    logo: "/clients/archvista-logo.svg",
    description:
      "Contemporary architectural practice focused on sustainable and innovative design solutions.",
    projectCount: 16,
    testimonial:
      "Woodtech's commitment to sustainable materials aligns perfectly with our design philosophy.",
    testimonialAuthor: "Arch. Nipa Chowdhury",
    testimonialAuthorRole: "Principal, ARCHVISTA",
    yearsPartnership: 5,
  },
  {
    id: "client-016",
    name: "Easel Architects & Engineers Ltd",
    industry: "Architecture & Engineering",
    logo: "/clients/easel-logo.svg",
    description:
      "Full-service architecture and engineering firm delivering comprehensive design solutions.",
    projectCount: 20,
    testimonial:
      "Easel Architects values Woodtech's product consistency and their responsive support team.",
    testimonialAuthor: "Arch. Rizwanul Hasan",
    testimonialAuthorRole: "Managing Partner, Easel",
    yearsPartnership: 7,
  },
  {
    id: "client-017",
    name: "VENNA Architects",
    industry: "Architecture & Interior Design",
    logo: "/clients/venna-logo.svg",
    description:
      "Specialized architectural and interior design consultancy for luxury residential and hospitality projects.",
    projectCount: 17,
    testimonial:
      "VENNA relies on Woodtech for premium decorative veneers that elevate our interior design concepts.",
    testimonialAuthor: "Arch. Fatema Jahan",
    testimonialAuthorRole: "Design Director, VENNA Architects",
    yearsPartnership: 6,
  },
  {
    id: "client-018",
    name: "Synthesis ARCHITECTS",
    industry: "Architecture & Planning",
    logo: "/clients/synthesis-logo.svg",
    description:
      "Progressive architectural firm known for innovative design and sustainable building practices.",
    projectCount: 13,
    testimonial:
      "Woodtech's sustainable sourcing supports our commitment to environmentally responsible architecture.",
    testimonialAuthor: "Arch. Shafiq Ahmed",
    testimonialAuthorRole: "Founder, Synthesis ARCHITECTS",
    yearsPartnership: 5,
  },

  // Real Estate & Development
  {
    id: "client-019",
    name: "Concord Group of Companies",
    industry: "Real Estate & Development",
    logo: "/clients/concord-logo.svg",
    description:
      "Major real estate developer undertaking large-scale commercial and residential development projects.",
    projectCount: 33,
    testimonial:
      "Concord's diverse portfolio of premium developments benefits from Woodtech's high-quality finishing materials.",
    testimonialAuthor: "Hasib Waheduzzaman",
    testimonialAuthorRole: "Managing Director, Concord Group",
    yearsPartnership: 8,
  },
  {
    id: "client-020",
    name: "Shanta Holdings Limited",
    industry: "Real Estate & Healthcare Construction",
    logo: "/clients/shanta-logo.svg",
    description:
      "Developer active in real estate and healthcare-sector construction projects.",
    projectCount: 22,
    testimonial:
      "Shanta Holdings values long-term supplier relationships like our partnership with Woodtech.",
    testimonialAuthor: "Mustafa Habibi",
    testimonialAuthorRole: "CEO, Shanta Holdings",
    yearsPartnership: 7,
  },
  {
    id: "client-021",
    name: "AKIJ Group",
    industry: "Diversified Conglomerate",
    logo: "/clients/akij-logo.svg",
    description:
      "One of Bangladesh's leading conglomerates with diverse interests including furniture, textiles, and real estate.",
    projectCount: 40,
    testimonial:
      "AKIJ Group's scale requires a supplier partner like Woodtech who can deliver consistency across multiple divisions.",
    testimonialAuthor: "Akhtar Hossain",
    testimonialAuthorRole: "Group Director, AKIJ",
    yearsPartnership: 12,
  },
  {
    id: "client-022",
    name: "FAGUN Group",
    industry: "Construction & Infrastructure",
    logo: "/clients/fagun-logo.svg",
    description:
      "Construction and infrastructure-focused developer delivering mixed-use and commercial projects.",
    projectCount: 19,
    testimonial:
      "FAGUN Group relies on Woodtech materials for durable construction and infrastructure delivery.",
    testimonialAuthor: "Md. Shahjahan",
    testimonialAuthorRole: "Managing Director, FAGUN Group",
    yearsPartnership: 6,
  },

  // Energy & Power
  {
    id: "client-023",
    name: "Rampal Power Plant (BHEL)",
    industry: "Energy & Power Generation",
    logo: "/clients/rampal-logo.svg",
    description:
      "Major coal-fired thermal power plant developed in partnership with India's Bharat Heavy Electricals Ltd.",
    projectCount: 16,
    testimonial:
      "For critical industrial applications, Rampal Power Plant depends on Woodtech's durability and reliability.",
    testimonialAuthor: "Eng. K.P. Singh",
    testimonialAuthorRole: "Plant Manager, Rampal Power Plant",
    yearsPartnership: 4,
  },

  // Hospitality
  {
    id: "client-024",
    name: "Hotel Four Points by Sheraton Dhaka",
    industry: "Hospitality",
    logo: "/clients/sheraton-logo.svg",
    description:
      "Five-star luxury hotel project featuring premium interior finishes and joinery applications.",
    projectCount: 8,
    testimonial:
      "The quality of Woodtech materials contributes to the premium experience we provide our guests.",
    testimonialAuthor: "Hassan Reza",
    testimonialAuthorRole: "General Manager, Sheraton Dhaka",
    yearsPartnership: 5,
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
];
