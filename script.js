"use strict";

const previewImage = document.getElementById('image');
const clickedImage = document.querySelector('.main-img');


previewImage.addEventListener('click', () => {
    clickedImage.style.display = 'flex';
})


function change1() {
    const test = document.getElementById('image');
    test.src='images/image-product-1.jpg';
}
function change2() {
    const test = document.getElementById('image');
    test.src='images/image-product-2.jpg';
}
function change3() {
    const test = document.getElementById('image');
    test.src='images/image-product-3.jpg';
}
function change4() {
    const test = document.getElementById('image');
    test.src='images/image-product-4.jpg';
}

// const clicked = document.getElementById('actived');

// clicked.addEventListener('click', () => {
//     clicked.classList.add('clicked');
// })

// Assigning variables to the + and - button as well as the input 
const btnMinus = document.querySelector('.minus');
const input = document.querySelector('input');
const btnAdd = document.querySelector('.plus');
const totalPrice = document.querySelector('.total-price');

// Decrementing only if the value is greater than 0
// The if statement is preventing to have any value lower than 0 on the input 
btnMinus.addEventListener('click', () => {
    if(input.value > 0) {
        input.value = parseInt(input.value) - 1;
    }
})





// ============================================







// ============================================




// Incrementing on the input value 
btnAdd.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;

    // totalPrice.innerText = `$${500}.00`;
    
});









const btnAddToCart = document.querySelector('.cart');
const cartItemCount = document.getElementById('items_number');
const cartItemContainer = document.querySelector('.cart-box');
const cartIcon = document.querySelector('.cart-icon');

const productOn = document.querySelector('.product-on-cart'); 


const cartPrice = document.querySelector('.cart-price');


function addToCart() {



    cartItemCount.innerText = input.value;

    cartPrice.innerText = `${totalPrice.innerText} x ${cartItemCount.innerText}`;

    const test = document.querySelector('.cart-items');

    if(cartItemCount.innerText == 0) {
        productOn.style.display = 'none';
        document.querySelector('.empty-cart').style.display = 'block';

    } else {
        
        productOn.style.display = 'block';
        document.querySelector('.empty-cart').style.display = 'none';
    }

}

// When click on bin icon, this is removing the items inside the cart and;
// it is displaying empty cart option 
const deleteProduct = document.querySelector('.delete-icon');

deleteProduct.addEventListener('click', () => {
    productOn.style.display = 'none';
    document.querySelector('.empty-cart').style.display = 'block';
    cartItemCount.innerText = 0;
}) // Comment END





// Showing and hiding cart container on cart icon click
cartIcon.addEventListener('click', () => {
    if(cartItemContainer.style.display === 'block') {
        cartItemContainer.style.display = 'none'; 
    } else {
        cartItemContainer.style.display = 'block'; 
    }
    
})

// if(cartItemContainer.style.display === 'block') {
//     document.addEventListener('click', () => {
//         cartItemContainer.style.display = 'none';
//     })
// }
 









