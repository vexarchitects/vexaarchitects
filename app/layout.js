
import localFont from "next/font/local";
import "./globals.css";
import TawkWidget from "./components/TawkWidget";

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
    url: "https://www.vexaarchitect.in/", // ✅ Replace with your domain
    siteName: "Vexa-Architect",
    
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Vexa-Architect",
    "url": "https://www.vexaarchitect.in",
    "logo": "https://www.vexaarchitect.in/images/vexa-primary.png",
    "image": "https://www.vexaarchitect.in/images/vaxa-main.webp",
    "telephone": "+918943025049",
    "email": "vexarchitects@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kannur",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "areaServed": "Kerala",
    "sameAs": [
      "https://www.instagram.com/vexa.architect/",
      "https://www.behance.net/mohdfayas",
      "https://www.facebook.com/share/1ErmSUZL6X/?mibextid=wwXIfr"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Plan Designing"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "3D Visualising"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Interior & Exterior Work"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Renovation Work"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Modular Kitchen"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Construction"}}
      ]
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dominik.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}
        <TawkWidget/>
      </body>
    </html>
  );
}
