import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss';
import {
    AppBar,
    Toolbar,
    Typography
  } from "@mui/material";
import DrawerComponent from "../Drawer/drawer";
import SearchField from "../SearchField/searchField"
import Notification from "../Notification/notification"


function Navbar() {
  return (
    <AppBar >
      <Toolbar className="navbar_container">
      <Link className="logo" to="/" >
        <Typography variant="h4" className="logo_text">
          Brand
        </Typography>
      </Link>
      <SearchField></SearchField>
      <Notification></Notification>
      <DrawerComponent />
      </Toolbar>
    </AppBar>

  )
}

export default Navbar