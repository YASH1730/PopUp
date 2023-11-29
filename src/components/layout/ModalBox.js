import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../feature/ModalBoxReducers';

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

export default function ModalBox({content}) {
    const state = useSelector(state=>state.ModalBox)

    const dispatch = useDispatch();

    function handleClose() {
        dispatch(openModal(false))
    }

  return (
    <div>
      <Modal
        open={state.open}
        onClose={handleClose}
      >
        <Box sx={style}>
          {content}
        </Box>
      </Modal>
    </div>
  );
}