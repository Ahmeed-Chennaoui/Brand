import React,{useState} from 'react'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import { Badge, ClickAwayListener } from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Paper } from '@mui/material';


function Navbar() {
  const [showNotifications,setShowNotofications]= useState(false);
  const [notifications,setNotifications]= useState(5);
  return (
    <div className='navbar_container'>
        <div className="logo" >
            <div className="logo_text">
                Brand
            </div>
        </div>
        <div className="searchbar_container">
        <SearchIcon fontSize='large' color='primary'/>
        <input type="text" placeholder='Search ...' className='searchbar'/>
        </div>
        <div className="dropdown">

        <div className='dropdown_btn' onClick={()=>setShowNotofications(!showNotifications)}>
                    <Badge badgeContent={notifications} color="red" overlap="circular" className='badge' >
                        <NotificationsOutlinedIcon className='icon'  fontSize='inherit' />
                    </Badge>
        </div>
        {showNotifications && <ClickAwayListener onClickAway={()=>setShowNotofications(false)}>
                      <Paper elevation={3} sx={{position:"absolute",right:0,marginTop:"13px",width:"30vw",height:"70vh",borderRadius:"5%",maxWidth:"500px",minWidth:"300px",padding:'20px'}}>
                        <div className='dropdown_menu_top' onClick={()=>setNotifications(0)}> 
                        Mark as all read
                        </div>
                      </Paper>
                    </ClickAwayListener>}
        </div>
        
    </div>
  )
}

export default Navbar