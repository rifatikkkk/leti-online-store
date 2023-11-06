import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../redux/slice/productSlice';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';

const ProductsPage = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const { isAuthenticated } = useSelector((state) => state.user);
    const [condition, setCondition] = useState('Необходимо авторизоваться');

    useEffect(() => {
        dispatch(getProduct());
        isAuthenticated == true ? setCondition('В корзину') : setCondition('Необходимо авторизоваться');
    }, [dispatch, isAuthenticated])

    return (
        <Fragment>
            <Header />
            <div className="wrapper">
                <div className="products-section">
                    <div className="products-container">
                        {products && products.map(product => {
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