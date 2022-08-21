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

function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
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
      <ListItemButton>
      <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
      <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
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
    <Avatar variant="rounded" src="avatar1.jpg" />
    <Stack spacing={0.5}>
      <Typography fontWeight={700}>Michael Scott</Typography>
      <Typography variant="body2" color="text.secondary">
       Scranton, PA
      </Typography>
    </Stack>
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
       <NestedList/>
       
      
    </div>
    </>
  )
}

export default User