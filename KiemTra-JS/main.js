const employees = [
    { id: 1, name: "Alice", age: 23, status: 'working' },
    { id: 2, name: "Bob", age: 25, status: 'working' },
    { id: 3, name: "John", age: 27, status: 'working' },
    { id: 4, name: "David", age: 23, status: 'quited' },
    { id: 5, name: "Eve", age: 20, status: 'working' },
];


const products = [
    { id: 1, name: "Phone", price: 1200 },
    { id: 2, name: "Laptop", price: 3000  },
    { id: 3, name: "Tab", price: 2000  },
    { id: 4, name: "PC", price: 800  },
    { id: 5, name: "Monitor", price: 1500  },
]


const orders = [
    { id: 1, employeeId: 1, productId: 4, quantity: 1 },
    { id: 2, employeeId: 2, productId: 2, quantity: 4 },
    { id: 3, employeeId: 1, productId: 5, quantity: 1 },
    { id: 4, employeeId: 3, productId: 1, quantity: 2 },
    { id: 5, employeeId: 2, productId: 5, quantity: 3 },
    { id: 6, employeeId: 4, productId: 1, quantity: 1 },
    { id: 7, employeeId: 5, productId: 3, quantity: 2 },
];

// Bai: 1
// Lay ra ds nhan vien dang lam viec
// const workingEmployees = employees.filter(emp => emp.status === 'working');
// console.log(workingEmployees);
// Bai 2:
// Lay ra nhan vien lon tuoi nhat
// const maxAge = Math.max(...employees.map(emp => emp.age));
// const oldestEmployees = employees.filter(emp => emp.age === maxAge);
// console.log(oldestEmployees);
// Bai 3:
// Lay ra san phan gia re nhat
// const minPrice = Math.min(...products.map(p => p.price));
// const cheapestProducts = products.filter(p => p.price === minPrice);
// console.log(cheapestProducts);
// Bai 4:
// Tim ra san pham ban chay nhat ( ban nhieu nhat ve bat so luong )
// const productSales = {};
// orders.forEach(order => {
//     if (!productSales[order.productId]) {
//         productSales[order.productId] = 0;
//     }
//     productSales[order.productId] += order.quantity;
// });
// const maxSold = Math.max(...Object.values(productSales));
// const bestSellingProducts = products.filter(p => productSales[p.id] === maxSold);
// console.log(bestSellingProducts);


// Bai 5:
// Tim ra san phan doanh thu cao nhat ( nhieu tien nhat )
// const productRevenue = {};
// orders.forEach(order => {
//     const product = products.find(p => p.id === order.productId);
//     if (!productRevenue[order.productId]) {
//         productRevenue[order.productId] = 0;
//     }
//     productRevenue[order.productId] += product.price * order.quantity;
// });
// const maxRevenue = Math.max(...Object.values(productRevenue));
// const highestRevenueProducts = products.filter(p => productRevenue[p.id] === maxRevenue);
//
// console.log(highestRevenueProducts);
// Bai 6:
// Tim ra nhan vien ban nhieu hang nhat
// const employeeSales = {};
// orders.forEach(order => {
//     if (!employeeSales[order.employeeId]) {
//         employeeSales[order.employeeId] = 0;
//     }
//     employeeSales[order.employeeId] += order.quantity;
// });
// const maxSold = Math.max(...Object.values(employeeSales));
// const topEmployees = employees.filter(e => employeeSales[e.id] === maxSold);
// console.log(topEmployees);
// bai7
// Tính doanh thu cho từng nhân viên
// const employeeRevenue = {};
// orders.forEach(order => {
//     const product = products.find(p => p.id === order.productId);
//     const amount = product.price * order.quantity;
//     if (!employeeRevenue[order.employeeId]) {
//         employeeRevenue[order.employeeId] = 0;
//     }
//     employeeRevenue[order.employeeId] += amount;
// });
//
// const maxRevenue = Math.max(...Object.values(employeeRevenue));
// const topRevenueEmployees = employees
//     .filter(e => employeeRevenue[e.id] === maxRevenue)
//     .map(e => ({
//         ...e,
//         totalRevenue: employeeRevenue[e.id]
//     }));
// console.log(topRevenueEmployees);
// bai8
// const revenuePerEmployeeProduct = {};
// orders.forEach(order => {
//     const key = `${order.employeeId}-${order.productId}`;
//     const product = products.find(p => p.id === order.productId);
//     const amount = product.price * order.quantity;
//     if (!revenuePerEmployeeProduct[key]) {
//         revenuePerEmployeeProduct[key] = 0;
//     }
//     revenuePerEmployeeProduct[key] += amount;
// });
// const employeeBestProduct = {};
// for (const key in revenuePerEmployeeProduct) {
//     const [empId, prodId] = key.split('-').map(Number);
//     const revenue = revenuePerEmployeeProduct[key];
//
//     if (!employeeBestProduct[empId] || revenue > employeeBestProduct[empId].revenue) {
//         const product = products.find(p => p.id === prodId);
//         employeeBestProduct[empId] = {
//             employee: employees.find(e => e.id === empId),
//             product,
//             revenue
//         };
//     }
// }
// for (const empId in employeeBestProduct) {
//     const record = employeeBestProduct[empId];
//     console.log(`Nhân viên: ${record.employee.name}, Sản phẩm doanh thu cao nhất: ${record.product.name}, Doanh thu: ${record.revenue}`);
// }

