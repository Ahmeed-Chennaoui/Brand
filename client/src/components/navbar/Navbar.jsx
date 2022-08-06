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
import ProfileBar from "../ProfileBar/profileBar"


function Navbar() {
  return (
    <AppBar >
      <Toolbar className="navbar_container">
      <DrawerComponent />
      <Link className="logo" to="/" >
        <Typography variant="h6" className="logo_text">
          Brand
        </Typography>
      </Link>
      <SearchField></SearchField>
      <ProfileBar></ProfileBar>
      </Toolbar>
    </AppBar>

  )
}

export default Navbar