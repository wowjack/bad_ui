function show_modal() {
  var modal = new bootstrap.Modal($('#login-modal'));
  modal.show()
}


$(() => {
  $("#login-form").on("submit", e => {
    e.preventDefault();
    $("#login-modal-username").text($("#login-username-input").val())
    show_modal();
    setTimeout(() => window.location.href = "/bad_ui/index", 5000);
  });
})