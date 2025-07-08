import { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import ProductFTable from './components/ProductFTable.jsx';
import ProductForm from './components/ProductFFrom.jsx';
import {
    getProducts, getCategories,
    addProduct, updateProduct, deleteProduct
} from './API/api.js';

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
        if (data.id) await updateProduct(data.id, data);
        else await addProduct(data);
        loadData();
    };

    const handleDelete = async (id) => {
        if (window.confirm("xoa san pham nay")) {
            await deleteProduct(id);
            loadData();
        }
    };

    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom>Quản lý sản phẩm</Typography>
            <ProductFTable
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


