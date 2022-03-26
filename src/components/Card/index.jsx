import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import ModalDetails from '../ModalDetails';
import ModalEdit from '../ModalEdit';
import PropTypes from 'prop-types';

MediaCard.propTypes = {
  productInfos: PropTypes.array
}

export default function MediaCard(props) {
  const { productInfos } = props;
  return (
    <div>
      <Card sx={{ minWidth: 400, position: 'relative', minHeight:100}}>
      <ModalEdit productInfos={productInfos}></ModalEdit>
        <CardMedia
          component="img"
          height="200"
          image={productInfos.thumb}
          alt="green iguana"
        />
        <CardActions>
        <ModalDetails productInfos={productInfos}></ModalDetails>
          
          
        </CardActions>
        
      </Card>
    </div>
  );
}