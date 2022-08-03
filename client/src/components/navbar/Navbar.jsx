import React,{useState} from 'react'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import { Badge, ClickAwayListener } from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Paper } from '@mui/material';


function Navbar() {
  const [notifications,setNotofications]= useState(false);
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

        <div className='dropdown_btn' onClick={()=>setNotofications(!notifications)}>
                    <Badge badgeContent={5} color="orange" overlap="circular" className='badge' >
                        <NotificationsOutlinedIcon className='icon'  fontSize='inherit' />
                    </Badge>
        </div>
        {notifications && <ClickAwayListener onClickAway={()=>setNotofications(false)} className="dropdown_menu">
                      <Paper elevation={1} sx={{position:"absolute",right:0,marginTop:"13px",width:"30vw",height:"70vh",borderRadius:"5%",maxWidth:"500px",minWidth:"300px"}}>
                        aaa
                      </Paper>
                    </ClickAwayListener>}
        </div>
        
    </div>
  )
}

export default Navbar