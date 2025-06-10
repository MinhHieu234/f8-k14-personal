export class Order {
    #id;
    #customer;
    #products;
    #orderDate;
    constructor(id, customer, orderDate = new Date()) {
        this.#id = id;
        this.#customer = customer;
        this.#products = [];
        this.#orderDate = orderDate;
    }

    addProduct(product) {
        this.#products.push(product);
    }

    removeProduct(productId) {
        this.#products = this.#products.filter(p => p.getId() !== productId);
    }

    getTotalPrice() {
        return this.#products.reduce((total, product) => {
            return total + (product.getPrice?.() || 0);
        }, 0);
    }

    getProducts() {
        return this.#products;
    }

    getCustomer() {
        return this.#customer;
    }

    getId() {
        return this.#id;
    }

    getOrderDate() {
        return this.#orderDate;
    }

    toString() {
        return `Đơn hàng #${this.#id}, khách hàng: ${this.#customer.getName()}, ngày đặt: ${this.#orderDate.toLocaleDateString('vi-VN')}`;
    }
}
