import React from 'react';

import ProductsView from '../../view/ProductsView';

export default function ProductsViewController() {
    const [newProductValues, setNewProductValues] = React.useState({
        thumb: "",
        description: "",
        brand: "",
        active: true,
    })

    const handleNewProductSubmit = async () => {
        const { thumb, description, brand, active } = newProductValues;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ thumb, description, brand, active })
        };
        try{
            fetch('http://127.0.0.1:5000/api/products/add', requestOptions)
        }catch{
            console.log("algo deu errado");
        }
    }

    const handleChangeFieldNewProduct = (e, field) => {
        let updatedValue = {};
        updatedValue[field] = e.target.value;
        setNewProductValues(newProductValues => ({
        ...newProductValues,
        ...updatedValue
        }));
        console.log(newProductValues);
    }

    const [productList, setProductList] = React.useState([]);
    React.useEffect(() => {
        Promise.all([
            fetch(`http://127.0.0.1:5000/api/products`),
        ]).then(async (responses) => {
            const [productResponse] = responses;
            if (productResponse.status === 404) {
                setProductList({ error: 'Não há produtos!' });
                return;
            }

            const products = await productResponse.json();
            setProductList(products);
            console.log(products);
        });
    }, productList);

    const [brandList, setBrandList] = React.useState([]);
    React.useEffect(() => {
        Promise.all([
            fetch(`http://127.0.0.1:5000/api/brands`),
        ]).then(async (responses) => {
            const [brandResponse] = responses;

            if (brandResponse.status === 404) {
                setBrandList({ error: 'Não há marcas!' });
                return;
            }

            const brands = await brandResponse.json();
            setBrandList(brands.map((data) => [{ label: data.Name, isSelected: false }]));
        });
    }, brandList);

    const handleInsertClick = (event) => {
        console.log("adicionar")
    };

    return (
        <ProductsView
            newProductValues={newProductValues}
            setNewProductValues={setNewProductValues}
            handleNewProductSubmit={handleNewProductSubmit}
            handleChangeFieldNewProduct={handleChangeFieldNewProduct}
            productList={productList}
            brandList={brandList}
            handleInsertClick={() => { handleInsertClick() }} />
    )
}