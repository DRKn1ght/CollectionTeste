import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ComboBox from '@mui/material/Autocomplete';
import CardMedia from '@mui/material/CardMedia';
import Brands from '../../data/brands'
import PropTypes from 'prop-types';

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

ModalEdit.propTypes = {
    productInfos: PropTypes.array
  }

export default function ModalEdit(props) {
    const { productInfos } = props;
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

    const [value, setValue] = React.useState();
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div>
            <IconButton aria-controls={open ? 'menu' : null} aria-expanded={open ? 'true' : null} onClick={handleClickMenu} aria-label="more" sx={{ position: 'absolute', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', right: '0' }}>
                <MoreVertIcon />
            </IconButton>
            <Dialog open={openModal}>
            <IconButton sx={{ position: 'absolute', color: 'white', backgroundColor: 'rgba(0, 0, 0, .4)', verticalAlign: 'middle' }}>
                <EditIcon />
            </IconButton>
                <CardMedia
                    component="img"
                    height='50%'
                    image={productInfos.thumb}
                />
                <DialogContent dividers>
                    <TextField
                        id="product-id"
                        InputProps={{
                            readOnly: true,
                        }}
                        sx={{ width: '100%', marginTop: 2 }}
                        label="ID do produto"
                        defaultValue={productInfos._id}
                        multiline
                        onChange={handleChange}
                    />

                    <TextField
                        id="product-description"
                        label="Descrição do produto"
                        multiline
                        sx={{ width: '100%', marginTop: 2 }}
                        maxRows={4}
                        defaultValue={productInfos.description}
                        value={value}
                        onChange={handleChange}
                    />

                    <ComboBox
                        id="product-brand"
                        options={Brands}
                        sx={{ width: '100%', marginTop: 2 }}
                        defaultValue={productInfos.brand}
                        renderInput={(params) => <TextField {...params} label="Marca" />}
                    />

                    <TextField
                        id="product-active"
                        InputProps={{
                            readOnly: true,
                        }}
                        sx={{ width: '100%', marginTop: 2 }}
                        label="Status do produto"
                        defaultValue={productInfos.active ? "Ativo" : "Inativo"}
                        multiline
                        onChange={handleChange}
                    />

                    <TextField
                        id="product-inactive-date"
                        InputProps={{
                            readOnly: true,
                        }}
                        sx={{ width: '100%', marginTop: 2 }}
                        label="Data de inativação"
                        defaultValue={productInfos.inactivate_date === undefined ? "O produto está ativo" : productInfos.inactivate_date}
                        multiline
                        onChange={handleChange}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModalClose}>Cancelar</Button>
                    <Button onClick={handleModalClose}>Confirmar mudanças</Button>
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