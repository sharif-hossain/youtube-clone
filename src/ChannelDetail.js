import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedIcon from '@mui/icons-material/Verified';
import './ChannelDetail.css';

const ChannelDetail = ({channel, verified, subs, noOfVideos, description}) => {
    return (
        <div className="channel__detail"> 
            <AccountCircleIcon className="channel__logo"/>
            <div className="channelDetail__text">
                <h4>{channel} {verified && <VerifiedIcon/>}</h4>
                <p>{subs} subscribers . {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
            
        </div>
    );
};

export default ChannelDetail;