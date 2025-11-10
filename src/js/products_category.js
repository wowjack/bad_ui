import { loadProducts, renderProducts } from "./load_products.js";

$(() => {
  // Get category from URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');

  $("#category-title").text(category)
  
  loadProducts(null, category).then(p => {
    renderProducts(p);
  });
});