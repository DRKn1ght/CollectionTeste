import React from 'react';

import ProductsView from '../../view/ProductsView';

export default function ProductsViewController() {
    const handleInsertClick = (event) => {
        console.log("adicionar")
    };

    return (
        <ProductsView
            handleInsertClick={() => { handleInsertClick() }}/>
    )
}
