import React from 'react';
import './SearchVideo.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SearchVideo = ({image, title, channel, subs, views, timeStamp, des}) => {
    return (
        <div className="search__video">
         <img src={image} alt="" />
         <div className="searchVideo__text">
             <h3>{title}</h3>
             <p className="headlines">
                 {channel} . <span className="subs__highlight"><span className="subs__color">{subs}</span> Subscribers</span> . {views} views . {timeStamp}
             </p>
             <p className="description">{des}</p>
         </div>
            
        </div>
    );
};

export default SearchVideo;