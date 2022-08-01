import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Sidebar.scss'
import Element from './Element';
import Badge from '@mui/material/Badge';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';



function Sidebar() {
    let navigate = useNavigate();

  return (
    <div className='sidebar_container'>
        <div className="logo">
            <div className="logo_text">
                Brand
            </div>
        </div>
        <hr />
        <div className="options">
        

            <ul>
                <p className="title">MAIN</p>
                <hr />
               
                <Element callback={()=>navigate("dashboard")}>
                    <DashboardOutlinedIcon className='icon' />
                    <span className='option_text'>Dashboard</span>
                </Element>
                
                <Element>
                    <Badge badgeContent={5} color="primary" className='badge_container'>
                        <NotificationsOutlinedIcon className='icon'/>
                    </Badge>
                    <span className='option_text'>Notifications</span>
                </Element>
                <hr />
                <p className="title">USERS</p>
                <hr />

                <Element>
                    <Badge badgeContent={9} color="primary">
                        <VerifiedUserOutlinedIcon className='icon'/>
                    </Badge>
                    <span className='option_text'>Verification requests</span>
                </Element>
                <Element>
                    <Badge badgeContent={9} color="primary">
                        <OutlinedFlagIcon className='icon'/>
                    </Badge>
                    <span className='option_text'>Reported users</span>
                </Element>
                <hr />
                <p className="title">HISTORY</p>
                <hr />

                <Element>
                    <TrendingUpIcon className='icon'/>
                    <span className='option_text'>Stats</span>
                </Element>
                <Element>
                    <ManageHistoryIcon className='icon'/>
                    <span className='option_text'>Logs</span>
                </Element>
                <hr />
                <p className="title">SETTINGS</p>
                <hr />
                
                <Element>
                    < AdminPanelSettingsOutlinedIcon className='icon'/>
                    <span className='option_text'>Settings</span>
                </Element>
               
                <Element>
                    < LogoutOutlinedIcon className='icon'/>
                    <span className='option_text'>Logout</span>
                </Element>
            </ul>
        </div>
        


    </div>
  )
}

export default Sidebar