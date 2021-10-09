import React from 'react';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SidebarRow from './SidebarRow';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarRow selected Icon={HomeIcon} title='Home'/>
            <SidebarRow Icon={WhatshotIcon} title='Trending'/>
            <SidebarRow Icon={SubscriptionsIcon} title='Subscription'/>
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title='Library'/>
            <SidebarRow Icon={OndemandVideoIcon} title='Your video'/>
            <SidebarRow Icon={HistoryIcon} title='History'/>
            <SidebarRow Icon={WatchLaterIcon} title='Watch later'/>
            <SidebarRow Icon={ThumbUpAltIcon} title='Liked video'/>
            <SidebarRow Icon={ExpandMoreIcon} title='Show More'/>
            <hr />
        </div>
    );
};

export default Sidebar;