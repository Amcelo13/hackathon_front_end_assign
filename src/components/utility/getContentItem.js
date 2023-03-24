import { Grid, Stack, Typography } from "@mui/material";
import {  Link } from "react-router-dom";
import getAge from "./getAge";

const imageStyling = {
  height: "130px",
  width: "130px",
  objectFit: "cover",
  borderRadius: "25px",
};

export default function getContentItem({ item, key }) {
  return (
    <Grid key={key} item xs={4}>

      <Link to={"/submission/" + item.id}  //redirect to its submission with the its id concatenated
        style={{ textDecoration: "none", color: "#111" }}
      >
        <Stack
          spacing={3}
          borderRadius={5}
          height={"300px"}
          bgcolor="#fff"
          p={3}
          boxShadow={"20px 20px 50px #cbcbcb, -30px -30px 60px #ffffff"}>

          <Stack direction={"row"} spacing={2} alignItems="center" >
            <img style={imageStyling} src={item.image.url} />
            <Typography textTransform={"capitalize"} variant="h5" sx={{fontWeight:'700',fontFamily:'Poppins' }}>{item.title}</Typography>
          </Stack>

          <Typography>{item.summary}</Typography>
          <div style={{marginLeft:'7rem'}}>
          <Typography sx={{color:'gray', fontSize:'14px'}}>{getAge(item.uploadTime)}</Typography>
          </div>
        </Stack>
      </Link>

    </Grid>
  );
}
