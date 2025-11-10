$(() => {
  let shippingData = {};
  let paymentData = {};
  
  // Step 1
  $('#shipping-form').on('submit', e => {
    e.preventDefault();
    $('#step-2').show();
  });
  
  // Step 2: Payment Form
  $('#payment-form').on('submit', e => {
    e.preventDefault();
    $('#order-success-message').show();
  });
  
  // Step 3: Place Order
  $('#place-order-btn').on('click', function(e) {
    e.preventDefault();
    
    console.log('Order placed!');
    console.log('Shipping:', shippingData);
    console.log('Payment:', paymentData);
    
    // Generate random order number
    const orderNumber = Math.floor(Math.random() * 1000000);
    $('#order-number').text(orderNumber);
    
    // Show confirmation below (no scroll, no indication)
    $('#step-4').slideDown(300);
    
    // Disable the place order button
    $(this).prop('disabled', true).text('Order Placed');
  });
});