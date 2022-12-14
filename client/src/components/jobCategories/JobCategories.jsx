import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Blacksmith from "../../assets/iron.jpg";
import Painter from "../../assets/painting.jpg";
import Carpenter from "../../assets/carpenter.jpg";
import Gardner from "../../assets/garden.jpg";
import Mason from "../../assets/mason.jpg";
import Electrician from "../../assets/Electrician.jpg";
import Plumber from "../../assets/plumber.jpg";
import Cleaning from "../../assets/cleaning.jpg";
import Mecanic from "../../assets/mecanic.jpg";
import { createSearchParams, useNavigate } from "react-router-dom";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 125,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 4,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -4,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));
const underline = {
  backgroundColor: "#6439ff",
  width: "50px",
  height: "5px",
  m: "auto",
  mt: "5px",
};

const images = [
  {
    url: Blacksmith,
    title: "Blacksmith",
    width: "40%",
  },
  {
    url: Gardner,
    title: "Gardner",
    width: "20%",
  },
  {
    url: Painter,
    title: "Painter",
    width: "40%",
  },
  {
    url: Carpenter,
    title: "Carpenter",
    width: "30%",
  },
  {
    url: Mason,
    title: "Mason worker",
    width: "40%",
  },
  {
    url: Electrician,
    title: "Electrician",
    width: "30%",
  },
  {
    url: Mecanic,
    title: "Mecanic",
    width: "35%",
  },
  {
    url: Plumber,
    title: "Plumber",
    width: "30%",
  },
  {
    url: Cleaning,
    title: "Cleaning service",
    width: "35%",
  },
];

function JobCategories() {
  const navigate = useNavigate();
  const handleClick = (image) => {
    setTimeout(() => {
      navigate({
        pathname: "/search",
        search: createSearchParams({
          profession:
            image.title === "Cleaning service" ? "Cleaning" : image.title,
        }).toString(),
      });
    }, 800);
  };
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" align="center" component="h2">
        Serving all your professional needs
      </Typography>
      <Box sx={underline} />
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
            onClick={() => handleClick(image)}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title + "s"}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}

export default JobCategories;
