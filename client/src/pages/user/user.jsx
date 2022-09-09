import React from 'react'
import Nav from '../../components/Nav';
import { Avatar, Stack, Divider, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';

//list
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import SendIcon from '@mui/icons-material/Send';
import WorkIcon from '@mui/icons-material/Work';
import StarBorder from '@mui/icons-material/StarBorder';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
//image list
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {useState} from 'react';
import RatingMin from "./RatingMin";
import "./user.scss"
import backend from "../../APIs/backend";
const axios = require('axios');
function StandardImageList() {
  return (
    <ImageList sx={{ width: 600, height: 500 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

//


function NestedList() {
  const [open, setOpen] = React.useState(true);
  const [photoisShown, setphotoIsShown] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClicke = event => {
    setphotoIsShown(!photoisShown);
    
  };
  const [workisShown, setworkIsShown] = useState(false);
  const handleClickee = event => {
    setworkIsShown(!workisShown);
  };
  const [rateisShown, setrateIsShown] = useState(false);
  const handleClickeee = event => {
    setrateIsShown(!rateisShown);
  };
  const [mailisShown, setmailIsShown] = useState(false);
  const handleClic = event => {
    setmailIsShown(!mailisShown);
  };
  const [inputs, setInputs] = useState({});
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [error, setError] = useState("");
  
  
  return (
    <div>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Contact and Data
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClic}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
        {mailisShown && <a href="mailto:max.karimhmidi@example.com?body=My custom mail body">E-Mail to Karim Hmidi</a>}
      </ListItemButton>
      
      <ListItemButton onClick={handleClicke}>
      <ListItemAvatar >
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItemButton>
      <div className='imagelist'>
         {photoisShown && <StandardImageList/>}
         
      </div>
      <ListItemButton onClick={handleClick && handleClickee}>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
        {workisShown && <p>Available in 5 days</p>}
      </ListItemButton>
      
      <ListItemButton >
        <ListItemAvatar>
          <Avatar>
          <LocalPhoneIcon/>
          </Avatar> 
        </ListItemAvatar>
        <ListItemText primary="52902018" secondary="All days" />
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" >
          <ListItemButton sx={{ pl: 4 }} onClick={handleClickeee}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Rate the job" />
          </ListItemButton>
          <center>{rateisShown && <RatingMin />}</center>
        </List>
      </Collapse>
    </List>
   
    { 
    !photoisShown &&<div className='right'>
               <table>
                   <tr >
                       <h2>Profession :  </h2>
                       <p>response.data.title</p>
                   </tr>
                   
                     </table>
                         <br/><hr></hr><br/>
                         <table>
                            <tr>
                              <h2>Desciption:</h2>
                            </tr>
                            <tr>
                               <pre><p>response.data.description</p></pre>
                            </tr>
                          </table>
    </div> }
 </div>
  );
}

//
function Profile(){
  
  return(
    <>
        <Card>
  <Box sx={{ p: 2, display: 'flex' }}>
    <table>
      <tr>
        <th><Avatar variant="rounded" src="" /></th>
        <th>
           <Stack spacing={0.5}>
           <Typography fontWeight={700}>Karim hmidi</Typography>
           <Typography variant="body2" color="text.secondary">
             Tunisie, Ariana
           </Typography>
    </Stack>
        </th>
      </tr>
    </table>
    
    
    <IconButton sx={{ fontSize: 14 }}>
      
    </IconButton>
  </Box>
  <Divider />
  
</Card>
    </>
  )
}
function User() {
  return (<>
      <Nav/>
    <div className='user_container'>
       <Profile/>
       <div className='left'><NestedList/></div>
          
          
     </div>
    </>
  )
}

export default User