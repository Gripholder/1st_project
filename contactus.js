let contactSubmit = $("#contactSubmit")
let head1 = $("h1")
let inputChange = $("input").val()

contactSubmit.on("click", response)

function response() {
  head1.html("Thank you for your request..")
}
