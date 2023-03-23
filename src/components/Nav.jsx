import React from 'react'
import { Box} from "@mui/material";
import { useNavigate } from 'react-router-dom';

function Nav() {

  return (
    <Box sx={{height:'10vh', ml:'5rem' ,mb:'1rem', pb:'5px'}} >
          <img  style= {{cursor:'pointer',paddingTop:'11px', marginLeft:'2.4rem'}} src="./assets/AI Planet Logo.png" alt="" />
        </Box>
  )
}

export default Nav