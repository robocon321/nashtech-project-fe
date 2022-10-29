import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const RequiredLoginModal = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Require login
          </Typography>
          <br />
          <Button variant="contained" color="success" onClick={() => navigate('/sign-in')}>Login</Button>
          {' '}
          <Button variant="contained" color="error" onClick={props.toggleModal}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default RequiredLoginModal;