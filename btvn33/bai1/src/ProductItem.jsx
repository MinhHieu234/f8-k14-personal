import React from 'react';

function ProductItem({ name, price }) {
    return (
        <div className="product-item">
            <div className="product-name">{name}</div>
            <div className="product-price">Giá: {price.toLocaleString()} VNĐ</div>
        </div>
    );
}
export default ProductItem;
