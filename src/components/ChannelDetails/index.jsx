import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../../api/fetchAPI'
import ChannelCard from '../ChannelCard'
import Videos from '../Videos'


const ChannelDetails = () => {
  const [videosData, setVideosData] = useState(null);
  const[channelDetail, setChannelDetail] = useState(null)
  const param = useParams();
  const { id } = param;

  useEffect(()=>{
    fetchData(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]))
    fetchData(`search?channelId=${id}&part=snippet%2Cid&order=date`)  
    .then((data) => setVideosData(data?.items))
  },[id])
  return (
    <Box minHeight="95vh">
    <Box>
      <div style={{
        height:'300px',
        background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
        zIndex: 10,
      }} />
      <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
    </Box>
    <Box p={2} display="flex">
    <Box sx={{ mr: { sm: '100px' } }}/>
      <Videos videos={videosData} />
    </Box>
  </Box>
  )
}

export default ChannelDetails