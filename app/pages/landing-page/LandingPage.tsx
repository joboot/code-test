import * as React from "react";
import Image from "next/image";
import Carousel from "@/app/components/CarouselComponent";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid2, Divider } from "@mui/material";

const services = [
  {
    key: 1,
    name: "Service 1",
    alt: "service1alt",
    img: "./placeholder_image.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tortor non tincidunt feugiat. Nam sed enim eget ante egestas eleifend a at tellus. Ut hendrerit lacus augue, eu fermentum magna laoreet et. Proin risus mi, consectetur at turpis non, dictum euismod erat. Cras nec magna faucibus, vestibulum ex in, mattis turpis. Pellentesque egestas mauris euismod bibendum fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus et tortor et tempus. Ut luctus sollicitudin purus.",
  },
  {
    key: 2,
    name: "Service 2",
    alt: "service2alt",
    img: "./placeholder_image.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tortor non tincidunt feugiat. Nam sed enim eget ante egestas eleifend a at tellus. Ut hendrerit lacus augue, eu fermentum magna laoreet et. Proin risus mi, consectetur at turpis non, dictum euismod erat. Cras nec magna faucibus, vestibulum ex in, mattis turpis. Pellentesque egestas mauris euismod bibendum fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus et tortor et tempus. Ut luctus sollicitudin purus.",
  },
  {
    key: 3,
    name: "Service 3",
    alt: "service3alt",
    img: "./placeholder_image.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tortor non tincidunt feugiat. Nam sed enim eget ante egestas eleifend a at tellus. Ut hendrerit lacus augue, eu fermentum magna laoreet et. Proin risus mi, consectetur at turpis non, dictum euismod erat. Cras nec magna faucibus, vestibulum ex in, mattis turpis. Pellentesque egestas mauris euismod bibendum fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus et tortor et tempus. Ut luctus sollicitudin purus.",
  },
  {
    key: 4,
    name: "Service 4",
    alt: "service4alt",
    img: "./placeholder_image.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tortor non tincidunt feugiat. Nam sed enim eget ante egestas eleifend a at tellus. Ut hendrerit lacus augue, eu fermentum magna laoreet et. Proin risus mi, consectetur at turpis non, dictum euismod erat. Cras nec magna faucibus, vestibulum ex in, mattis turpis. Pellentesque egestas mauris euismod bibendum fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus et tortor et tempus. Ut luctus sollicitudin purus.",
  },
];

const LandingPage = () => {
  return (
    <main>
      <Container sx={{ marginY: 10, width: "100%" }}>
        <Typography variant="h3" sx={{ paddingY: 4, textAlign: "center" }}>
          Our Services
        </Typography>

        <Grid2
          container
          spacing={{ md: 3 }}
          columns={{ md: 8 }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {services.map((service) => (
            <Grid2 size={3}>
              <Card sx={{ my: 5, maxWidth: 600 }} elevation={6}>
                <CardMedia
                  key={service.key}
                  component="img"
                  alt={service.alt}
                  height="140"
                  image={service.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {service.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>

      <Divider variant="middle" />
      <Container sx={{ marginY: 10 }}>
        <Typography variant="h3" sx={{ textAlign: "center", marginBottom: 10 }}>
          Client Testimonials
        </Typography>
        <div>
          <Carousel />
        </div>
      </Container>
      <Divider variant="middle" />
    </main>
  );
};

export default LandingPage;
