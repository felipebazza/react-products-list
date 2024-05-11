import React, { useEffect, useReducer } from 'react';
import { useQuery } from '@apollo/client';
import productsReducer from '../reducers/products';
import Product from './Product';
import GET_PRODUCTS from '../graphql/products';
import productsFixture from '../fixtures/products';
import '../styles/product-list.css';

const ProductList = () => {
    const [products, productsDispatch] = useReducer(productsReducer, []);
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    
    // useEffect(() => {
    //     if (data) {
    //         productsDispatch({ type:'POPULATE_PRODUCTS', data });
    //     }
    // }, [loading]);

    useEffect(() => {
        productsDispatch({ type:'POPULATE_PRODUCTS', productsFixture });
    }, []);

    return (
        <div className='products container'>
        {
            products.map((product) => (
                <Product key={product.id} product={product} />
            ))
        }
        </div>
    )
};

export { ProductList as default };
