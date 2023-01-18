import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchData } from '../../api/fetchAPI';
import Videos from '../Videos';


const SearchFeed = () => {
    const [videos,setVideos] = useState([])
    const param = useParams();
    const {searchTerm} = param

    useEffect(() => {
      fetchData(`search?part=snippet&q=${searchTerm}`)
      .then((data)=> setVideos(data.items))
    }, [searchTerm])
    
  return (
    <Box p={2}
        sx={{overflowY:'auto',
        height:'90vh',flex:2}}>
        <Typography variant='h4'
        fontWeight="bold" 
        mb={2}
        sx={{color:'white'}}>
           search result for:
            <Typography fontWeight="bold" variant='h4' component='span' sx={{color:'#F31503'}}> {searchTerm} </Typography>
            videos
            </Typography>
            <Videos videos={videos}/>
            </Box>
  )
}

export default SearchFeed


