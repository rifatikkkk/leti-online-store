import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../redux/slice/productSlice';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import axios from '../utils/axios.js'
import MetaData from '../components/MetaData.js';

const ProductsPage = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state?.products);
    const { isAuthenticated } = useSelector((state) => state?.user);
    const [condition, setCondition] = useState('Необходимо авторизоваться');
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    let editProducts = [...products]

    const searchProduct = async (findText) => {
        try {
            editProducts = await (await axios.get(`/product/?keyword=${findText}`)).data.products
            console.log(editProducts)
            setSearchResult(editProducts)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        dispatch(getProduct());
        isAuthenticated == true ? setCondition('В корзину') : setCondition('Необходимо авторизоваться');
        // searchProduct()
        console.log(searchText)
        searchProduct(searchText)
    }, [dispatch, isAuthenticated, searchText])

    return (
        <Fragment>
            <MetaData title='Товары' />
            <Header />
            <div className="wrapper">
                <div className="products-section">
                    <input className='products-input' placeholder='Поиск...' type='text' value={searchText} onChange={(e) => setSearchText(e.target.value)} ></input>
                    <div className="products-container">
                        {searchResult && searchResult.map(product => {
                            if (product.stock >= 1) {
                                return (
                                    <ProductItem product={product} condition={condition} />
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default ProductsPage