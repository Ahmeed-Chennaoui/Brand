import React from 'react'
import Nav from '../../components/Nav';
import { Avatar, Stack, Divider, IconButton,Chip,Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';

//list
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import SendIcon from '@mui/icons-material/Send';
import WorkIcon from '@mui/icons-material/Work';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
//image list
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {useState} from 'react';
function StandardImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
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
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClicke = event => {
    setIsShown(!isShown);
  };
  return (
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
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
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
        {/* 👇️ show component on click */}
        {isShown && <StandardImageList/>}
      </div>
      <ListItemButton onClick={handleClick}>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
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
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
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
       <table>
        <tr>
          <th width="40%"><NestedList/></th>
          <th>  
               <center><table>
                   <tr>
                       <th><h2>Profession :  </h2></th>
                   </tr>
                   <tr><center><p>Engineer</p></center></tr>
               </table></center>
               <br/><hr></hr><br/>
               <table>
                   <tr>
                       <h2>Desciption</h2>
                  </tr>
                  <tr>
                     <p>Développer, intégrer et actualiser les logiciels adaptés à l'organisation de l'entreprise, mais aussi assurer la maintenance du système. On les trouve dans les entreprises et dans les sociétés de services informatiques (SSII)</p>
                  </tr>
               </table>
               
          </th>
        </tr>
       </table>
     </div>
    </>
  )
}

export default User