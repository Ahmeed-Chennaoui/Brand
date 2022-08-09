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
import CloseIcon from '@mui/icons-material/Close';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function DrawerComponent() {
    const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
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
            <div className="Icon_text" >
            <Link underline="none" className="logo Icon_text" to="/" >
              <LocalShippingIcon className="logo_img"/>
              <Typography variant="h6" className="logo_text">
                Brand
              </Typography>
            </Link>
            <IconButton onClick={() => setOpenDrawer(openDrawer)}>
              <CloseIcon />
            </IconButton>
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
              <div className="Icon_text" >
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
            <div className="Icon_text">
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
            <Link to="/" className="link">
            about us</Link>
          </ListItemText>
       </ListItem>
       <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            <Link to="/" className="link">
            announcements</Link>
          </ListItemText>
       </ListItem>
       <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            <Link to="/" className="link">
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
        <div className="bottomPush">
        <TheFooter/>
        </div>
    
    </Drawer>
    { !openDrawer ?(<>
    <IconButton className="menu_button" onClick={() => setOpenDrawer(!openDrawer)}>
      <MenuIcon />
    </IconButton>
    <Link underline="none" className="logo Icon_text" to="/" >
        <LocalShippingIcon className="logo_img"/>
        <Typography variant="h6" className="logo_text">
          Brand
        </Typography>
    </Link></> 
      ) : (
      <></>)}
  </React.Fragment>
  );
}
export default DrawerComponent;