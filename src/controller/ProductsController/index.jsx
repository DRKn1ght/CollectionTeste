import React from 'react';

import ProductsView from '../../view/ProductsView';

export default function ProductsViewController() {
    const handleEditClick = (event) => {
        console.log("Editar")
    };

    const handleDesactiveClick = (event) => {
        console.log("Desativar")
    };

    const handleDetailsClick = (event) => {
        console.log("Detalhes")
    };

    return (
        <ProductsView
            handleEditClick={() => { handleEditClick() }}
            handleDesactiveClick={() => { handleDesactiveClick() }}
            handleDetailsClick={() => { handleDetailsClick()}} />
    )
}
