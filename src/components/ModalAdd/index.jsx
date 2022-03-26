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
import DialogURL from '../DialogURL'

ModalAdd.protoType = {
    newProductValues: PropTypes.func,
    setNewProductValues: PropTypes.func,
    handleNewProductSubmit: PropTypes.func,
    handleChangeFieldNewProduct: PropTypes.func
}

export default function ModalAdd(props) {
    const { newProductValues, setNewProductValues, handleNewProductSubmit, handleChangeFieldNewProduct } = props;
    const [imageURL, setImageURL] = React.useState(DefaultImage)
    const [openModal, setOpenModal] = React.useState(false);
    const handleModalOpen = () => {
        setOpenModal(true);
    };
    const handleModalClose = () => {
        setOpenModal(false);
    };

    const handleChangeImage = (url) =>{
        setImageURL(url);
    }

    return (
        <div>
            <Fab color="primary" style={{ position: 'fixed', bottom: 16, right: 16 }} aria-label={"Adicionar"} onClick={handleModalOpen}>
                {<AddIcon />}
            </Fab>
            <Dialog open={openModal}>
                <DialogURL handleChangeFieldNewProduct={handleChangeFieldNewProduct} handleChangeImage={handleChangeImage}/>
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
                        onChange={(e) => {handleChangeFieldNewProduct(e, "description")}}
                    />

                    <ComboBox
                        id="product-brand"
                        options={Brands}
                        sx={{ width: '100%', marginTop: 2 }}
                        renderInput={(params) => <TextField {...params} label="Marca" />}
                        onChange={(e) => {handleChangeFieldNewProduct(e, "brand")}}
                    />

                    <ComboBox
                        id="product-status"
                        options={['Ativo', 'Inativo']}
                        sx={{ width: '100%', marginTop: 2 }}
                        renderInput={(params) => <TextField {...params} label="Status do produto" />}
                        onChange={(e) => {handleChangeFieldNewProduct(e, "active")}}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModalClose}>Cancelar</Button>
                    <Button onClick={handleModalClose}>Adicionar produto</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}