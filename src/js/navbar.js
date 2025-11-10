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
    
    // Close sibling dropdowns at the same level
    $(this).closest('ul').find('> li > .nested-dropdown-menu.show').removeClass('show');
    
    // Open this dropdown
    $submenu.addClass('show');
  });
  
  // Prevent closing parent dropdown when clicking inside nested dropdowns
  $('.nested-dropdown-menu').on('click', function(e) {
    e.stopPropagation();
  });
  
  // Close all nested dropdowns when parent closes
  $('#navbarDropdownMenu').on('hidden.bs.dropdown', function() {
    $('.nested-dropdown-menu').removeClass('show');
  });

  

  // Handle the search form
  $('#search-form').on('submit', function(e) {
    e.preventDefault();
        
    const query = $('#search-input').val().trim();
        
    if (query) {
      window.location.href = `/bad_ui/products/search/?query=${encodeURIComponent(query)}`;
    }
  });

  $("#cart-remove-all").on("click", () => {
    window.localStorage.clear();
    window.location.href = "/bad_ui/cart";
  })
});
