import { Employee } from "./employee.js";
import { Product } from "./product.js";
import { Customer } from "./Customer.js";
import { Order } from "./Order.js";

// --- Nhân viên ---
const employees = [];
const createEmployee = ({ id, name, address }) => {
    employees.push(new Employee(id, name, address));
};
createEmployee({ id: 1, name: 'test', address: 'address test' });

// --- Sản phẩm riêng ---
const products = [];
const createProduct = ({ id, name, price }) => {
    products.push(new Product(id, name, price));
};
createProduct({ id: 1, name: 'test', price: 1000 });
products.forEach(product => console.log(product.toString()));

// --- Khách hàng ---
const customer1 = new Customer(1, "Nguyễn Văn An", "nguyenan@example.com", "0912345678");
const customer2 = new Customer(2, "Trần Thị Bình", "tranbinh@example.com", "0987654321");
const customer3 = new Customer(3, "Lê Hoàng Cường", "lecuong@example.com", "0978123456");

const customers = [customer1, customer2, customer3];

// --- Danh sách sản phẩm bán ---
const product1 = new Product(1, "Laptop Dell XPS", 25000000);
const product2 = new Product(2, "Điện thoại Samsung Galaxy", 12000000);
const product3 = new Product(3, "Tai nghe Sony", 3000000);
const product4 = new Product(4, "Chuột Logitech", 800000);
const product5 = new Product(5, "Bàn phím cơ", 1500000);

const sellProducts = [product1, product2, product3, product4, product5];

// --- Đơn hàng ---
const order1 = new Order(1, customer1, new Date("2023-05-15"));
order1.addProduct(product1);
order1.addProduct(product3);

const order2 = new Order(2, customer2, new Date("2023-05-16"));
order2.addProduct(product2);
order2.addProduct(product4);
order2.addProduct(product5);

const order3 = new Order(3, customer1, new Date("2023-05-17"));
order3.addProduct(product2);
order3.addProduct(product5);

const order4 = new Order(4, customer3, new Date("2023-05-18"));
order4.addProduct(product1);
order4.addProduct(product2);
order4.addProduct(product3);
order4.addProduct(product4);

const orders = [order1, order2, order3, order4];

console.log("=== DANH SÁCH KHÁCH HÀNG ===");
customers.forEach(customer => console.log(customer.toString()));


console.log("\n=== DANH SÁCH SẢN PHẨM ===");
sellProducts.forEach(product => console.log(product.toString()));


console.log("\n=== DANH SÁCH ĐƠN HÀNG ===");
orders.forEach(order => console.log(order.toString()));

// --- Hàm hiển thị đơn hàng theo khách hàng ---
function hienThiDonHangTheoKhachHang(customers, orders) {
    for (const customer of customers) {
        const donHangCuaKhach = orders.filter(order => order.getCustomer().getId() === customer.getId());

        console.log(`\nKhách hàng: ${customer.getName()}`);
        console.log(`Tổng số đơn hàng: ${donHangCuaKhach.length}`);

        let tongTien = 0;
        donHangCuaKhach.forEach(order => {
            console.log(`  - Đơn hàng ID: ${order.getId()}, Ngày: ${order.getOrderDate().toLocaleDateString('vi-VN')}`);
            order.getProducts().forEach(product => {
                console.log(`    ${product.toString()}`);
                tongTien += product.getPrice();
            });
        });

        console.log(`Tổng tiền đã mua: ${tongTien.toLocaleString('vi-VN')} VNĐ`);
    }
}

// --- Hàm tìm đơn hàng có giá trị cao nhất ---
function timDonHangGiaTriCaoNhat(orders) {
    let maxOrder = null;
    let maxTotal = 0;

    for (const order of orders) {
        const total = order.getProducts().reduce((sum, product) => sum + product.getPrice(), 0);
        if (total > maxTotal) {
            maxTotal = total;
            maxOrder = order;
        }
    }

    if (!maxOrder) {
        console.log("Chưa có đơn hàng nào.");
        return;
    }

    console.log("\n=== ĐƠN HÀNG CÓ GIÁ TRỊ CAO NHẤT ===");
    console.log(`Đơn hàng ID: ${maxOrder.getId()}`);
    console.log(`Khách hàng: ${maxOrder.getCustomer().getName()}`);
    console.log(`Ngày: ${maxOrder.getOrderDate().toLocaleDateString('vi-VN')}`);
    console.log("Danh sách sản phẩm:");
    maxOrder.getProducts().forEach(product => console.log(`  ${product.toString()}`));
    console.log(`Tổng giá trị: ${maxTotal.toLocaleString('vi-VN')} VNĐ`);
}

console.log("\n=== ĐƠN HÀNG THEO TỪNG KHÁCH HÀNG ===");
hienThiDonHangTheoKhachHang(customers, orders);

timDonHangGiaTriCaoNhat(orders);
