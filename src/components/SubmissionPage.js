import { Button, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import getSubmissions from "./utility/getSubmissions";
import Nav from "./Nav";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  borderRadius: "20px",
  p: 4,
  opacity: 1,
};
const style1 = {
  color: "white",
  backgroundColor: "red",
  borderRadius: "0.5rem",
};
const imageStyling = {
  height: "130px",
  width: "130px",
  objectFit: "cover",
  borderRadius: "25px",
};

export default function SubmissionPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let navigate = useNavigate();
  let { id } = useParams();
  let item = getItem();
  if (!item) return "Invalid Submission";

  return (
    <Stack
      spacing={0}
      borderRadius={5}
      height={"300px"}
      bgcolor="#fff"
      boxShadow={"20px 20px 50px #cbcbcb, -30px -30px 60px #ffffff"}
    >
      <Nav />
      <Stack
        bgcolor="#003145"
        color="#fff"
        direction={"row"}
        spacing={3}
        alignItems="center"
        p="50px 100px"
        justifyContent={"space-between"}
      >
        <Stack spacing={3}>
          <Stack direction="row" spacing={3} alignItems="center">
            <img style={imageStyling} src={item.image.url} />
            <Typography textTransform={"capitalize"} variant="h3">
              {item.title}
            </Typography>
          </Stack>
          <Typography>{item.summary}</Typography>

          <Stack direction="row" alignItems={"center"}>
            <Button
              onClick={makeLike}
              startIcon={item.liked ? <StarIcon /> : <StarBorderIcon />}
            ></Button>

            <Typography
              sx={{
                backgroundColor: "#255973",
                p: "5px",
                paddingLeft:'10px',
                paddingRight:'10px',
                borderRadius: "1rem",
                fontSize: "15",
              }}
            >
              <CalendarTodayIcon
                sx={{ fontSize: "0.9rem", pt: "0.1rem" }}
              ></CalendarTodayIcon>{" "}
              {parseDate(item.uploadTime)}
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={5}>
          <Link to={"/edit/" + id} style={{ textDecoration: "none" }}>
         <Button
              sx={{
                border: "1px solid white",
                fontWeight: "600",
                padding: "8px 30px",
                color: "#fff",
                borderRadius: "12px",
              }}
              variant="outlined"
            >
   <EditIcon style={{color:'white',fontSize:'16px'}}/>  &nbsp;

 E <span style={{ textTransform: "lowercase" }}>dit</span>
            </Button>
          </Link>

          <Button
            sx={{
              border: "1px solid white",
              fontWeight: "600",
              padding: "8px 23px",
              color: "#fff",
              borderRadius: "12px",
            }}
            variant="outlined"
            onClick={() => {
              handleOpen();
            }}
          >
              <DeleteIcon style={{color:'white',fontSize:'16px'}}/>  &nbsp;
            D<span style={{ textTransform: "lowercase" }}>elete</span>
          </Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                sx={{ fontWeight: "550", marginBottom: "0.8rem" }}
                variant="h5"
              >
                {" "}
                Delete model
              </Typography>
              <Typography sx={{ marginBottom: "1rem" }}>
                {" "}
                This action is irreversible. Are you sure you want to delete
                this model?
              </Typography>
              <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                <Button
                  onClick={() => makeDelete()}
                  id="modal-modal-description"
                  style={style1}
                >
                  D<span style={{ textTransform: "lowerCase" }}>elete</span>
                </Button>
                <Button
                  onClick={handleClose}
                  id="modal-modal-title"
                  component="h2"
                  style={{
                    borderRadius: "0.5rem",
                    color: "black",
                    backgroundColor: "transparent",
                    border: "1.1px solid black",
                    marginRight: "10px",
                  }}
                >
                  C<span style={{ textTransform: "lowerCase" }}>ancel</span>
                </Button>
              </div>
            </Box>
          </Modal>
        </Stack>
      </Stack>

      <Stack
        mt="50px"
        p="20px 100px"
        direction={"row"}
        justifyContent="space-between"
      >
        <Stack spacing={3} sx={{ width: "750px" }}>
          <Typography variant="h4">Description</Typography>
          <Typography>{item.description}</Typography>
        </Stack>

        <Stack spacing={2}>
          <Typography sx={{ opacity: 0.5 }} variant="h6">
            Hackathon
          </Typography>
          <Typography variant="h5">Oceanic Treasure Hunt</Typography>
          <Typography sx={{ opacity: 0.5 }}>
            {parseDate(item.startdatevalue)} - {parseDate(item.enddatevalue)}
          </Typography>

          <Link to={item.git} style={{ textDecoration: "none" }}>
            <Button
              sx={{ padding: "10px 25px", color: "#111", borderRadius: "15px" }}
              variant="outlined"
              startIcon={<GitHubIcon />}
            >
              Github
            </Button>
          </Link>

          <Link to={item.other} style={{ textDecoration: "none" }}>
            <Button
              startIcon={<LaunchIcon />}
              sx={{ padding: "10px 25px", color: "#111", borderRadius: "15px" }}
              variant="outlined"
            >
              Other Link
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );

  function getItem() {
    let subs = getSubmissions();
    for (let sub of subs) {
      if (sub.id == id) return sub;
    }

    return null;
  }

  function makeDelete() {
    console.log("editt....");

    let items = getSubmissions();

    let i = null;
    items.map((itm, index) => {
      if (itm.id == id) {
        i = index;
      }
    });

    console.log(id);

    if (i !== null) {
      console.log(i);
      items.splice(i, 1);
      localStorage.setItem("submissions", JSON.stringify(items));
      navigate("/");
    }
  }

  function parseDate(str) {
    let date = new Date(str);
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${date.getDate()} ${months[date.getMonth()]}`;
  }

  function makeLike() {
    let submissions = getSubmissions();

    for (let itm of submissions) {
      if (itm.id == id) {
        if (itm.liked) {
          itm.liked = false;
        } else {
          itm.liked = true;
        }
      }
    }

    localStorage.setItem("submissions", JSON.stringify(submissions));
    window.location.reload();
  }
}
