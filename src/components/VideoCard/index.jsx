import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../../utils/constants';

const VideoCard = ({item}) => {
    console.log('item',item);
  return (
   <Card sx={{width:{ xs:'100%',sm:'358px',md:'320px'}}}>
    <Link to={item.videoId ? `/video/${item.videoId}`: demoVideoUrl}>
    <CardMedia 
    image={item.snippet?.thumbnails?.high?.url}
    alt={item.snippet?.title}
    sx={{width:{xs:'100%',sm:'358px',md:'320px'}, height:180}}/>
    </Link>
    <CardContent
    sx={{backgroundColor:'#1e1e1e',
    height:'106px'}}>
        <Link to={item.videoId ? `/video/${item.videoId}`: demoVideoUrl}>
        <Typography variant='subtitle1'
        fontWeight="bold"
        color="#FFF">
            {item.snippet?.title.slice(0,60)
            || demoVideoTitle.slice(0,60)}
        </Typography>
        </Link>

        <Link to={item.snippet?.channelId ? `/video/${item.snippet?.channelId}`: demoChannelUrl}>
        <Typography variant='subtitle2'
        fontWeight="bold"
        color="gray">
            {item.snippet?.channelTitle.slice(0,60)
            || demoChannelTitle.slice(0,60)}
              <CheckCircleIcon sx={{
            fontSize:12, color:'gray',ml:'5px'
        }}/>
        </Typography>
      
        </Link>

    </CardContent>
   </Card>
  )
}

export default VideoCard


