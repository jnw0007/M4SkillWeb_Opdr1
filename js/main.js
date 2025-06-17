const itemCounter = document.getElementById("js--shoppingCart__itemCount");
const cartButton = document.getElementsByClassName("product__button");
const productUnavailable = document.getElementById("js--unavailable--product");
const cartListProducts = document.getElementById("js--cart-list-products");
const RemoveItem = document.getElementById("js--delete-item");
const cartList = document.querySelector('.shopping--cart--list');
const cartIcon = document.querySelector('.shoppingCartImg');
let cartAmount = 0;

for (let i = 0; i < cartButton.length; i++) {
    cartButton[i].addEventListener('click', () => {
        cartAmount = cartAmount + 1;
        itemCounter.innerText = cartAmount;
        cartListProducts.innerText = cartAmount;
    })
}

cartIcon.addEventListener('click', () => {
    cartList.classList.toggle('active');
})

RemoveItem.addEventListener('click', () => {
    cartAmount = cartAmount - 1;
    itemCounter.innerText = cartAmount;
    cartListProducts.innerText = cartAmount;
    if(cartAmount < 1){
    cartAmount++;
}
})
