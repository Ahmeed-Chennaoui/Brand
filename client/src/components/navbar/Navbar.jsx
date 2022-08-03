import React from 'react'
import { useNavigate ,Link } from 'react-router-dom';
import Element from './Element';
import './navbar.scss';
import {
    AppBar,
    Toolbar,
    Typography,
    useTheme,
    useMediaQuery,
    Box
  } from "@mui/material";
import DrawerComponent from "../Drawer/drawer";
import Authentification from "../Authentification/authentification"
import SearchField from "../SearchField/searchField"
import Notification from "../Notification/notification"
import Settings from "../Settings/settings"
function Navbar() {
  let navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const classes = {
      logo:"logo",
      link:"link",
      navlinks:"navlinks"
    };
  return (
    <Box sx={{ marginBottom: '70px' }}>
    <AppBar >
      <Toolbar className="tool-bar">
      {/*<Element callback={()=>navigate("/")}>
        <Typography variant="h4" className={classes.logo}>
            Brand
        </Typography>
      </Element>*/}
      <Link to="/" >
        <Typography variant="h4" className={classes.logo}>
          Brand
        </Typography>
  </Link>
  <SearchField></SearchField>

        {isMobile ? (
          <DrawerComponent />
        ) : (
        <div className={classes.navlinks}>

            <Authentification></Authentification>
            <Notification></Notification>
            <Settings></Settings>
            <Link to="/" className={classes.link}>
              about
            </Link>
          </div>
          )}
      </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Navbar