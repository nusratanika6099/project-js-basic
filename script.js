//my balance
const balance = document.getElementById('balance');
//product id
const product_name1 = document.getElementById('product_name1');
const product_name2 = document.getElementById('product_name2');
const product_name3 = document.getElementById('product_name3');
const product_name4 = document.getElementById('product_name4');

//price id
const price1 = document.getElementById('price1');
const price2 = document.getElementById('price2');
const price3 = document.getElementById('price3');
const price4 = document.getElementById('price4');
//buy id
const buy1 = document.getElementById('buy1');
const buy2 = document.getElementById('buy2');
const buy3 = document.getElementById('buy3');
const buy4 = document.getElementById('buy4');

//cart id
const cart1 = document.getElementById('cart1');
const cart2 = document.getElementById('cart2');
const cart3 = document.getElementById('cart3');
const cart4 = document.getElementById('cart4');

//your cart
const cart = document.getElementById('cart');
let final_price = 0;
//add to cart function
function addProduct(name, price) {

    document.getElementById("cart").innerHTML = name + " " + price + "Tk" + "<br>" + "<button type='button' id='finalbuy'>buy now</button>";

    //click event for buy button
    finalbuy.addEventListener('click', function () {

        buyProduct(price);
    });

}


// buy function
function buyProduct(productPrice) {
    let currentBalance = parseInt(balance.innerText);
    if (currentBalance >= productPrice) {
        currentBalance -= productPrice;
        balance.innerText = currentBalance;
        document.getElementById("cart").innerHTML = "Product purchased!" + "<br>" + "Your balance is: " + currentBalance + "Tk";
    } else {
        document.getElementById("cart").innerHTML = "Insufficient balance!";
    }
}

//add to cart click event
cart1.addEventListener('click', function () {
    let product_price = parseInt(price1.innerText);
    addProduct(product_name1.innerText, product_price);
    console.log(product_price);
});
cart2.addEventListener('click', function () {
    let product_price = parseInt(price2.innerText);
    addProduct(product_name2.innerText, product_price);
    console.log(product_price);
});
cart3.addEventListener('click', function () {
    let product_price = parseInt(price3.innerText);
    addProduct(product_name3.innerText, product_price);
    console.log(product_price);
});
cart4.addEventListener('click', function () {
    let product_price = parseInt(price4.innerText);
    addProduct(product_name4.innerText, product_price);
    console.log(product_price);
});


//click event for buy button
buy1.addEventListener('click', function () {
    let product_price = parseInt(price1.innerText);
    buyProduct(product_price);
});
buy2.addEventListener('click', function () {
    let product_price = parseInt(price2.innerText);
    buyProduct(product_price);
});
buy3.addEventListener('click', function () {
    let product_price = parseInt(price3.innerText);
    buyProduct(product_price);
});
buy4.addEventListener('click', function () {
    let product_price = parseInt(price4.innerText);
    buyProduct(product_price);
});
