import React from 'react';

import ProductsView from '../../view/ProductsView';

export default function ProductsViewController() {
    const [productList, setProductList] = React.useState([]);
    const [productToShow, setProductToShow] = React.useState([])
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
            setProductToShow(products);

        });
    }, []);

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
            setBrandList(brands);
            console.log(brands)
        });
    }, []);

    const [productSubmitStatus, setProductSubmitStatus] = React.useState();
    const handleNewProductSubmit = async (newProductValues) => {
        if (!newProductValues) {
            setProductSubmitStatus(0);
            return;
        }
        const { thumb, description, brand, active, inactivate_date } = newProductValues;
        if (!thumb | !description | !brand) {
            console.log("preencha todos os valores")
            setProductSubmitStatus(0);
            return;
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ thumb, description, brand, active, inactivate_date })
        };
        try {
            fetch('http://127.0.0.1:5000/api/products/add', requestOptions).then(res => {
                setProductSubmitStatus(res.status);
                if (res.status === 201) {
                    res.json().then(productInfos => {
                        if (productInfos.active) { // Se for adicionado um produto inativo, não atualiza a lista de produtos.
                            setProductList([
                                ...productList,
                                productInfos,
                            ])
                            setProductToShow([
                                ...productToShow,
                                productInfos,
                            ])
                        }
                    })
                }
            })
        } catch {
            console.log("algo deu errado");
        }
    }

    const [productEditStatus, setProductEditStatus] = React.useState();
    const handleEditProductSubmit = async (newProductValues) => {
        if (!newProductValues) {
            return;
        }
        const { _id, thumb, description, brand, active } = newProductValues;
        if (!thumb | !description | !brand | !active) {
            console.log("preencha todos os valores")
            return;
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ _id, thumb, description, brand, active })
        };
        try {
            fetch('http://127.0.0.1:5000/api/products/edit', requestOptions).then(res => {
                setProductEditStatus(res.status);
                if (res.status === 201) {
                    res.json().then(productInfos => {
                        let newProductList = productList.map(data => (
                            data._id === productInfos._id ? productInfos : data
                        ))
                        setProductList(newProductList);
                        setProductToShow(newProductList);
                    })
                }
            })
        } catch {
            console.log("algo deu errado");
        }
    }

    const handleInactivateProduct = async (productID) => {
        if (!productID) {
            return;
        }
        const { _id, thumb, description, brand, active } = productID;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ _id })
        };
        try {
            fetch('http://127.0.0.1:5000/api/products/setInactive', requestOptions).then(res => {
                setProductEditStatus(res.status);
                if (res.status === 201) {
                    res.json().then(productInfos => {
                        let newProductList = productList.filter(data => (data._id !== productInfos._id));
                        setProductList(newProductList);
                        setProductToShow(newProductList);
                    })
                }
            })
        } catch {
            console.log("algo deu errado");
        }
    }

    const handleFilterProduct = (filterQuery) => {
        console.log(filterQuery)
        if (!filterQuery) {
            setProductToShow(productList);
        } else {
            let filteredProduct = productList.filter(product => product.description.includes(filterQuery))
            setProductToShow(filteredProduct)
        }
    }

    const handleFilterProductByBrand = (filterList) => {
        if (filterList.length === 0) {
            setProductToShow(productList)
        } else {
            let filteredProduct = productList.filter(product => filterList.includes(product.brand));
            setProductToShow(filteredProduct)
        }
    }

    return (
        <ProductsView
            brandList={brandList}
            handleNewProductSubmit={handleNewProductSubmit}
            handleEditProductSubmit={handleEditProductSubmit}
            productToShow={productToShow}
            productSubmitStatus={productSubmitStatus}
            productEditStatus={productEditStatus}
            handleFilterProduct={handleFilterProduct}
            handleFilterProductByBrand={handleFilterProductByBrand}
            handleInactivateProduct={handleInactivateProduct} />
    )
}