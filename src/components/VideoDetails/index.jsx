import {Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { fetchData } from '../../api/fetchAPI';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Videos from '../Videos';
import Loader from '../Loader';

const VideoDetails = () => {
  const param = useParams();
  const[videoDetail, setVideoDetail]=useState(null)
  const [videos, setVideos] = useState(null);
  const { id } = param;
  console.log('videoDetail',videoDetail);

  useEffect(() => {
    if (id) fetchData(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=> setVideoDetail(data.items[0]))
    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);
 
  if(!videoDetail?.snippet) return <Loader/>
  return (
    <Box minHeight="95vh">
    <Stack
    sx={{flexDirection:{sx: "column", md:"row"}}}>
      <Box flex={1}>
        <Box sx={{
          width:'100%',
          position:'sticky',
          top:'86px'
        }}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>{videoDetail?.snippet?.title}</Typography>
          <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
              <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff">
                {videoDetail?.snippet?.channelTitle}
                <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
              </Typography>
            </Link>
            <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant='body1' sx={{opacity:0.7}}>
                {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()}
              </Typography>
              <Typography variant='body1' sx={{opacity:0.7}}>
                {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()}
              </Typography>

            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
     <Videos videos={videos} direction="column" />
    </Box>

 
    </Stack>
    </Box>
  )
}

export default VideoDetails