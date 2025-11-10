import { loadProducts, renderProducts } from "./load_products.js";

$(() => {
  // Get query from URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('query');

  $("#search-term-display").text(query)

  loadProducts(query).then(p => renderProducts(p));
})