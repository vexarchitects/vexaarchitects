import HomeContent from "./components/HomeContent";


export const metadata = {
  title: "Architecture & Interior Design Firm in Kannur, Kerala",
  description: "Vexa-Architect is a Kannur, Kerala design studio offering plan designing, 3D visualization, interior & exterior design, renovation and construction. Get a free consultation.",
  keywords: ["architecture", "design", "vexa architect", "portfolio", "construction", "interior design", "exterior design"],
  alternates: {
    canonical: "https://www.vexaarchitect.in/",
  },
  openGraph: {
    title: "Architecture & Interior Design Firm in Kannur, Kerala | Vexa-Architect",
    description: "Vexa-Architect is a Kannur, Kerala design studio offering plan designing, 3D visualization, interior & exterior design, renovation and construction. Get a free consultation.",
    url: "https://www.vexaarchitect.in/",
    siteName: "Vexa-Architect",
    type: "website",
  },
};


export default function Page() {
  return <HomeContent />;
}
