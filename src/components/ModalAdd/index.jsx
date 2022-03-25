import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import ComboBox from '@mui/material/Autocomplete';
import CardMedia from '@mui/material/CardMedia';
import Brands from '../../data/brands'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DefaultImage from '../../assets/PortobelloDefault.webp';

export default function ModalEdit() {
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
            <Fab color="primary" style={{ position: 'fixed', bottom: 16, right: 16 }} aria-label={"Adicionar"} onClick={handleModalOpen}>
                {<AddIcon />}
            </Fab>
            <Dialog open={openModal}>
                <IconButton height='50%' sx={{ position: 'absolute', color: 'white', backgroundColor: 'rgba(0, 0, 0, .4)', left: '45%', bottom: "75%", verticalAlign: 'middle' }}>
                    <EditIcon />
                </IconButton>
                <CardMedia
                    component="img"
                    height='50%'
                    image={DefaultImage}
                    alt="Default Image"
                />
                <DialogContent dividers>
                    <TextField
                        id="product-description"
                        label="Descrição do produto"
                        multiline
                        sx={{ width: '100%', marginTop: 2 }}
                        maxRows={4}
                        value={value}
                        onChange={handleChange}
                    />

                    <ComboBox
                        id="product-brand"
                        options={Brands}
                        sx={{ width: '100%', marginTop: 2 }}
                        renderInput={(params) => <TextField {...params} label="Marca" />}
                    />

                    <ComboBox
                        id="product-status"
                        options={['Ativo', 'Inativo']}
                        sx={{ width: '100%', marginTop: 2 }}
                        renderInput={(params) => <TextField {...params} label="Status do produto" />}
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