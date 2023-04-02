import React from 'react'
import { Box, Container, CssBaseline, Typography ,Button, createTheme} from "@mui/material";
import './bt.css'
import { useNavigate } from 'react-router-dom';


function Banner() {
const navigate = useNavigate()

function handleNavigate(){
  navigate('add')
}
  return (
    <header style= {{
      backgroundSize : "initial",
      backgroundImage: `url("./assets/waves.png")`,
      backgroundColor:'#003145',
      paddingBottom:'0.5rem',
      position:'relative',
      width:'100%',
      backgroundPositionX: -200,
      marginBottom:'0.9rem'
    }}>
      {/* Bulb Image */}
      <img
        src="./assets/Hand holding bulb 3D.png"
        alt="Commented Image"
        style={{
          position: 'absolute', 
          top: 60,
          right:120,
          zIndex: 1,
          width: '110px',
          // marginBottom:'30rem'
        }}
      />

      <Typography sx={{pt:'4rem', fontSize: 28,height:'10px' ,pl:'100px',
        color:'white', fontWeight:'bold', fontFamily:'Poppins',marginBottom:'1rem'}} 
        variant="h1" >Hackathon Submissions</Typography>
      <Typography sx={{pt:'3rem', fontSize: 12,fontFamily:'Poppins',
        color:'white', pl:'100px',lineHeight:'1rem',fontWeight:'lighter'}} gutterBottom> 
        lorem30 aew wqe wew weqwewqe
        qeweqw eqwewq we er wr wqe qw ew q wqe wq ew eq wewer w w e   wqe e w w e w e qeweqw <br/>
        wer  we we w  qwe  wed sa as asdsa  asd dc  as s aas  as sa d sad sa das d as qsd dd e we r f e r t rt  rt er w xassasasaaddr essacas   <br/>saasbha
        jsbacha d hdvwd dwdghw w dgs 
      </Typography>
    
      {/* Upload button  */}
      <button id="up_sub" onClick={handleNavigate}> Upload Submission </button>
    </header>
  )
}

export default Banner