const employees = [
    { id: 1, name: "Alice", age: 23, status: 'working' },
    { id: 2, name: "Bob", age: 25, status: 'working' },
    { id: 3, name: "Charlie", age: 27, status: 'working' },
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
    { id: 5, employeeId: 4, productId: 1, quantity: 1 },
    { id: 5, employeeId: 5, productId: 3, quantity: 2 },
];
// bai 1  lay ra ds nhan vien dang lam viec
// const working = employees.filter(e => e.status === 'working');
// console.log(working);
// Bai 2:Lay ra nhan vien lon tuoi nhat
// const oldest = employees.reduce((acc, e) => {
//     if (e.age > acc.age) {
//         return e;
//     }
//     return acc;
// })
// console.log(oldest);
// Bai 3: Lay ra san phan gia re nhat
// const cheapest = products.reduce((acc, p) => {
//     if (p.price < acc.price) {
//         return p;
//     }
//    return acc;
// })
// console.log(cheapest);
// Bai 4:Tim ra san pham ban chay nhat ( ban nhieu nhat ve bat so luong )
// const mostSold = orders.reduce((acc, o) => {
//     if (o.quantity > acc.quantity) {
//         return o;
//     }
//     return acc;
// })
// console.log(mostSold);
// Bai 5:Tim ra san phan doanh thu cao nhat ( nhieu tien nhat )
// const mostMoney = products.reduce((acc, o) => {
//     if (o.price > acc.price) {
//         return o;
//     }
//     return acc;
// })
// console.log(mostMoney);
// // Bai 6:Tim ra nhan vien ban nhieu hang nhat
// const employeesSaled = orders.reduce ((acc, o) => {
//
//     if (o.quantity > acc.quantity) {
//         return o;
//     }
//     if (o.employeeId < acc.employeeId) {
//         return o;
//     }
//     return acc;
// })
// console.log(employeesSaled.employeeId)

// Bai 7:Tim ra nhan vien co doanh thu cao nhat
// const employeesMoney = orders.reduce((acc, o) => {
//     if (o.quantity > acc.quantity) {
//         return o;
//     }
//     if (o.employeeId < acc.employeeId) {
//         return o;
//     }
//     return acc;
// })
// console.log(employeesMoney.employeeId)
// Bai 8: Tim ra san pham ban co doanh thu nhat cua moi nhan vien













