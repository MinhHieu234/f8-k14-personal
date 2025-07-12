import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../product/actions";

const generateId = () => `p${Math.floor(Math.random() * 1000).toString().padStart(3, "0")}`;

const ProductForm = ({ editingProduct, onClose }) => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState(
        editingProduct || {
            id: generateId(),
            name: "",
            price: "",
            quantity: "",
            unit: "",
        }
    );

    useEffect(() => {
        if (editingProduct) setProduct(editingProduct);
    }, [editingProduct]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingProduct) dispatch(updateProduct(product));
        else dispatch(addProduct(product));
        onClose();
    };

    return (
        <div className="modal" style={modalStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <h3>{editingProduct ? "Cập nhật sản phẩm" : "Thêm sản phẩm mới"}</h3>
                <input name="name" placeholder="Tên" value={product.name} onChange={handleChange} required />
                <input name="price" placeholder="Giá" type="number" value={product.price} onChange={handleChange} required />
                <input name="quantity" placeholder="Số lượng" type="number" value={product.quantity} onChange={handleChange} required />
                <input name="unit" placeholder="Đơn vị" value={product.unit} onChange={handleChange} required />
                <div style={{ marginTop: "10px" }}>
                    <button type="submit">Lưu</button>
                    <button type="button" onClick={onClose} style={{ marginLeft: "10px" }}>Hủy</button>
                </div>
            </form>
        </div>
    );
};

const modalStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
};

const formStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
};

export default ProductForm;