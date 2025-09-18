import localFont from "next/font/local";
import "./globals.css";

const dominik = localFont({
  src: "./fonts/Dominik.ttf",
  variable: "--font-dominik",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Ensure `.woff` file is in the correct folder
  variable: "--font-geist-sans", // CSS variable for Geist Sans font
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff", // Ensure `.woff` file is in the correct folder
  variable: "--font-geist-mono", // CSS variable for Geist Mono font
});

export const metadata = {
  title: {
    default: "Vexa-Architect",
    template: "%s | Vexa-Architect",
  },
  description:
    "Explore innovative architecture and design solutions with Vexa-Architect. Think | Draw | Build your dream projects.",
  keywords: [
    "architecture",
    "design",
    "vexa architect",
    "portfolio",
    "interior design",
    "exterior design",
    "construction",
  ],
  openGraph: {
    title: "Vexa-Architect",
    description:
      "Explore innovative architecture and design solutions with Vexa-Architect. Think | Draw | Build your dream projects.",
    url: "https://vexaarchitect.in", // ✅ Replace with your domain
    siteName: "Vexa-Architect",
    images: [
      {
        url: "https://www.vexaarchitect.in/_next/image?url=%2Fimages%2Fvexa-primary.png&w=384&q=75", // ✅ Replace with your OG image
        width: 1200,
        height: 630,
        alt: "Vexa-Architect",
      },
    ],
    type: "website",
    seeAlso: [
      "https://www.behance.net/mohdfayas",
      "https://www.instagram.com/vexa.architect/",
      "https://www.facebook.com/share/1ErmSUZL6X/?mibextid=wwXIfr",
    ],
  },
  
  other: {
    socialLinks: [
      {
        href: "https://www.behance.net/mohdfayas",
        label: "Behance",
        icon: "Globe",
      },
      {
        href: "https://www.instagram.com/vexa.architect/",
        label: "Instagram",
        icon: "Instagram",
      },
      {
        href: "https://www.facebook.com/share/1ErmSUZL6X/?mibextid=wwXIfr",
        label: "Facebook",
        icon: "Facebook",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dominik.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
