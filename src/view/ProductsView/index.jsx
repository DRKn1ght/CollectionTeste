import React from 'react';
import './styles.css';
import Card from '../../components/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FilterChip from '../../components/FilterChips'
import Typography from '@mui/material/Typography';

export default function ProductsView(props) {
    const { handleEditClick, handleDesactiveClick, handleDetailsClick } = props;
    //console.log(openModalDetails);
    return (
        <div className='container'>
            <div className='main'>
                <div className='left-side'>
                    <TextField style={{ marginLeft: 10, marginTop: 2, minWidth: 210 }} id="standard-basic" placeholder='Pesquisar por produtos' variant="standard"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>
                        }}>
                    </TextField>
                    <Typography paddingLeft={2} gutterBottom>
                        Filtros:
                    </Typography>
                    <FilterChip></FilterChip>
                </div>
                <div className='right-side'>
                    <Grid
                        paddingTop={2}
                        paddingLeft={5}
                        container
                        rowSpacing={1}
                        rowGap={2}
                        columnGap={2}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        {[1, 2, 3, 4, 5].map(n => (
                            <Card ></Card>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    )
}