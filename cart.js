class item {
  constructor(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
  }

  cartinfo() {
    console.log(
      "You have added " +
        this.qty +
        " " +
        this.name +
        " item to the cart with each costing shs. " +
        this.price +
        " and your TOTAL for this item is UGX" +
        this.qty * this.price +
        " THANK YOU"
    );
  }
}

//adding items to the cart

let shoes = new item("clarks", 2, 23000);
let book = new item("learn js", 4, 45000);
let pc = new item("imac", 3, 33000);

shoes.cartinfo();
//book.cartinfo();

var cart = [shoes, book];
//add item to the cart array
cart.push(pc);

//remove the item from the cart

//cart.pop();
//cart.unshift();
var total = 0;

//display items in the cart
for (let i = 0; i < cart.length; i++) {
  console.log(cart[i]);
}
//total number of items in the cart
console.log("You have a total of " + cart.length + " items in the cart");

//getting total AMOUNT OF MONEY
for (let i = 0; i < cart.length; i++) {
  //console.log(cart[i].price);
  total += cart[i].price * cart[i].qty;
}
console.log("YOUR TOTAL FOR THIS CART IS UGX:" + total);
//check out
console.log("Your can proceed to the checkout");
//payment method
console.log(
  "What payment method would you prefer, VOUCHER, CASH ON DELIVERY or MOBILE MONEY"
);
//
