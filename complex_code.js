/* complex_code.js */

// This code is a simulation of an e-commerce website with various functionalities

// Product object
class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  displayProductDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Price: ${this.price}`);
    console.log(`Description: ${this.description}`);
  }
}

// Cart object
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    this.items.push({ product, quantity });
  }

  removeItem(index) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }

  getTotalItems() {
    let total = 0;
    for (const item of this.items) {
      total += item.quantity;
    }
    return total;
  }

  getTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.product.price * item.quantity;
    }
    return total;
  }

  displayCartItems() {
    for (const { product, quantity } of this.items) {
      console.log(`${product.name} - Quantity: ${quantity}`);
    }
  }
}

// User object
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.address = '';
    this.cart = new Cart();
  }

  setAddress(address) {
    this.address = address;
  }

  addProductToCart(product, quantity) {
    this.cart.addItem(product, quantity);
  }

  removeProductFromCart(index) {
    this.cart.removeItem(index);
  }

  checkout() {
    console.log(`Checkout details for user: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Address: ${this.address}`);
    console.log(`Total Items: ${this.cart.getTotalItems()}`);
    console.log(`Total Price: ${this.cart.getTotalPrice()}`);
    console.log("Items in the cart:");
    this.cart.displayCartItems();
  }
}

// Main functionality
const nikeShoes = new Product("Nike Shoes", 120, "Running shoes for professional athletes");
const adidasHat = new Product("Adidas Hat", 25, "Stylish hat for everyday wear");

const user1 = new User("John Doe", "johndoe@example.com");
user1.setAddress("123 Street, City");

user1.addProductToCart(nikeShoes, 2);
user1.addProductToCart(adidasHat, 1);

user1.checkout();