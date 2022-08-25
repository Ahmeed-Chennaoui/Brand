import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Searchbar from "./Searchbar";
import { useContext } from "react";
import { GlobalContext } from "../contexts/globalContext";
import ProfileMenu from "./ProfileMenu";
import NotificationMenu from "./NotificationMenu";
import { isEmpty } from "../utils/isEmpty";
import { useNavigate } from "react-router-dom";

function Nav({ fixedNavbar, sticky }) {
  let navigate = useNavigate();
  const { currentUser } = useContext(GlobalContext);
  return (
    <HeroNav fixed={fixedNavbar} sticky={sticky}>
      <Typography variant="h2" className="logo" fontWeight="bold">
        Brand
      </Typography>
      <Searchbar fixedNavbar={fixedNavbar} sticky={sticky} />
      {isEmpty(currentUser) && (
        <div className="connection">
          <Button
            variant="outlined"
            color="info"
            sx={{ fontWeight: "bold" }}
            size="large"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/signup")}
          >
            Signup
          </Button>
        </div>
      )}
      {!isEmpty(currentUser) && (
        <div
          style={{
            minWidth: "125px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <NotificationMenu />
          <ProfileMenu />
        </div>
      )}
    </HeroNav>
  );
}

const HeroNav = styled(Box, {
  shouldForwardProp: (prop) => prop !== "fixed" || prop !== "sticky",
})(({ theme, fixed, sticky }) => ({
  position: fixed ? "fixed" : "sticky",
  top: 0,
  display: "flex",
  zIndex: 25,
  justifyContent: "space-between",
  height: "75px",
  width: "100%",
  paddingRight: "3vw",
  paddingLeft: "3vw",
  color: "white",
  backgroundColor: fixed || sticky ? "#FFFFFF" : "none",

  borderBottom: fixed || sticky ? "1px rgba(0,0,0,.5) solid" : "none",
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
      width: "calc(70vw - 125px)",
    },
  },
}));

export default Nav;
