import React, { useState } from "react";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from"@mui/material/IconButton";
import SettingsIcon from '@mui/icons-material/Settings';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Authentification from "../Authentification/authentification"


function ProfileDrawer() {
    const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
    <Drawer 
    anchor="right"
    className="nav-drawer" 
    open={openDrawer}  
    onClose={() => setOpenDrawer(false)}  
    >
        <List>
        <Authentification></Authentification>
        <ListItem onClick={() => setOpenDrawer(false)}>
        <ListItemText
          primary={
            <Link to="/sttings">
              <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
          }}>
              <InvertColorsIcon color="primary"/>
              <span>Theme</span></div>
            </Link>
            }
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 'medium'}}
        />
        <ListItemText
          primary={
            <Link to="/sttings">
              <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
          }}>
              <SettingsIcon color="primary"/>
              <span>Settings</span></div>
            </Link>
            }
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 'medium'}}
        /></ListItem>
        <theme></theme>
         {/*<ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          */} 
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
      <AccountCircleIcon />
    </IconButton>
  </>
  );
}
export default ProfileDrawer;