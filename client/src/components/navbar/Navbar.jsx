import React from 'react'
import './Navbar.scss';
import {
    AppBar,
    Toolbar,
  } from "@mui/material";
import DrawerComponent from "../Drawer/drawer";
import SearchField from "../SearchField/searchField"
import ProfileBar from "../ProfileBar/profileBar"


function Navbar() {
  return (
    <AppBar position='sticky'>
      <Toolbar className="navbar_container">
        <DrawerComponent />
        <div className="flex_grow"/>
        <SearchField></SearchField>
        <ProfileBar></ProfileBar>
      </Toolbar>
    </AppBar>

  )
}

export default Navbar