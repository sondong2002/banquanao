let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

cartIcon.onclick = () => {
 cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
   };

if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready ();
}

function ready() {

    var removeCartButtons = document.getElementsByClassName('cart-remove') ;
    console.log(removeCartButtons);
    for ( var i = 0 ; i < removeCartButtons.length; i++) {
        var Button = removeCartButtons [i];
        Button.addEventListener('click', removeCartItem);
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for ( var i = 0 ; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener("change" , quantityChanged);
    }
    var addCart = document.getElementsByClassName('add-cart')
    for ( var i = 0 ; i < addCart.length; i++){
        var button = addCart [i];
        button.addEventListener("click" , addCartClicked);
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

function quantityChanged(event) {
    var input = event.target
    if ( isNaN (input.value) || input.value <= 0 ){
        input.value = 1;
    }
    updatetotal();
}
function addCartClicked(event){
    var button = event.target ;
    var shopProducts = button.parentElement;
    var productImg = shopProducts.getElementsByClassName("products-thumb")[0] ;
    var title = shopProducts.getElementsByClassName("produtcs-meo")[0];
    var price = shopProducts.getElementsByClassName("price")[0];
    
    addProductToCart(title , productImg , price);
    updatetotal();
} 
function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box')
    var cartItems = document.getElementsByClassName('cart-content') [0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title') 
    for ( var i = 0 ; i < cartItemsNames.length; i++){
        alert('Thêm vào giỏ hàng thành công!!!');
        return;
    }
   
}
var cartBoxContent = ` 
             <img src="img/pixlr-bg-result (48).png" alt="" class="cart-img" >
             <div class="detail-box">
             <div class="cart-product-title">Fukyba Knit Sweater</div>
               <div class="cart-price">600.000d</div>
           <input type="number" value="1" class="cart-quantity">
   
              </div>
           <i class="fas fa-trash cart-remove"></i> `
cartShopBox = cartBoxContent; 
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].
addEventListener('click', removeCartItem);
cartShopBox.getElementsByClassName('cart-quantity')[0].
addEventListener('change', quantityChanged);

function updatetotal() {
    var cartCotent = document.getElementsByClassName ("cart-content") [0];
    var cartBoxes = cartCotent.getElementsByClassName("cart-box");
    for ( var i = 0 ; i < cartBoxes.length; i++) {
     var cartBox = cartBoxes [i] ;
     var total = 0;
     var priceElement = cartBox.getElementsByClassName( "cart-price") [0] ;
     var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
     var price = parseFloat(priceElement.innerText.replace(".000đ", "." ));
     var quantity = quantityElement.value ;
     total = total + price * quantity;

     document.getElementsByClassName ('total-price') [0].innerText = total + ".000đ";
    }
}