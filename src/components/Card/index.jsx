import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import ModalDetails from '../ModalDetails';
import ModalEdit from '../ModalEdit';
import PropTypes from 'prop-types';

MediaCard.propTypes = {
  productInfos: PropTypes.object,
  handleEditProductSubmit: PropTypes.func,
  handleInactivateProduct: PropTypes.func,
  productEditStatus: PropTypes.number,
  brandList: PropTypes.array,
}

export default function MediaCard(props) {
  const { 
    productInfos, 
    handleEditProductSubmit, 
    productEditStatus, 
    brandList, 
    handleInactivateProduct } = props;
    
  return (
    <div>
      <Card sx={{ minWidth: 400, position: 'relative', minHeight: 100 }}>
        <ModalEdit
          productEditStatus={productEditStatus}
          handleInactivateProduct={handleInactivateProduct}
          productInfos={productInfos}
          handleEditProductSubmit={handleEditProductSubmit}
        />
        <CardMedia
          component="img"
          height="200"
          image={productInfos.thumb}
          alt="product image"
        />
        <CardActions>
          <ModalDetails
            productInfos={productInfos}
            brandList={brandList}
          />
        </CardActions>

      </Card>
    </div>
  );
}