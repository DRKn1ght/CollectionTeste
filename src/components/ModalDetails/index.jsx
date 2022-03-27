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
import PropTypes from 'prop-types';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

ModalDetails.propTypes = {
  productInfos: PropTypes.object,
  brandList: PropTypes.array,
}

export default function ModalDetails(props) {
  const { productInfos, brandList } = props;
  const [open, setOpen] = React.useState(false);
  if (brandList.length === 0){
    return null
  }
  const brandInfos = brandList.find((brands) => brands.Name === productInfos.brand)
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
        image={productInfos.thumb}
      />
      <IconButton id="demo-customized-button" aria-controls={open ? 'demo-customized-menu' : undefined} aria-expanded={open ? 'true' : undefined} onClick={handleClose} aria-label="more" sx={{position: 'absolute', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', right:'0'}}>
            <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <Typography variant="body2" color="text.secondary">
            {productInfos.description}
          </Typography>
          <Divider></Divider>
          <Typography gutterBottom marginTop={2}>
            {brandInfos.Name}
          </Typography>
            <Typography variant="body2" color="text.secondary">
            {brandInfos.Description}
            </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}