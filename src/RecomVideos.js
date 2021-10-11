import React from 'react';
import './RecomVideos.css';
import VideoCard from './VideoCard';

const RecomVideos = () => {
    const iframe1 = '<iframe width="350" height="215" src="https://www.youtube.com/embed/RG9TMn1FJzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    return (
        <div className='recom__videos'>
            <h2>Recommanded</h2>
            <div className="recomVideo__info">
                <VideoCard
                    title='The incredible ibex defies gravity and climbs a dam | Forces of Nature with Brian Cox - BBC'
                    views='3.5M Views'
                    timeStamp='1 year ago'
                    channelImage=''
                    channel='BBC World'
                    image='http://img.youtube.com/vi/RG9TMn1FJzc/hqdefault.jpg'
                />

                <VideoCard
                    title='Incredible Teamwork From Little Clownfish | Blue Planet II'
                    views='3.5M Views'
                    timeStamp='1 year ago'
                    channelImage=''
                    channel='BBC World'
                    image='https://img.youtube.com/vi/WWlDa7CA_5w/maxresdefault.jpg'

                />
                <VideoCard
                    title='Why Are These Fish Beaching Themselves? | BBC Earth'
                    views='2.5M Views'
                    timeStamp='2 year ago'
                    channelImage=''
                    channel='BBC Earth'
                    image='http://img.youtube.com/vi/q5DsVVurRQ8/maxresdefault.jpg'

                />
                <VideoCard
                    title='Polar Bear Cubs Taking Their First Steps | Planet Earth | BBC Earth'
                    views='6.5M Views'
                    timeStamp='2 year ago'
                    channelImage=''
                    channel='BBC Earth'
                    image='http://img.youtube.com/vi/N8JD_P2J24g/maxresdefault.jpg'
                />
                <VideoCard
                    title='Three Cheetahs Vs Ostrich | Life | BBC Earth'
                    views='10M Views'
                    timeStamp='3 year ago'
                    channelImage=''
                    channel='BBC Earth'
                    image='http://img.youtube.com/vi/pkhE14Rou-E/maxresdefault.jpg'
                />
                <VideoCard
                    title='Incredible Teamwork From Little Clownfish | Blue Planet II'
                    views='3.5M Views'
                    timeStamp='1 year ago'
                    channelImage=''
                    channel='BBC World'
                    image='https://img.youtube.com/vi/WWlDa7CA_5w/maxresdefault.jpg' />

                <VideoCard
                    title='Polar Bear Cubs Taking Their First Steps | Planet Earth | BBC Earth'
                    views='6.5M Views'
                    timeStamp='2 year ago'
                    channelImage=''
                    channel='BBC Earth'
                    image='http://img.youtube.com/vi/N8JD_P2J24g/maxresdefault.jpg'
                />

                <VideoCard
                    title='Incredible Teamwork From Little Clownfish | Blue Planet II'
                    views='3.5M Views'
                    timeStamp='1 year ago'
                    channelImage=''
                    channel='BBC World'
                    image='https://img.youtube.com/vi/WWlDa7CA_5w/maxresdefault.jpg' />

                <VideoCard
                    title='Polar Bear Cubs Taking Their First Steps | Planet Earth | BBC Earth'
                    views='6.5M Views'
                    timeStamp='2 year ago'
                    channelImage=''
                    channel='BBC Earth'
                    image='http://img.youtube.com/vi/N8JD_P2J24g/maxresdefault.jpg'
                />
            </div>

        </div>
    );
};

export default RecomVideos;