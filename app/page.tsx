import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/landing-page";
import { ThemeProvider, createTheme } from "@mui/material";
import { Organization, WithContext } from "schema-dts";

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  legalName: "AgencyName",
  logo: "https://nextjs.org/imgs/sticker.png",
  telephone: "5555555555",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <LandingPage />
      <Footer />
    </>
  );
}
