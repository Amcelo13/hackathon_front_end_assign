import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  borderRadius:'20px',
  p: 4,
};
const style1 = {
  color:'white',
  backgroundColor:'red',
}

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button style={{backgroundColor:'transparent'}}onClick={handleOpen}>Delete</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography sx={{fontWeight:'600', marginBottom:'0.8rem'}}variant="h5"> Delete model</Typography>
       <Typography sx= {{marginBottom:'1rem'}} > This action is irreversible. Are you sure you want to delete this model?</Typography>
       <div style={{display:'flex', flexDirection:'row-reverse'}}>

          <Button  onClick={handleClose} id="modal-modal-title" component="h2" style={{ color:'gray', backgroundColor:'transparent', }}>
            Cancel
          </Button>
          <Button id="modal-modal-description" style={style1} >
            Delete
          </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
