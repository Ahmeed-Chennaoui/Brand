import styled from "@emotion/styled";
import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import React from "react";
import Searchbar from "./Searchbar";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext, useState } from "react";
import { GlobalContext } from "../contexts/globalContext";
import ProfileMenu from "./ProfileMenu";
import NotificationMenu from "./NotificationMenu";

import PageviewIcon from '@mui/icons-material/Pageview';
import "./Nav.scss"
import {useNavigate} from 'react-router-dom';
import { isEmpty } from "../utils/isEmpty";

const demoUser = {
  name: "Karim Hmidi",
  email: "karim.hmidi@ensi-uma.tn",
};


      



function Nav({ fixedNavbar, sticky, drawer }) {
  let navigate = useNavigate();
  const { currentUser } = useContext(GlobalContext);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerClose = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(false);
  };
  return (
    <Navbar fixed={fixedNavbar} sticky={sticky}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {drawer && (
          <>
            <IconButton
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon sx={{ fontSize: 40 }} />
            </IconButton>

            <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
              {drawer}
            </Drawer>
          </>
        )}
        <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <Typography variant="h2" className="logo" fontWeight="bold">
            Brand
          </Typography>
        </div>
      </div>

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

          <ProfileMenu demoUser={demoUser}   />

          <ProfileMenu />

        </div>
      )}
    </Navbar>
  );
}

const Navbar = styled(Box, {
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
