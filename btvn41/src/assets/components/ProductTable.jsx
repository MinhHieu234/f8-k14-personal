import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../product/actions";
import { selectProducts } from "../product/selectors";

const ProductTable = ({ onEdit, searchTerm }) => {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();

    const filtered = products.filter(
        (p) =>
            p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id) => {
        if (window.confirm("Bạn có chắc muốn xoá sản phẩm này không?")) {
            dispatch(deleteProduct(id));
        }
    };

    return (
        <table border="1" cellPadding="8" cellSpacing="0">
            <thead>
            <tr>
                <th>ID</th>
                <th>Tên sản phẩm</th>
                <th>Giá bán (VNĐ)</th>
                <th>Số lượng</th>
                <th>Đơn vị</th>
                <th>Hành động</th>
            </tr>
            </thead>
            <tbody>
            {filtered.map((product) => (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.unit}</td>
                    <td>
                        <button onClick={() => onEdit(product)}>Sửa</button>
                        <button onClick={() => handleDelete(product.id)}>Xoá</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ProductTable;