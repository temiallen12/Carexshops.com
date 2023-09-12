// Render each products
const productCardElems = products.map((product, index) => {
    return `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4 ">
        <div class="product-card segun-captain" onclick="viewProductDetails(${index})">
        <img
            src="${product.imageSrc}"
            alt="Product 1"
        />
        <h3>${product.name}</h3>
        <p>₦${product.amount}</p>
        <button class="add-to-cart btn btn-lg btn-secondary" data-id="1">Add to Cart</button>
        </div>
    </div>
    `
});
const productCardsContainer = document.querySelector('#products-cards-container');
productCardsContainer.innerHTML = productCardElems.join('')


// Navigate to each product detail page
function viewProductDetails(index) {
    // Navigate to the product details page with the product ID
    window.location.href = `productDetails.html?id=${index}`;
}







const categoryCardElems = category.map((category) => {
    return `
  
    <div class="category-item">
    <div class="category-img-box">
      <img 
      src="${category.imageSrc}" alt="dress & frock" width="30" />
    </div>

    <div class="category-content-box">
      <div class="category-content-flex">
        <h3 class="category-item-title">${category.name1}</h3>

        <p class="category-item-amount">${category.nameamount}</p>
      </div>

      <a href="#" class="category-btn">Show all</a>
    </div>
  </div>
 
    
   
    `
});

const categoryDiv = document.querySelector('#category-container');
categoryDiv.innerHTML = categoryCardElems.join("")
