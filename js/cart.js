const urlParams = new URLSearchParams(window.location.search)
const productId = urlParams.get("id")
const product = products[productId]

const detailsTemplate = `
<div class="Header">
<h3 class="Heading">Shopping Cart</h3>
</div>

<div class="Cart-Items">
<div class="image-box">
</div>

<div class="about">
    <h3 class="title" id="title">${product.name}</h3>
    <img src="${product.imageSrc}" alt ="product " width="350px"/>
</div>

<div class="counter"></div>
<div class="prices"></div>
</div>


<div class="prices">
<div class="amount" id="amount">₦${product.amount}</div>
<div class="remove"><u>Remove</u></div>
</div>

<div class="checkout">
<div class="total">
    <h3>Total: </h3>
    <div class="total-amount">₦${product.amount}</div>
</div>
<button onclick="proceedCheckout()" class="button">Checkout</button>
</div>
</div>
`

const productTemplate = document.querySelector(".Cart-Container")
productTemplate.innerHTML = detailsTemplate

var times = document.getElementById("times");

function proceedCheckout() {
    var modal = document.getElementById("modal");
    modal.style.display="block";
}

times.addEventListener("click", function() {
    var modal = document.getElementById("modal");
    modal.style.display="none";
});

