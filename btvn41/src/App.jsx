import React, { useState } from "react";
import ProductTable from "./assets/components/ProductTable.jsx";
import ProductForm from "./assets/components/ProductForm.jsx";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, combineReducers } from "redux";
import { productReducer } from "./assets/product/reducer.jsx";

const store = createStore(combineReducers({ product: productReducer }));

const App = () => {
    const [isFormVisible, setFormVisible] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const openForm = (product = null) => {
        setEditingProduct(product);
        setFormVisible(true);
    };

    return (
        <Provider store={store}>
            <h1>Quản lý sản phẩm</h1>
            <button onClick={() => openForm()}>Thêm sản phẩm</button>
            <input
                type="text"
                placeholder="Tìm theo tên hoặc ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ margin: "10px 0", padding: "5px" }}
            />
            <ProductTable onEdit={openForm} searchTerm={searchTerm} />
            {isFormVisible && (
                <ProductForm editingProduct={editingProduct} onClose={() => setFormVisible(false)} />
            )}
        </Provider>
    );
};

export default App;