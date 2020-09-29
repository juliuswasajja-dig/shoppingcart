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
cart.push(pc);
//cart.pop();
//cart.unshift();
var total = 0;

//display items in the cart
for (let i = 0; i < cart.length; i++) {
  console.log(cart[i]);
}

//getting total
for (let i = 0; i < cart.length; i++) {
  //console.log(cart[i].price);
  total += cart[i].price * cart[i].qty;
}
console.log("YOUR TOTAL FOR THIS CART IS UGX:" + total);
