
import { IconButton, Paper, Stack } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {logo} from '../../utils/constants'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate();
 function handleSubmit(e){
  e.preventDefault()
  if(searchTerm){
  navigate(`/search/${searchTerm}`)
  setSearchTerm('')
  }
 }
   
  return (
    <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{position:'sticky',background:'#000', top:0 , justifyContent:'space-between'}}>
        <Link to="/">
            <img src={logo} alt="logo" height={45} />
        </Link>
        <Paper component="form"
        sx={{borderRadius:20,
        border:'1px solid #e3e3e3',
        pl:2,
        boxShadow:'none',
        mr:{sm:5}}}
        onClick={handleSubmit}>
       <input
       className='search-bar'
       placeholder='Search...'
       value={searchTerm}
       onChange={(e)=>{setSearchTerm(e.target.value)}}/>
       <IconButton type="submit"
       sx={{p:'10px',color:'red'}}>
        <SearchIcon/>
       </IconButton>
        </Paper>
    </Stack>
  )
}

export default Navbar