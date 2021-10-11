import React from 'react';
import './VideoCard.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const VideoCard = ({ image, title, channel, views, timeStamp, channelImage }) => {
    return (
        <div className='videoCard'>
            <img className='videoCard__Thumbnail' src={image} alt="" />
            <div className="videoCard__info">
                <AccountCircleIcon className="avatar"/>
                <div className="videoCard__text">
                    <h4 className="text__wrap">{title}</h4>
                    <p>{channel}</p>
                    <p>{views} . {timeStamp}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;