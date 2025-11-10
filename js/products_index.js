import { loadProducts, renderProducts } from "./load_products.js";

$(() => {  
  loadProducts().then(p => {
    renderProducts(p);
  });
});