import React, { useContext } from "react";
import { GlobalContext } from "../contexts/globalContext";
import { styled } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import Hero from "../assets/hero.jpg";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";
import { useRef } from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "../utils/isEmpty";

const HeroContainer = styled("div")(({ theme }) => ({
  backgroundImage: `url(${Hero})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
  backgroundPosition: "90% 0%",
  [theme.breakpoints.down("md")]: {
    height: "50vh",
  },
}));

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

const BrandMottoMobile = ({ marginBot, setMarginBot, callback }) => {
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
        borderRadius: "40px",
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
        sx={{ width: "200px", mt: "20px" }}
        onClick={callback}
      >
        Become one of our professionals
      </Button>
    </div>
  );
};

function BrandHero() {
  const { currentUser } = useContext(GlobalContext);
  //++ this is only to test responisveness ++
  const [marginBot, setMarginBot] = useState(window.clientHeight);
  //++++++++++++++++++++++++++++++++++++++++++++
  const theme = useTheme();
  const navigate = useNavigate();
  const handleClick = () => {
    if (!isEmpty(currentUser)) return navigate("/career");

    navigate("/authError");
  };
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
      <Nav fixedNavbar={fixedNavbar} />
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
              Hire experts to get the job done
            </Typography>
            <Typography variant="h4" className="description" sx={{ margin: 0 }}>
              We bring you the best professionals from all fields to match all
              your needs
            </Typography>

            <Button
              variant="contained"
              size="large"
              color="secondary"
              sx={{ width: "20vw", minWidth: "230px", maxWidth: "350px" }}
              onClick={handleClick}
            >
              Become one of our professionals
            </Button>
          </div>
        </BrandMotto>
      )}
      {breakpoint && (
        <BrandMottoMobile
          marginBot={marginBot}
          setMarginBot={setMarginBot}
          callback={handleClick}
        />
      )}
    </HeroContainer>
  );
}

export default BrandHero;
