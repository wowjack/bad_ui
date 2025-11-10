// bootstrap dropdowns dont really support nesting
// this is a hacky way to make sure clicking on an item inside the dropdown doesn't close the entire dropdown

$(() => {
  // Handle all nested dropdown toggles
  $('.nested-dropdown-toggle').on('click', function(e) {

    e.preventDefault();
    e.stopPropagation();
    
    // Get the submenu for this toggle
    const submenuId = $(this).data('submenu');
    const $submenu = $('#' + submenuId);
    
    // If this submenu is already open, close it
    if ($submenu.hasClass('show')) {
      $submenu.removeClass('show');
      return;
    }
    
    // Open this dropdown
    $submenu.addClass('show');
  });

  // Handle the search form
  $('#search-form').on('submit', function(e) {
    e.preventDefault();
        
    const query = $('#search-input').val().trim();
        
    if (query) {
      window.location.href = `/products/search/?query=${encodeURIComponent(query)}`;
    }
  });

  $("#cart-remove-all").on("click", () => {
    window.localStorage.clear();
    window.location.href = "/cart";
  })
});
