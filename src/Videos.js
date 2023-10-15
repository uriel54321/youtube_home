import React from 'react';
import './Videos.css';
import VideoCard from './VideoCard.js';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


function Videos() {


  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
 
  return (
    
    <div className='videos'>
      <div className='category'>
        <Stack direction="row" spacing={1}>
        <Chip className="selected" label="All" color="primary" onClick={handleClick} />
        <Chip label="Music" onClick={handleClick} />
        <Chip label="Technology" onClick={handleClick} />
        
        </Stack>
    </div>
      
        <h2>Videos</h2>
        <div className='videoElements'>
          <VideoCard
          title="Circles Live"
          views="2.3M Views"
          timestamp="2 days ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="Post Malone"
          image="https://i.ytimg.com/vi/oCcks-fwq2c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGnkdEgNxDHnBYpizhSCXTOeKGGA"
          />
          <VideoCard
          title="21 New Web Features"
          views="886k Views"
          timestamp="1 Hour Ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="Hello World"
          image="https://i.ytimg.com/vi/q1fsBWLpYW4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXo-3lI0nE-rVU85ia7Z06biFsJQ"
          />
          <VideoCard
          title="Anime MHA"
          views="20k Views"
          timestamp="3 days ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="Hello World"
          image="https://i.ytimg.com/vi/60B3gqAPVII/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6B1bX0zPJHJAzCA8iKZrmyIr1nA"
          />
          <VideoCard
          title="Work and Jazz"
          views="2M Views"
          timestamp="2 days ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="The Music Channel"
          image="https://i.ytimg.com/vi/SuN-Vlz04RU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgtKuw0aHnvHBWd69UjY32b4qAug"
          />
          <VideoCard
          title="Help you focus"
          views="1M Views"
          timestamp="2 days ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="The Focus Channel"
          image="https://i.ytimg.com/vi/4kLviL8XwAI/hq720_live.jpg?sqp=CICsmakG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5lJ183OAVs3JMIpu4I-TdtUPedQ"
          />
          <VideoCard
          title="Study with me for 5 Hours"
          views="15K Views"
          timestamp="2 days ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="Study Tips"
          image="https://i.ytimg.com/vi/dXVltYviNEM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUTU4cWOKDecwZUts-JTvZVTJecg"
          />
          <VideoCard
          title="Lambda Tutorial"
          views="3M Views"
          timestamp="5 days ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="Lambda simplified"
          image="https://i.ytimg.com/vi/3Ar1ABlD_Vs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuOb7OUvMEgpudxrZZZfzS1nzNpA"
          />
          <VideoCard
          title="Code Splitting"
          views="15M Views"
          timestamp="1 month ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="React Channel"
          image="https://i.ytimg.com/vi/7kNLXE0hixM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCA8Rc_0pMR67VFzE3iovpAe4aMMg"
          />
          <VideoCard
          title="Spy X Family"
          views="1M Views"
          timestamp="26 days ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="The Anime World"
          image="https://i.ytimg.com/vi/DXiywPWDnqA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAynW4V1cKKNKQbcuFwUyF8RHGtmA"
          />
          <VideoCard
          title="How to create a simple form"
          views="2.3M w"
          timestamp="2 days ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="Forms for you"
          image="https://i.ytimg.com/vi/zdWfyBXO2iU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvY9ejQTaME3J-p2fnMxe60Tcb4w"
          />
          <VideoCard
          title="Circles Live"
          views="2.3M Views"
          timestamp="2 days ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="Post Malone"
          image="https://i.ytimg.com/vi/oCcks-fwq2c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGnkdEgNxDHnBYpizhSCXTOeKGGA"
          />
          <VideoCard
          title="21 New Web Features"
          views="886k Views"
          timestamp="1 Hour Ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="Hello World"
          image="https://i.ytimg.com/vi/q1fsBWLpYW4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXo-3lI0nE-rVU85ia7Z06biFsJQ"
          />
          <VideoCard
          title="Anime MHA"
          views="20k Views"
          timestamp="3 days ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="Hello World"
          image="https://i.ytimg.com/vi/60B3gqAPVII/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6B1bX0zPJHJAzCA8iKZrmyIr1nA"
          />
          <VideoCard
          title="Work and Jazz"
          views="2M Views"
          timestamp="2 days ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="The Music Channel"
          image="https://i.ytimg.com/vi/SuN-Vlz04RU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgtKuw0aHnvHBWd69UjY32b4qAug"
          />
          <VideoCard
          title="Help you focus"
          views="1M Views"
          timestamp="2 days ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="The Focus Channel"
          image="https://i.ytimg.com/vi/4kLviL8XwAI/hq720_live.jpg?sqp=CICsmakG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5lJ183OAVs3JMIpu4I-TdtUPedQ"
          />
          <VideoCard
          title="Study with me for 5 Hours"
          views="15K Views"
          timestamp="2 days ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="Study Tips"
          image="https://i.ytimg.com/vi/dXVltYviNEM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUTU4cWOKDecwZUts-JTvZVTJecg"
          />
          <VideoCard
          title="Lambda Tutorial"
          views="3M Views"
          timestamp="5 days ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="Lambda simplified"
          image="https://i.ytimg.com/vi/3Ar1ABlD_Vs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuOb7OUvMEgpudxrZZZfzS1nzNpA"
          />
          <VideoCard
          title="Code Splitting"
          views="15M Views"
          timestamp="1 month ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="React Channel"
          image="https://i.ytimg.com/vi/7kNLXE0hixM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCA8Rc_0pMR67VFzE3iovpAe4aMMg"
          />
          <VideoCard
          title="Spy X Family"
          views="1M Views"
          timestamp="26 days ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="The Anime World"
          image="https://i.ytimg.com/vi/DXiywPWDnqA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAynW4V1cKKNKQbcuFwUyF8RHGtmA"
          />
          <VideoCard
          title="How to create a simple form"
          views="2.3M w"
          timestamp="2 days ago"
          channelImage="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          channel="Forms for you"
          image="https://i.ytimg.com/vi/zdWfyBXO2iU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvY9ejQTaME3J-p2fnMxe60Tcb4w"
          />
          

        </div>
    </div>
  );
}

export default Videos;