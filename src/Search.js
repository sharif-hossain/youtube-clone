import React from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import './Search.css';
import ChannelDetail from './ChannelDetail';
import SearchVideo from './SearchVideo';

const Search = () => {
    return (
        <div className="search">
            <div className="search__filter">
                <TuneIcon/>
                <h2>FILTER</h2>
            </div>
            <hr />
          
            <ChannelDetail
            channel="Sharif Hossain"
            verified
            subs="100K"
            noOfVideos={50}
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi aliquid exercitationem ea quaerat aut vitae ab illum aspernatur sed culpa doloremque incidunt soluta illo, error cumque provident deleniti obcaecati ad!"
            />
            <hr />

            <SearchVideo
               title='Three Cheetahs Vs Ostrich | Life | BBC Earth'
               views='10M Views'
               timeStamp='3 year ago'
               subs="500K"
               channelImage=''
               channel='BBC Earth'
               des='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
               image='http://img.youtube.com/vi/pkhE14Rou-E/maxresdefault.jpg'
            />


            <SearchVideo
               title='Polar Bear Cubs Taking Their First Steps | Planet Earth | BBC Earth'
               views='6.5M Views'
               timeStamp='2 year ago'
               channelImage=''
               subs="233K"
               channel='BBC Earth'
               des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure atque minus ut possimus. Amet fugit accusamus aliquam ad. Numquam nobis sed alias minus incidunt! Dolore ab libero adipisci nulla alias.'
               image='http://img.youtube.com/vi/N8JD_P2J24g/maxresdefault.jpg'
            />

            <SearchVideo
               title='Incredible Teamwork From Little Clownfish | Blue Planet II'
               views='3.5M Views'
               timeStamp='1 year ago'
               subs="122K"
               channelImage=''
               channel='BBC World'
               des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure atque minus ut possimus. Amet fugit accusamus aliquam ad. Numquam nobis sed alias minus incidunt! Dolore ab libero adipisci nulla alias.'
               image='https://img.youtube.com/vi/WWlDa7CA_5w/maxresdefault.jpg' 
            />

            <SearchVideo
             title='The incredible ibex defies gravity and climbs a dam | Forces of Nature with Brian Cox - BBC'
             views='3.5M Views'
             timeStamp='1 year ago'
             subs="342K"
             channelImage=''
             channel='BBC World'
             des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure atque minus ut possimus. Amet fugit accusamus aliquam ad. Numquam nobis sed alias minus incidunt! Dolore ab libero adipisci nulla alias.'
             image='http://img.youtube.com/vi/RG9TMn1FJzc/hqdefault.jpg'
         
            />
            
        </div>
    );
};

export default Search;