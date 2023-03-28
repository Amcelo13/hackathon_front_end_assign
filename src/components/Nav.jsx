import React from 'react'
import { Box, Stack} from "@mui/material";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <Stack sx={{paddingTop:'0.5rem'}} width="100vw" direction={"row"} bgcolor={"#fff"} p={"2px 120px"}   >
      <Link to="/"> 
          <img  style= {{height:"25px", width:"auto",}} src="/assets/AI Planet Logo.png" alt="" />
      </Link>
    </Stack>
  )
}

export default Nav
