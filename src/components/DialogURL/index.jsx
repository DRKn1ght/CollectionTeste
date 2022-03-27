import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';

DialogURL.protoType = {
    handleChangeFieldNewProduct: PropTypes.func,
    handleChangeImage: PropTypes.func
}

export default function DialogURL(props) {
    const { 
        handleChangeFieldNewProduct, 
        handleChangeImage } = props;
        
    const [imageURL, setImageURL] = React.useState();
    const handleChange = (event) => {
        setImageURL(event.target.value);
    };

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickSend = () => {
        handleChangeImage(imageURL);
        setOpen(false);
    }

    return (
        <div>
            <IconButton
                height='50%'
                onClick={handleClickOpen}
                sx={{
                    position: 'absolute',
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, .4)',
                    left: '45%',
                    bottom: "75%",
                    verticalAlign: 'middle'
                }}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Imagem do produto</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Insira a URL de uma imagem:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Image-URL"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={(e) => { handleChangeFieldNewProduct(e, "thumb"); handleClickSend() }}>Enviar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}