import React, { useState,MouseEvent} from "react";

import {
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Popover,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from"@mui/material/IconButton";
import SettingsIcon from '@mui/icons-material/Settings';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Authentification from "../Authentification/authentification"


function ProfileDrawer() {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  //const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const handleClick = (
    //event: MouseEvent<HTMLButtonElement>
  ) => {
    //setAnchorEl(event.currentTarget);
    setOpenDrawer(!openDrawer);
  };
  const handleClose = () => {
    //setAnchorEl(null);
    setOpenDrawer(false);
  };
  return (
    <>
    { isMobile ? (
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
            <Link to="/Themes">
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
            <Link to="/settings">
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
    ) : (<Paper className="samller Desktop Menu">
      <Popover 
      open={openDrawer}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
  }}
>       <List>
        <Authentification></Authentification>
        <ListItem onClick={() => setOpenDrawer(false)}>
        <ListItemText
          primary={
            <Link to="/Themes">
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
            <Link to="/settings">
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
      </Popover>
      </Paper>
    )}
    <IconButton onClick={() => handleClick()}>
      <AccountCircleIcon />
    </IconButton>
  </>
  );
}
export default ProfileDrawer;