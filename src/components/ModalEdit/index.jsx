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
import DialogURL from '../DialogURL';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
    productInfos: PropTypes.object,
    handleEditProductSubmit: PropTypes.func,
    productEditStatus: PropTypes.number,
    handleInactivateProduct: PropTypes.func
}

export default function ModalEdit(props) {
    const { productInfos, handleEditProductSubmit, productEditStatus, handleInactivateProduct } = props;
    console.log(productEditStatus)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [showAlert, setShowAlert] = React.useState(false);
    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setShowAlert(false);
    };

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

    const [imageURL, setImageURL] = React.useState(productInfos.thumb)


    const [newProductValues, setNewProductValues] = React.useState({
        _id: productInfos._id,
        thumb: productInfos.thumb,
        description: productInfos.description,
        brand: productInfos.brand,
        active: productInfos.active,
    })

    const handleChangeFieldNewProduct = (value, field) => {
        let updatedValue = {};
        updatedValue[field] = value;
        setNewProductValues(newProductValues => ({
            ...newProductValues,
            ...updatedValue
        }));
        console.log(newProductValues)
    }

    const handleChangeImage = (url) => {
        setImageURL(url);
        handleChangeFieldNewProduct(url, "thumb");
    }

    const handleInactivateClick = () => {
        handleInactivateProduct(newProductValues)
        handleCloseMenu();
    }

    const handleSubmitClick = () => {
        setShowAlert(true);
        handleModalClose()
    }

    return (
        <div>
            <IconButton aria-controls={open ? 'menu' : null} aria-expanded={open ? 'true' : null} onClick={handleClickMenu} aria-label="more" sx={{ position: 'absolute', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', right: '0' }}>
                <MoreVertIcon />
            </IconButton>
            <Dialog open={openModal}>
                <DialogURL handleChangeImage={handleChangeImage} handleChangeFieldNewProduct={handleChangeFieldNewProduct}></DialogURL>
                <CardMedia
                    component="img"
                    height='50%'
                    image={imageURL}
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
                    />

                    <TextField
                        id="product-description"
                        label="Descrição do produto"
                        multiline
                        sx={{ width: '100%', marginTop: 2 }}
                        maxRows={4}
                        defaultValue={productInfos.description}
                        onChange={(e) => handleChangeFieldNewProduct(e.target.value, "description")}
                    />

                    <ComboBox
                        id="product-brand"
                        options={Brands}
                        sx={{ width: '100%', marginTop: 2 }}
                        renderInput={(params) => <TextField {...params} label="Marca" />}
                        defaultValue={productInfos.brand}
                        onChange={(event, value) => handleChangeFieldNewProduct(value.label, "brand")}
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
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModalClose}>Cancelar</Button>
                    <Button onClick={() => { handleEditProductSubmit(newProductValues); handleSubmitClick() }}>Confirmar mudanças</Button>
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
                <MenuItem onClick={() => { handleInactivateClick() }} disableRipple>
                    <ToggleOffOutlinedIcon />
                    Inativar
                </MenuItem>
            </StyledMenu>
            <Snackbar open={showAlert} onClose={handleAlertClose} autoHideDuration={3000}>
                {productEditStatus === 201 ?
                    <Alert severity="success">Produto editado com sucesso!</Alert> : <Alert severity="error">Ocorreu um erro ao editar o produto!</Alert>}
            </Snackbar>
        </div>
    );
}