import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import Hero from "../assets/hero.jpg";
import Searchbar from "./Searchbar";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";
import { useRef } from "react";

const HeroContainer = styled("div")(({ theme }) => ({
  backgroundImage: `url(${Hero})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "99.1vw",
  height: "100vh",
  backgroundPosition: "90% 0%",
  [theme.breakpoints.down("md")]: {
    height: "50vh",
  },
}));
const HeroNav = styled(Box, { shouldForwardProp: (prop) => prop !== "fixed" })(
  ({ theme, fixed }) => ({
    position: fixed ? "fixed" : "relative",
    display: "flex",
    zIndex: 2,
    justifyContent: "space-between",
    height: "75px",
    width: "100%",
    paddingRight: "3vw",
    paddingLeft: "3vw",
    color: "white",
    backgroundColor: fixed ? "#FFFFFF" : "none",
    borderBottom: fixed ? "1px rgba(0,0,0,.5) solid" : "none",
    alignItems: "center",
    transition: theme.transitions.create(["all"]),

    ".MuiFilledInput-root": {
      width: "30vw",
    },
    "& .logo": {
      color: "#6439ff",
    },
    "& .MuiButton-outlined": {
      borderWidth: "2px",
    },
    [theme.breakpoints.down("md")]: {
      "& .logo": {
        fontSize: "calc(30vw/4)",
      },
      "& .connection": {
        display: "none",
      },
      ".MuiFilledInput-root": {
        width: "70vw",
      },
    },
  })
);
const BrandMotto = styled("div")(({ theme }) => ({
  display: "flex",
  paddingLeft: "3vw",
  justifyContent: "flex-start",
  alignItems: "center",
  "& .motto": {
    color: "white",
    textShadow: "black 0px 0px 10px",
    marginBottom: "5vh",
  },
  "& .description": {
    color: "white",
    textShadow: "black 0px 0px 10px",
    marginBottom: "3vh",
  },
}));

const BrandMottoMobile = ({ marginBot, setMarginBot }) => {
  const mobileMotto = useRef();
  function changeHeight() {
    setMarginBot(mobileMotto.current.clientHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", changeHeight);

    return () => window.removeEventListener("resize", changeHeight);
  });
  return (
    <div
      ref={mobileMotto}
      elevation={24}
      style={{
        width: "70vw",
        minHeight: "30vh",
        margin: "auto",
        padding: "20px",
        maxWidth: "500px",
        position: "relative",
        top: `35vh`,
        textAlign: "center",
        backgroundColor: "#0288d1",
        borderRadius: "10%",
        marginBottom: `${marginBot}px`,
      }}
    >
      <Typography variant="h3"> Hire experts to get the job done</Typography>
      <Typography variant="h5">
        We bring you the best professionals from all fields to match all your
        needs
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{ width: "150px", mt: "20px" }}
      >
        Get started
      </Button>
    </div>
  );
};

function BrandHero() {
  const [marginBot, setMarginBot] = useState(0);
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("md"));
  const [fixedNavbar, setFixedNavbar] = useState(false);
  function setFixed() {
    if (window.scrollY > 75) {
      setFixedNavbar(true);
    } else {
      setFixedNavbar(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", setFixed);
    return () => window.removeEventListener("scroll", setFixed);
  }, []);
  return (
    <HeroContainer
      style={{ marginBottom: breakpoint ? `${marginBot}px` : "0px" }}
    >
      <HeroNav fixed={fixedNavbar}>
        <Typography variant="h2" className="logo" fontWeight="bold">
          Brand
        </Typography>
        <Searchbar />
        <div className="connection">
          <Button
            variant="outlined"
            color="info"
            sx={{ fontWeight: "bold" }}
            size="large"
          >
            Login
          </Button>
          <Button variant="contained" size="large">
            Signup
          </Button>
        </div>
      </HeroNav>
      {!breakpoint && (
        <BrandMotto>
          <div
            style={{
              width: "50vw",
              height: fixedNavbar ? "calc(100vh + 75px)" : "calc(100vh - 75px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h1" className="motto">
              Hire experts to get the job done{" "}
            </Typography>
            <Typography variant="h4" className="description" sx={{ margin: 0 }}>
              We bring you the best professionals from all fields to match all
              your needs
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ width: "15vw", maxWidth: "200px", minWidth: "150px" }}
            >
              Get started
            </Button>
          </div>
        </BrandMotto>
      )}
      {breakpoint && (
        <BrandMottoMobile marginBot={marginBot} setMarginBot={setMarginBot} />
      )}
    </HeroContainer>
  );
}

export default BrandHero;
