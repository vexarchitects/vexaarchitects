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
    images: [
      {
        url: "https://www.vexaarchitect.in/_next/image?url=%2Fimages%2Fvexa-primary.png&w=384&q=75",
        width: 1200,
        height: 630,
        alt: "Vexa-Architect Home",
      },
    ],
    type: "website",
  },
};


export default function Page() {
  return <HomeContent />;
}
