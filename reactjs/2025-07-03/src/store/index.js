import {createStore} from "redux";
const initState = {
    products:[],
    count:0,
}
const searchStrReducer=(state='',action)=>{
    if(action.type === 'search/inputting'){
        return action.value
    }
    return state
}
const productReducer=(state=initState.products,action)=>{
    if(action.type === 'products/addNew'){
        return [...state,action.value]
    }
    if(action.type === 'products/delete'){
        const index = state.findIndex(item => item.id === action.value.id)
        state.splice(index,1)
        return [...state]
    }
    return state
    }
    const countReducer=(state,action)=>{
        if(action.type === 'count/increase'){
            return state+1
        }
        return state
}
const reducer = (state=initState,action) => {
  return {
      products:productReducer(state.products,action),
      count:countReducer(state.count,action),
        searchStrReducer:searchStrReducer(state.searchStr,action)
  }
}
const store = createStore(reducer,initState)
export {
    store
}
//3
import { useEffect, useState } from 'react';
import { getProducts, getCategories, addProduct, updateProduct, deleteProduct } from './api';
import ProductTable from './components/ProductTable';
import ProductForm from './components/ProductForm';
import { Container, Button, Typography } from '@mui/material';

function App() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const loadData = async () => {
        const [proRes, catRes] = await Promise.all([getProducts(), getCategories()]);
        setProducts(proRes.data);
        setCategories(catRes.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleSave = async (data) => {
        if (data.id) {
            await updateProduct(data.id, data);
        } else {
            await addProduct({ ...data });
        }
        loadData();
    };

    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc muốn xoá?")) {
            await deleteProduct(id);
            loadData();
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Quản lý sản phẩm</Typography>
            <Button variant="contained" onClick={() => { setEditingProduct(null); setDialogOpen(true); }}>
                ➕ Thêm sản phẩm
            </Button>

            <ProductTable
                products={products}
                categories={categories}
                onEdit={(p) => { setEditingProduct(p); setDialogOpen(true); }}
                onDelete={handleDelete}
            />

            <ProductForm
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                onSave={handleSave}
                categories={categories}
                initialData={editingProduct}
            />
        </Container>
    );
}

export default App;