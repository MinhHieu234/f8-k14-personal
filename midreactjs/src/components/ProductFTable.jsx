import * as React from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button
} from '@mui/material';

export default function ProductFTable({ products, categories, onEdit, onDelete }) {
    const getCategoryName = (id) => {
        const cat = categories.find(c => c.id === id);
        return cat?.name || '';
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <h1>Danh sach san pham</h1>
                    <Button variant="contained" color="primary" onClick={() => onEdit({})}>them moi san pham</Button>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>ten sp</TableCell>
                        <TableCell>Danh muc</TableCell>
                        <TableCell>so thu tu </TableCell>
                        <TableCell>thao tac</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.isArray(products) && products.map(product => (
                        <TableRow key={product.id}>
                            <TableCell>{product.id}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{getCategoryName(product.categoryId)}</TableCell>
                            <TableCell>{product.orderNum}</TableCell>
                            <TableCell>
                                <Button size="small" variant="outlined" color="primary" onClick={() => onEdit(product)}>sua</Button>
                                <Button size="small" variant="outlined" color="error" onClick={() => onDelete(product.id)} style={{ marginLeft: 8 }}>xoa</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
