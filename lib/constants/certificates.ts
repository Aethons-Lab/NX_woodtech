import incorporationCert from "@/public/certificates/certificate_of_incorporation.jpeg";

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  category:
    | "ISO"
    | "Environmental"
    | "Safety"
    | "Quality"
    | "Government"
    | "Industry-Specific";
  image: any;
  description: string;
  certificationNumber: string;
}

export const certificates: Certificate[] = [
  {
    id: "cert-incorporation",
    name: "Certificate of Incorporation",
    issuer: "Assistant Registrar of Joint Stock Companies & Firms, Bangladesh",
    issueDate: "2014-05-15",
    category: "Government",
    image: incorporationCert,
    description:
      "Official registration certificate establishing Woodtech Industries (Pvt.) Ltd as a limited company under the Companies Act (Act XVIII) of 1994 in Bangladesh.",
    certificationNumber: "KHC - 1269/14",
  },
];

export const certificateCategories = [
  { id: "all", label: "All Certifications", count: certificates.length },
  {
    id: "Government",
    label: "Government",
    count: certificates.filter((c) => c.category === "Government").length,
  },
  {
    id: "ISO",
    label: "ISO Certifications",
    count: certificates.filter((c) => c.category === "ISO").length,
  },
  {
    id: "Environmental",
    label: "Environmental",
    count: certificates.filter((c) => c.category === "Environmental").length,
  },
  {
    id: "Safety",
    label: "Safety",
    count: certificates.filter((c) => c.category === "Safety").length,
  },
  {
    id: "Quality",
    label: "Quality",
    count: certificates.filter((c) => c.category === "Quality").length,
  },
  {
    id: "Industry-Specific",
    label: "Industry-Specific",
    count: certificates.filter((c) => c.category === "Industry-Specific")
      .length,
  },
];
