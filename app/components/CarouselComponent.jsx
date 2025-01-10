"use client";

import {
  Card,
  Paper,
  CardContent,
  Typography,
  CardActionArea,
  Divider,
  CardMedia,
  Avatar,
  Link,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const cards = [
  {
    id: 1,
    name: "Addison Wheeler",
    company: "Insert Company",
    position: "Job Title",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tortor non tincidunt feugiat. Nam sed enim eget ante egestas eleifend a at tellus.",
  },
  {
    id: 2,
    name: "Braden Walter",
    company: "Insert Company",
    position: "Job Title",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tortor non tincidunt feugiat. Nam sed enim eget ante egestas eleifend a at tellus.",
  },
  {
    id: 3,
    name: "Clarissa Reid",
    company: "Insert Company",
    position: "Job Title",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tortor non tincidunt feugiat. Nam sed enim eget ante egestas eleifend a at tellus.",
  },
  {
    id: 4,
    name: "Felix Snow",
    company: "Insert Company",
    position: "Job Title",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tortor non tincidunt feugiat. Nam sed enim eget ante egestas eleifend a at tellus.",
  },
  {
    id: 5,
    name: "Bruce Powers",
    company: "Insert Company",
    position: "Job Title",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tortor non tincidunt feugiat. Nam sed enim eget ante egestas eleifend a at tellus.",
  },
  {
    id: 6,
    name: "Bria Espinoza",
    company: "Insert Company",
    position: "Job Title",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tortor non tincidunt feugiat. Nam sed enim eget ante egestas eleifend a at tellus.",
  },
];

const CarouselComponent = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      itemClass="carousel-item-padding-40-px"
    >
      {cards.map((card) => (
        <Paper elevation={12}>
          <Card
            key={card.id}
            sx={{
              width: 500,
              border: 2,
              borderColor: "#D3D3D3",
            }}
          >
            <CardActionArea
              sx={{
                height: "100%",
                display: "flex",
                alignContent: "start",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height="40%"
                width="20"
                image="./placeholder_logo.png"
                alt="company logo"
              />
              <CardContent
                sx={{
                  width: "500",
                  display: "flex",
                  flexDirection: "row",
                  gap: "15px",
                }}
              >
                <Avatar></Avatar>
                <Typography marginTop={0.5} variant="h5" textAlign={"right"}>
                  {card.name}
                </Typography>
              </CardContent>
              <CardContent sx={{ display: "flex" }}>
                <Typography variant="subtitle1" sx={{ alignSelf: "flex-end" }}>
                  {card.position} at {card.company}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography textAlign={"center"} variant="body2">
                  "{card.quote}"
                </Typography>
              </CardContent>
              <Divider variant="middle"></Divider>
              <CardContent>
                <Link href="">
                  <LinkedInIcon sx={{ mx: 1 }} />
                </Link>
                <Link href="">
                  <FacebookIcon sx={{ mx: 1 }} />
                </Link>
                <Link href="">
                  <InstagramIcon sx={{ mx: 1 }} />
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </Paper>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
