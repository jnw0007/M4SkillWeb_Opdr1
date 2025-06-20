const itemCounter = document.getElementById("js--shoppingCart__itemCount");
const cartButton = document.getElementsByClassName("product__button");
const cartListProducts = document.getElementById("js--cart-list-products");
const RemoveItem = document.getElementById("js--delete-item");
const cartList = document.querySelector('.shopping--cart--list');
const cartIcon = document.querySelector('.shoppingCartImg');
const productDummy = document.querySelector('.product_dummy');
const productContainer = document.querySelector('.product__container');
const products_array = [
    ["Sony A7 IV", 2549.00, "img/01_mobile-5.webp", "mooie camera", true],
    ["Canon G7X mark III", 879.99, "img/3637C002AA_PowerShot-G7-X-Mark-III_01.webp", "goedkope camera", false],
    ["Leica 10607 SL3", 6800.00, "img/leica-10607-sl3-black-.webp", "dure camera", true]
];
let cartAmount = 0;

for (let i = 0; i < products_array.length; i++) {
    const clone = productDummy.cloneNode(true);
    productContainer.appendChild(clone);
    const available = products_array[i][4];
    clone.getElementsByClassName('product__img')[0].setAttribute("src", products_array[i][2]);
    clone.getElementsByClassName('product__price')[0].textContent = products_array[i][1];
    clone.getElementsByClassName('product__title')[0].textContent = products_array[i][0];
    if (!available){
        clone.classList.add('not-available');
    }

}
productDummy.remove();




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
    if (cartAmount < 1) {
        cartAmount++;
    }
})
