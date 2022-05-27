import * as React from 'react';
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute' as 'absolute',
  top: '24px',
  left: '50%',
  transform: 'translate(-50%, 0)',
  bgcolor: '#fff',
  borderRadius: '2px',
  boxShadow: 24,
  p: 4,
};

interface IProps {
  children?: React.ReactNode;
}

export const DynamicModal: React.FC<IProps> = ({ children }) => {
  const [open, setOpen] = useState(false)

  useEffect(function autoShowModal() {
    setOpen(true)
  }, [])

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} style={{padding: 24}}>
        {children}
      </Box>
    </Modal>
  )
}