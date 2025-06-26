import React, { useState, useMemo } from 'react';
import '../../App.css';

const products = [
    { id: 1, name: 'Áo thun thể thao', price: 350000, category: 'Áo', brand: 'Nike' },
    { id: 2, name: 'Quần jogger', price: 750000, category: 'Quần', brand: 'Adidas' },
    { id: 3, name: 'Nón lưỡi trai', price: 250000, category: 'Phụ kiện', brand: 'Puma' },
    { id: 4, name: 'Áo hoodie', price: 1200000, category: 'Áo', brand: 'Nike' },
];

function App() {
    const [priceFilter, setPriceFilter] = useState('Tất cả');
    const [categoryFilter, setCategoryFilter] = useState('Tất cả');
    const [brandFilter, setBrandFilter] = useState('Tất cả');

    const filteredProducts = useMemo(() => {
        console.log(' Đang lọc sản phẩm...');
        return products.filter((p) => {
            const matchPrice =
                priceFilter === 'Tất cả' ||
                (priceFilter === 'Dưới 500K' && p.price < 500000) ||
                (priceFilter === '500K - 1 triệu' && p.price >= 500000 && p.price <= 1000000) ||
                (priceFilter === 'Trên 1 triệu' && p.price > 1000000);

            const matchCategory = categoryFilter === 'Tất cả' || p.category === categoryFilter;
            const matchBrand = brandFilter === 'Tất cả' || p.brand === brandFilter;

            return matchPrice && matchCategory && matchBrand;
        });
    }, [priceFilter, categoryFilter, brandFilter]);

    return (
        <div>
            <h2>Lọc sản phẩm</h2>
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                <select onChange={(e) => setPriceFilter(e.target.value)}>
                    <option>Tất cả</option>
                    <option>Dưới 500K</option>
                    <option>500K - 1 triệu</option>
                    <option>Trên 1 triệu</option>
                </select>
                <select onChange={(e) => setCategoryFilter(e.target.value)}>
                    <option>Tất cả</option>
                    <option>Áo</option>
                    <option>Quần</option>
                    <option>Phụ kiện</option>
                </select>
                <select onChange={(e) => setBrandFilter(e.target.value)}>
                    <option>Tất cả</option>
                    <option>Nike</option>
                    <option>Adidas</option>
                    <option>Puma</option>
                </select>
            </div>
            <ul>
                {filteredProducts.map((p) => (
                    <li key={p.id}>
                        {p.name} - {p.price.toLocaleString()} VND - {p.category} - {p.brand}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
