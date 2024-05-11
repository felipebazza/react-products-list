import React from 'react';
import '../styles/product.css';

const Product = (props) => {
    const product = props.product;

    return (
        <div className='product' id={product.id}>
            <div className='product__image'>
                <img src={product.image.url} alt={product.name} />
            </div>
            <div className='product-info'>
                <p className='product-info__sku'>SKU: {product.sku}</p>
                <p className='product-info__name'>{product.name}</p>
                <p className='product-info__price'>${product.price.regularPrice.amount.value}</p>
                <div className='product-info__swatches'>
                    <span className='swatches__item black'></span>
                    <span className='swatches__item yellow'></span>
                    {
                        product.id % 2 === 0 && <span className='swatches__item red'></span>
                    }
                </div>
            </div>
        </div>
    )
};

export { Product as default };