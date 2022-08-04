import React, { useState } from "react";
import './drawer.scss'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from"@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Authentification from "../Authentification/authentification"
import Settings from "../Settings/settings"

function DrawerComponent() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const classes = {
      logo:"logo",
      link:"link",
      navlinks:"navlinks"
    };
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
        <Settings></Settings>
        <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            <Link to="/" className={classes.link}>
            about</Link>
          </ListItemText>
       </ListItem>
         {/*<ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          */} 
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
      <MenuIcon />
    </IconButton>
  </>
  );
}
export default DrawerComponent;