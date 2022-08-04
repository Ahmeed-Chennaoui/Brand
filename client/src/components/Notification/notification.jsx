import React, { useState } from "react"
import "./notification.scss"
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton
} from "@mui/material";

function Notification () {
  const [showNotifications,setShowNotofications]= useState(false);
  return (
  <div>
    <Drawer 
    anchor="right"
    className="dropdown_notification" 
    open={showNotifications}  
    onClose={() => setShowNotofications(false)}  
    >
      <div> 
          Mark as all read
        </div>
        <List>
        <ListItem onClick={() => setShowNotofications(false)}>
          <ListItemText>
            Message Text
          </ListItemText>
       </ListItem>
       </List>
    </Drawer>
    <IconButton onClick={() => setShowNotofications(!showNotifications)}>
      <NotificationsOutlinedIcon className='icon'  fontSize='inherit' />
    </IconButton>
  </div>
  )
}
export default Notification;