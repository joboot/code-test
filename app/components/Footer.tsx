import ContactForm from "./ContactForm";
import { Grid2, Container, Typography, Divider, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const date = new Date().getFullYear();

const pages = [
  { name: "Services", id: "services" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact" },
];

const Footer = () => {
  return (
    <Container sx={{ width: "100%", marginTop: 10 }}>
      <Typography marginBottom={10} variant="h3" textAlign={"center"}>
        Get in Touch
      </Typography>
      <Container sx={{ width: "100%" }}>
        <Grid2
          container
          spacing={8}
          size={8}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid2
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column",
            }}
            marginY={10}
            spacing={500}
            size={5.5}
          >
            <Typography marginY={3} variant="h4" textAlign={"center"}>
              AgencyName
            </Typography>
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexDirection: "row",
              }}
            >
              <Link href="">
                <EmailIcon sx={{ mx: 1 }} />
              </Link>
              <Link href="">
                <LinkedInIcon sx={{ mx: 1 }} />
              </Link>
              <Link href="">
                <FacebookIcon sx={{ mx: 1 }} />
              </Link>
              <Link href="">
                <InstagramIcon sx={{ mx: 1 }} />
              </Link>
            </Container>
            <Container sx={{ my: 2 }}>
              {pages.map((page) => (
                <Link
                  href=""
                  variant="body2"
                  key={page.id}
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h5">{page.name}</Typography>
                </Link>
              ))}
            </Container>
          </Grid2>
          <Grid2 sx={{ width: 500 }} size={1}>
            <ContactForm />
          </Grid2>
        </Grid2>
        <Divider></Divider>
        <Typography variant="caption">
          Copyright {date} All Rights Reserved.
        </Typography>
      </Container>
    </Container>
  );
};

export default Footer;
