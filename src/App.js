import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Box from '@mui/material/Box'
import {ChannelDetails, Feed, Navbar, SearchFeed, VideoDetails} from './components';


const App = ()=>(
  <BrowserRouter>
  <Box sx={{backgroundColor:'#000'}}>
    <Navbar/>
    <Routes>
      <Route path="/" exact element ={<Feed/>}/>
      <Route path="/video/:id"  element ={<VideoDetails/>}/>
      <Route path="/channel/:id"  element ={<ChannelDetails/>}/>
      <Route path="/search/:searchTerm"  element ={<SearchFeed/>}/>
    </Routes>
  </Box>
  
  </BrowserRouter>
)

export default App;
