import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        Detalhes
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <CardMedia
        component="img"
        height='50%'
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <IconButton id="demo-customized-button" aria-controls={open ? 'demo-customized-menu' : undefined} aria-expanded={open ? 'true' : undefined} onClick={handleClose} aria-label="more" sx={{position: 'absolute', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', right:'0'}}>
            <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <Typography gutterBottom>
            Produto
          </Typography>
        <Typography variant="body2" color="text.secondary">
            Detalhes do produto
          </Typography>
          <Divider></Divider>
          <Typography gutterBottom>
            Marca
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Detalhes da marca
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}