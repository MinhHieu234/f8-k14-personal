import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
    return (
        <div>
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    name={product.name}
                    price={product.price} />
            ))}
        </div>
    );
}

export default ProductList;
