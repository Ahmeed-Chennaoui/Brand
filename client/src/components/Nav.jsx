import styled from "@emotion/styled";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Icon } from '@iconify/react';

import Searchbar from "./Searchbar";
import { useContext } from "react";
import { GlobalContext } from "../contexts/globalContext";
import { IconButton } from "@mui/material";

const demoUser = {
  name: "Ahmed Chennaoui",
  email: "ahmed.chenneoui@ensi-uma.tn",
};

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

function Nav({ fixedNavbar }) {
  const { loggedIn, setLoggedIn } = useContext(GlobalContext);
  const [anchorElement, setAnchorElement] = useState(null);
  const openAvatar = Boolean(anchorElement);

  const handleClick = (event) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };
  return (
    <HeroNav fixed={fixedNavbar}>
      <Typography variant="h2" className="logo" fontWeight="bold">
        Brand
      </Typography>
      <Searchbar />
      {!loggedIn && (
        <div className="connection">
          <Button
            variant="outlined"
            color="info"
            sx={{ fontWeight: "bold" }}
            size="large"
            onClick={() => setLoggedIn(true)}
          >
            Login
          </Button>
          <Button variant="contained" size="large">
            Signup
          </Button>
        </div>
      )}
      {loggedIn && (
        <div style={{minWidth:'125px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
             <IconButton
        // ref={anchorRef}
        color={openAvatar ? 'primary' : 'default'}
        // onClick={handleOpen}
        sx={{ width: 40, height: 40 }}
      >
        <Badge badgeContent={2} color="error" overlap="circular">
          <Icon icon="eva:bell-fill" width={32} height={32} />
        </Badge>
      </IconButton>
          <IconButton
            // the aria part is made for accessibility
            aria-controls={openAvatar ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openAvatar ? "true" : undefined}
            onClick={handleClick}
          >
            <Avatar />
          </IconButton>
          <Menu
            anchorEl={anchorElement}
            id="account-menu"
            open={openAvatar}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiMenuItem-root": {
                  m: 0.75,
                  typography: 'body2',
                  borderRadius: 0.75,
                },
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 20,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Box sx={{ my: 1.5, px: 2.5 }}>
              <Typography variant="subtitle2" noWrap>
                {demoUser.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                noWrap
              >
                {demoUser.email}
              </Typography>
            </Box>

            <Divider sx={{ borderStyle: "dashed"}} />
            <MenuItem>
              Account
            </MenuItem>
            <MenuItem>
              Settings
            </MenuItem>
            <Divider sx={{ borderStyle: "dashed" }} />

            <MenuItem>
              Logout
            </MenuItem>
          </Menu>
         
        </div>
      )}
    </HeroNav>
  );
}

export default Nav;
