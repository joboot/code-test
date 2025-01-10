import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/landing-page";
import { Container } from "@mui/material";
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
      <Container
        sx={{
          border: 0.5,
          borderColor: "#def8f8",
          boxShadow: 10,
          backgroundColor: "#FAF9F6",
        }}
      >
        <Navbar />
        <LandingPage />
        <Footer />
      </Container>
    </>
  );
}
