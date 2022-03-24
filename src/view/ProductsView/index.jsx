import React from 'react';
import './styles.css';
import Card from '../../components/Card';
import Grid from '@mui/material/Grid';

export default function ProductsView() {
    return (
        <div className='Main'>
            <Grid
                paddingLeft={10}
                paddingTop={2} 
                container 
                rowSpacing={1} 
                rowGap={2}
                columnGap={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                {[1, 2, 3, 4, 5].map(n => (
                    <Card></Card>
                ))}
            </Grid>
        </div>
    )
}