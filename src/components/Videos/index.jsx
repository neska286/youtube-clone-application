import { Box, Stack } from '@mui/material'
import React from 'react'
import ChannelCard from '../ChannelCard';
import Loader from '../Loader';
import VideoCard from '../VideoCard';

const Videos = ({videos , direction}) => {
    console.log('videos',videos);
    if(!videos?.length) return <Loader />;
  return (
    <Stack direction={direction || "row"}
     flexWrap="wrap"
    justifyContent="start"
    gap={2}>
        {videos.map((item, indx)=>{
        return (
            <Box key={indx}>
            {item.id.videoId && <VideoCard item={item}/>}
            {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
        )})}

    </Stack>
  )
}

export default Videos