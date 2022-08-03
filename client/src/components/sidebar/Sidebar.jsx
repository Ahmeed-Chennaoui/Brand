import React from 'react'
import './Sidebar.scss'
import Element from './Element';
import Badge from '@mui/material/Badge';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';



function Sidebar() {

  return (
    <div className='sidebar_container' >
        <hr />
        <div className="options">
        

            <ul>
                <p className="title">MAIN</p>
                <hr />
               
                <Element goTo="dashboard">
                    <DashboardOutlinedIcon className='icon' />
                    <span className='option_text'>Dashboard</span>
                </Element>
                <hr />
                <p className="title">USERS</p>
                <hr />
                <Element>
                    <Badge badgeContent={11} max={9} color="primary">
                        <WorkOutlineOutlinedIcon className='icon'/>
                    </Badge>
                    <span className='option_text'>Job listings</span>
                </Element>

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