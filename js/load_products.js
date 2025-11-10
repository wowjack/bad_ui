const API_BASE = "https://dummyjson.com";

export async function loadProducts(query = "", category = "") {
  let url = `${API_BASE}/products`;
  if (query) url = `${API_BASE}/products/search?q=${encodeURIComponent(query)}`;
  else if (category) url = `${API_BASE}/products/category/${encodeURIComponent(category)}`;

  const res = await fetch(url);
  const data = await res.json();
  return data.products || []
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
          <img src="${p.thumbnail}" class="card-img-top">
          <div class="card-body d-flex flex-column">
            <h6 class="card-title">${p.title}</h6>
            <p class="text-muted mb-1">$${p.price}</p>
            <p class="small flex-grow-1">${p.description}</p>
            <a href="/bad_ui/products/product/?id=${p.id}" id="view-product-button" class="btn btn-outline-secondary mt-auto">View</a>
          </div>
        </div>
      </div>
    `);
  });
}