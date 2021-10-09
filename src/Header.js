import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" className="header-logo" />

            </div>
            <div className="header__search">
                <input type="text" />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className="header__icons">
                <VideoCallIcon className='header__icon' />
                <AppsIcon className='header__icon'/>
                <NotificationsIcon className='header__icon'/>
                <AccountCircleIcon className='header__icon'/>
            </div>
            
             
        </div>
    )
}

export default Header
