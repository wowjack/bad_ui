const API_BASE = "https://dummyjson.com";

async function loadProducts() {
  try {
    let ids = JSON.parse(window.localStorage.getItem("cart") ?? "[]") ?? [];
    const promises = ids.map(id => fetch(`${API_BASE}/products/${id}`).then(res => res.json()));
    const products = await Promise.all(promises);
    return products || []
  } catch {
    console.log("error fetching cart products")
    return []
  }
}

export function renderProducts(products) {
  const grid = $("#product-grid");
  grid.empty();
  if (!products.length) {
    grid.append("<p class='text-muted'>No products found.</p>");
    return;
  }
  products.forEach(p => {
    grid.append(`
      <div class="col-sm-4 col-md-3 col-lg-2">
        <div class="card h-100 shadow-sm">
          <img src="${p.thumbnail}" class="card-img-top" alt="${p.title}">
          <div class="card-body d-flex flex-column">
            <h6 class="card-title">${p.title}</h6>
            <p class="text-muted mb-1">$${p.price}</p>
            <p class="small flex-grow-1">${p.description.substring(0, 60)}...</p>
            <a href="{{/products/product/?id=${p.id} | url}}" class="btn btn-outline-primary mt-auto">View</a>
          </div>
        </div>
      </div>
    `);
  });
}

$(() => {
    loadProducts().then(p => renderProducts(p))
})