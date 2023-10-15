import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import './Header.css';

function Header() {
    return (<div className="header">
        <div className="header_left">
            <MenuIcon />
            <img className="youtube_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
        </div>
        
        <div className="header_mid">
            <input placeholder="Search" type="text"></input>
            <SearchIcon className="header_searchButton" />
        </div>

        <div className="header_icons">
            <VideoCallIcon className="header_icon" />
            <AppsIcon className="header_icon" />
            <NotificationsIcon className="header_icon" />
            <Avatar className="avatar_icon" alt="Avatar" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
        </div>

    </div>
    )
}

export default Header;