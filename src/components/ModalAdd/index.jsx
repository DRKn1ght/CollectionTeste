import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ComboBox from '@mui/material/Autocomplete';
import CardMedia from '@mui/material/CardMedia';
import Brands from '../../data/brands'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DefaultImage from '../../assets/PortobelloDefault.webp';
import PropTypes from 'prop-types';
import DialogURL from '../DialogURL';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

ModalAdd.protoType = {
    handleNewProductSubmit: PropTypes.func,
    productSubmitStatus: PropTypes.number
}

export default function ModalAdd(props) {
    const { 
        handleNewProductSubmit, 
        productSubmitStatus } = props
        
    const [showAlert, setShowAlert] = React.useState(false);
    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setShowAlert(false);
    };

    const [newProductValues, setNewProductValues] = React.useState({
        thumb: DefaultImage,
        description: "",
        brand: "",
        active: false,
    })

    const handleChangeFieldNewProduct = (value, field) => {
        if (field === "active") {
            if (value === "Ativo") {
                value = true
            } else {
                value = false
            }
        }
        let updatedValue = {};
        updatedValue[field] = value;
        setNewProductValues(newProductValues => ({
            ...newProductValues,
            ...updatedValue
        }));
        console.log(newProductValues)
    }

    const [imageURL, setImageURL] = React.useState(DefaultImage)
    const [openModal, setOpenModal] = React.useState(false);
    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setNewProductValues({
            thumb: DefaultImage,
            description: "",
            brand: "",
            active: false,
        });
        setImageURL(DefaultImage)
        setOpenModal(false);
    };

    const handleSubmit = () => {
        setShowAlert(true);
        handleModalClose();
    }

    const handleChangeImage = (url) => {
        setImageURL(url);
        handleChangeFieldNewProduct(url, "thumb");
    }

    return (
        <div>
            <Fab
                color="primary"
                style={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16
                }}
                aria-label={"Adicionar"}
                onClick={handleModalOpen}>
                {<AddIcon />}
            </Fab>
            <Dialog open={openModal}>
                <DialogURL 
                handleChangeFieldNewProduct={handleChangeFieldNewProduct}
                 handleChangeImage={handleChangeImage} 
                 />
                <CardMedia
                    component="img"
                    height='50%'
                    image={imageURL}
                    alt="Default Image"
                />
                <DialogContent dividers>
                    <TextField
                        id="product-description"
                        label="Descrição do produto"
                        multiline
                        sx={{ width: '100%', marginTop: 2 }}
                        maxRows={4}
                        onChange={(e) => handleChangeFieldNewProduct(e.target.value, "description")}
                    />

                    <ComboBox
                        id="product-brand"
                        options={Brands}
                        sx={{ width: '100%', marginTop: 2 }}
                        renderInput={(params) => <TextField {...params} label="Marca" />}
                        onChange={(event, value) => handleChangeFieldNewProduct(value.label, "brand")}
                    />

                    <ComboBox
                        id="product-status"
                        options={['Ativo', 'Inativo']}
                        sx={{ width: '100%', marginTop: 2 }}
                        renderInput={(params) => <TextField {...params} label="Status do produto" />}
                        onChange={(event, value) => handleChangeFieldNewProduct(value, "active")}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModalClose}>Cancelar</Button>
                    <Button onClick={() => { handleNewProductSubmit(newProductValues); handleSubmit() }}>Adicionar produto</Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={showAlert} onClose={handleAlertClose} autoHideDuration={3000}>
                {productSubmitStatus === 201 
                ? <Alert severity="success">Produto adicionado com sucesso!</Alert> 
                : <Alert severity="error">Ocorreu um erro ao adicionar o produto!</Alert>}
            </Snackbar>
        </div>
    );
}