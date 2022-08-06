import React, { useState } from "react";
import './drawer.scss'
import TheFooter from '../../components/footer/footer'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography
} from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from"@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

function DrawerComponent() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const classes = {
      logo:"logo",
      link:"link",
      navlinks:"navlinks",
      bottomPush:"bottom_push"
    };
  return (
    <>
    <Drawer 
    anchor="left"
    className="nav_drawer" 
    open={openDrawer}  
    onClose={() => setOpenDrawer(false)}  
    >
        <List divider='true'>
        <ListItem onClick={() => setOpenDrawer(false)}>
        <ListItemText
          primary={
            <div className="Makes the icon and text aligned" style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
          }}>
            <Link className="logo" to="/" >
              <Typography variant="h2" className="logo_text">
                Brand
              </Typography>
            </Link>
            </div>}
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 'medium'}}
        /></ListItem></List>
        <Divider />
        <List divider='true' className="home_button">
        <ListItem onClick={() => setOpenDrawer(false)}>
        <ListItemText
          primary={
            <Link to="/">
              <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
          }}>
              <HomeIcon color="primary"/>
              <span>Home</span></div>
            </Link>
            }
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 'medium'}}
        /></ListItem></List>
        <Divider />
        <List divider='true' className="Info_section">
        <ListItemText
          primary={
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
          }}>
            <InfoIcon 
            color="primary" 
            fontSize="small"
            />
            <span>Brand</span>
            </div>}
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 'medium'
          }}
        />
        <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            <Link to="/" className={classes.link}>
            about us</Link>
          </ListItemText>
       </ListItem>
       <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            <Link to="/" className={classes.link}>
            announcements</Link>
          </ListItemText>
       </ListItem>
       <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            <Link to="/" className={classes.link}>
            Rules</Link>
          </ListItemText>
       </ListItem>
         {/*<ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          */} 
        </List>
        <div className={classes.bottomPush}>
        <TheFooter/>
        </div>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
      <MenuIcon />
    </IconButton>
  </>
  );
}
export default DrawerComponent;