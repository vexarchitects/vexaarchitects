import HomeContent from "./components/HomeContent";


export const metadata = {
  title: "Vexa-Architect ",
  description: "Explore innovative architecture and design solutions with Vexa-Architect. Think | Draw | Build your dream projects.",
  keywords: ["architecture", "design", "vexa architect", "portfolio", "construction", "interior design", "exterior design"],
  openGraph: {
    title: "Vexa-Architect ",
    description: "Explore innovative architecture and design solutions with Vexa-Architect.",
    url: "https://vexaarchitects.in",
    siteName: "Vexa-Architect",
 
    type: "website",
  },
};


export default function Page() {
  return <HomeContent />;
}
