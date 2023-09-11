// Render product detail
const urlParams = new URLSearchParams(window.location.search)
const productId = urlParams.get("id")
const product = products[productId]

const detailsTemplate = `
<div class="parent-div">
            <div class="child-div">
                <img 
                src="${product.imageSrc}" alt="Product Image"/>
            </div>
            <div class="child-div last-child">
                <h2>${product.name}</h2>
                <h3>#${product.amount}</h3>
                
                <div class="button-container">
                <button class="button-">-</button>
                <input type="text" class="count" value="1">  
                <button class="button-Lol">+</button>
            </div>         
               

                    <button class="btn btn-success last-child inline-btn">Add to Cart</button> 
                
            </div>
            
        </div>


`

const productTemplate = document.querySelector(".container")
productTemplate.innerHTML = detailsTemplate


const mainButton = document.querySelector(".button-normal");



const btnMinus = document.querySelector(".button-");
const btnAdd = document.querySelector(".button-Lol")
const countInput = document.querySelector(".count");



btnMinus.addEventListener('click', () =>{
        if (countInput.value > 1) {
            countInput.value = countInput.value - 1;
    } 
}    )

btnAdd.addEventListener('click', () =>{
     
        countInput.value = Number(countInput.value) + 1;

}    )





