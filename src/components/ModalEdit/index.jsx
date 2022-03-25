import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        minWidth: 100,
    },
}));

export default function ModalEdit() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const [openModal, setOpenModal] = React.useState(false);
    const handleModalOpen = () => {
        setOpenModal(true);
    };
    const handleModalClose = () => {
        setOpenModal(false);
    };

    const [value, setValue] = React.useState('Este é o produto X');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div>
            <IconButton aria-controls={open ? 'menu' : null} aria-expanded={open ? 'true' : null} onClick={handleClickMenu} aria-label="more" sx={{ position: 'absolute', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', right: '0' }}>
                <MoreVertIcon />
            </IconButton>
            <Dialog open={openModal}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModalClose}>Cancel</Button>
                    <Button onClick={handleModalClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
            <StyledMenu
                id="menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenu}>
                <MenuItem onClick={() => { handleModalOpen(); handleCloseMenu() }} disableRipple>
                    <EditIcon />
                    Editar
                </MenuItem>
                <MenuItem onClick={() => { handleCloseMenu() }} disableRipple>
                    <ToggleOffOutlinedIcon />
                    Inativar
                </MenuItem>
            </StyledMenu>
        </div>
    );
}