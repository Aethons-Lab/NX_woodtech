import type { Metadata } from "next";
import { Libre_Caslon_Text, Work_Sans, JetBrains_Mono } from "next/font/google";
import "./styles/globals.css";
import Nav from "@/components/shared/nav/Nav";
import Footer from "@/components/shared/footer/Footer";
import { cn } from "@/lib/utils";

const serif = Libre_Caslon_Text({
  weight: ["400", "700"],
  variable: "--font-serif",
  subsets: ["latin"],
});

const sans = Work_Sans({
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  weight: ["400", "500"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Woodtech Ply — Crafting Quality, Building Futures",
  description:
    "Engineered plywood and solid wooden doors, pressed and finished in Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        serif.variable,
        sans.variable,
        mono.variable,
      )}
    >
      <body className="min-h-full">
        <div className="flex min-h-full flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
