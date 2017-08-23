console.log("Good morning Mohamed")

let button = $("#goForward")
let input = $("#nameInput")
let inputName = input.val()

button.on("click", movetoNextPage)

function movetoNextPage() {
  console.log("Changing web page")
  window.location.href='game.html'
  // allQuestions[1]
}
