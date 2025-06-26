import React, { useState, useCallback } from 'react';


const CartItem = React.memo(({ item, onIncrease, onDecrease, onDelete }) => {
    console.log('Rendering:', item.name);
    return (
        <div className="cart-item">
            <div className="cart-item-header">{item.name}</div>
            <div className="cart-item-quantity">Số lượng: {item.quantity}</div>
            <div className="cart-buttons">
                <button onClick={() => onIncrease(item.id)}>+</button>
                <button onClick={() => onDecrease(item.id)} disabled={item.quantity <= 1}>-</button>
                <button onClick={() => onDelete(item.id)} className="delete">Xóa</button>
            </div>
        </div>
    );
});

function CartUI() {
    const [cart, setCart] = useState([
        { id: 1, name: 'Áo thun', quantity: 1 },
        { id: 2, name: 'Quần jeans', quantity: 2 },
        { id: 3, name: 'Nón lưỡi trai', quantity: 1 },
    ]);

    const handleIncrease = useCallback((id) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    }, []);

    const handleDecrease = useCallback((id) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    }, []);

    const handleDelete = useCallback((id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    }, []);

    return (
        <div className="cart-container">
            <h2 className="cart-title">Giỏ hàng</h2>
            {cart.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
}

export default CartUI;
