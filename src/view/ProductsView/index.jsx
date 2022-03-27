import React from 'react';
import './styles.css';
import Card from '../../components/Card';
import Grid from '@mui/material/Grid';
import FilterChip from '../../components/FilterChips'
import Typography from '@mui/material/Typography';
import ModalAdd from '../../components/ModalAdd';
import FilterTextField from '../../components/FilteTextField';

export default function ProductsView(props) {
    const { handleNewProductSubmit, handleEditProductSubmit, brandList, productSubmitStatus, productEditStatus, handleFilterProduct, productToShow, handleFilterProductByBrand, handleInactivateProduct} = props;
    return (
        <div className='container'>
            <div className='main'>
                <div className='left-side'>
                    <FilterTextField handleFilterProduct={handleFilterProduct} ></FilterTextField>
                    <Typography paddingLeft={2} gutterBottom>
                        Filtros:
                    </Typography>
                    <FilterChip brandList={brandList} handleFilterProductByBrand={handleFilterProductByBrand} productList={productToShow}></FilterChip>
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
                        {productToShow.map(productInfos => (
                            <Card
                                key={productInfos._id}
                                productInfos={productInfos}
                                handleEditProductSubmit={handleEditProductSubmit}
                                handleInactivateProduct={handleInactivateProduct}
                                productEditStatus={productEditStatus}
                                brandList={brandList}
                                >
                            </Card>
                        ))}
                    </Grid>
                </div>
            </div>
            <ModalAdd
                handleNewProductSubmit={handleNewProductSubmit}
                productSubmitStatus={productSubmitStatus} />
        </div>
    )
}