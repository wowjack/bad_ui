function fetchProduct(id) {
  $.ajax({
    url: `https://dummyjson.com/products/${id}`,
    method: 'GET',
    success: function(product) {
      displayProduct(product);
    }
  });
}

function displayProduct(p) {    
    $("#product-image").attr("src", p.thumbnail ?? "");

    $("#product-title").text(p.title);
    $("#product-price").text(`$${p.price}`);
    $("#product-stock").text(`${p.stock} available`);
    $("#product-description").text(p.description);
    $("#product-weight").text(`${p.weight} kg`);
    $("#product-dimensions").text(p.dimensions ? `${p.dimensions.width} × ${p.dimensions.height} × ${p.dimensions.depth} cm` : 'N/A');
    $("#product-warranty").text(p.warrantyInformation || 'N/A');
    $("#product-shipping").text(p.shippingInformation || 'N/A');
    $("#product-return").text(p.returnPolicy || 'N/A');
    
    const reviews = p.reviews.map(review => `
      <div class="review-card">
        <div class="review-header">
          <div>
            <strong>${review.reviewerName}</strong>
            <span class="review-rating ms-2">${'⭐'.repeat(review.rating)}</span>
          </div>
          <span class="review-date">${new Date(review.date).toLocaleDateString()}</span>
        </div>
        <div class="review-comment">"${review.comment}"</div>
      </div>
    `).join('');
    $("#reviews-container").html(reviews).show();
}

$(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
  if (!productId) {
    return
  }
  
  // Fetch product details
  fetchProduct(productId);
  
  // Add to cart functionality
  $('#add-to-cart-btn').on('click', () => {
    var cart = JSON.parse(window.localStorage.getItem("cart") ?? "[]") ?? [];
    cart.push(productId);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  });
});