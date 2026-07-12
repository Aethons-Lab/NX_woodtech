import incorporationCert from "@/public/certificates/certificate_of_incorporation.jpeg";
import nubtkCert from "@/public/certificates/nubtk.jpeg";
import nubtk19Cert from "@/public/certificates/nubtk19.jpeg";
import unnoyonMelaCert from "@/public/certificates/unnoyonmela.jpeg";
import iso9001Cert from "@/public/certificates/iso-1.png";

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issueDate?: string;
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
    id: "cert-iso-9001-2015",
    name: "ISO 9001:2015 — Quality Management System",
    issuer: "UNICERT (United Certification Services Limited)",
    issueDate: "2025-06-11",
    category: "ISO",
    image: iso9001Cert,
    description:
      "Certifies that Woodtech Industries (Pvt.) Ltd. has been assessed and complies with ISO 9001.",
    certificationNumber: "BDQ237W130",
  },
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
  {
    id: "cert-nubtk-job-fair-2018",
    name: "Certificate of Appreciation",
    issuer: "Northern University of Business & Technology Khulna",
    category: "Industry-Specific",
    image: nubtkCert,
    description:
      'Certificate of appreciation for Woodtech Pvt. Ltd. in recognition of its active participation in the "NUBTK Job Fair 2018".',
    certificationNumber: "NUBTK Job Fair 2018",
  },
  {
    id: "cert-nubtk-job-fair-2019",
    name: "Certificate of Appreciation",
    issuer: "Northern University of Business & Technology Khulna",
    issueDate: "2019-04-10",
    category: "Industry-Specific",
    image: nubtk19Cert,
    description:
      'Certificate of appreciation issued to Woodtech Pvt. Ltd. for effective participation in the "NUBTK Job Fair 2019" on 10 April 2019.',
    certificationNumber: "NUBTK Job Fair 2019",
  },
  {
    id: "cert-unnoyon-mela-2018",
    name: "Certificate of Participation",
    issuer: "District Administration, Khulna",
    issueDate: "2018-10-04",
    category: "Government",
    image: unnoyonMelaCert,
    description:
      "Certificate awarded to Woodtech Industries Private Limited for successful participation in the 4th National Development Fair 2018 in Khulna.",
    certificationNumber: "4th National Development Fair 2018",
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
