console.log("Welcome to the game page Mohamed")

let counter = 1
let goBack = $("#goBack")
// let questionsDisplay = $('<button class="button1" href="#">Click me</button>')

$("h3").html("When was Alfa Romeo first founded?")
// $(".button1").css({"margin-left": "2%", "margin-top": "1%"})
// $(".questinos").children.html("button type="button" placeholder="hey"", "hey")

// counter that starts 0, use that to access the the first item in allQuestion

let allQuestions = [
  {
    question: "Don't worry about it",
    choices: ["412", "124", "421", "564"],
    answer: "412"
  },
  {
    question: "When was Alfa Romeo first founded?",
    choices: ["1909", "1960", "2012", "1930"],
    answer: "1909"
  },
  {
    question: "What record is the Alfa Romeo Giulia is holding?",
    choices: ["Quickest 4-door sedan ever", "Quickest 4-door sedan around Nürburgring", "Quickest car ever", "Quickest car Nürburgring"],
    answer: "Quickest 4-door sedan around Nürburgring"
  },
  {
    question: "When did Alfa Romeo come back to the U.S?",
    choices: ["2001", "2009", "2015", "2017"],
    answer: "2015"
  },
  {
    question: "How many hoursepower does the Giulia Quadrifoglio have?",
    choices: ["280", "305", "443", "505"],
    answer: "505"
  },
  {
    question: "Which Alfa Romeo comes with standard AWD?",
    choices: ["4C", "Giulietta", "Giulia", "Stelvio"],
    answer: "Stelvio"
  },
  {
    question: "What engine does the non-Quadrifoglio Stelvio comes in?",
    choices: ["2.9T", "2.0T", "3.0T", "1.7T"],
    answer: "2.0"
  },
  {
    question: "What kind of drivetrain does Giulia Quadrifoglio have?",
    choices: ["AWD", "FWD", "4WD", "RWD"],
    answer: "RWD"
  },
  {
    question: "What is the top speed on Giulia Ti?",
    choices: ["120 mph", "191 mph", "149 mph", "230 mph"],
    answer: "149 mph"
  },
  {
    question: "Which of the following is standard on Giulia Ti?",
    choices: ["Adaptive cruise control", "Lane depature", "Active suspension", "Navigation system"],
    answer: "Navigation system"
  },
  {
    question: "How quick can the Stelvio get to 60 mph from a dead start?",
    choices: ["3.8s", "2.3s", "5.1s", "3.9s"],
    answer: "3.9s"
  }
]

// function answersCheck() {
//   let counter = 0
//   if(firstButton.text() === allQuestions[counter].answer) {
//     $(".options3").html("You are correct!").css({"background-color": "rgba(0,100,0,0.5)",  "margin-left": "140px"})
//   } else {
//     $(".options3").html("You're answer is wrong!").css({"background-color": "rgba(100,0,0,0.5)", "margin-left": "116px"})
//   }
//   counter++
// }


// make a new nextQuestion function, increment the counter, use the counter to access the
// allQuestions[counter].choices[3]


for(let i = 0; i < allQuestions.length; i++){
  $(".buttons").eq(i).text(allQuestions[counter].choices[i])
}
//
let firstButton = $(".buttons").eq(0)
let secondButton = $(".buttons").eq(1)
let thirdButton = $(".buttons").eq(2)
let fourthButton = $(".buttons").eq(3)
let goNext = $("#goNext")

firstButton.on("click", checkAnswer1)
secondButton.on("click", checkAnswer2)
thirdButton.on("click", checkAnswer3)
fourthButton.on("click", checkAnswer4)
goNext.on("click", switchQuestions2)
goBack.on("click", goBackwards)


function checkAnswer1() {
  if(firstButton.text() === allQuestions[counter].answer){
    $(".options3").html("You are correct!").css({"background-color": "rgba(0,100,0,0.5)",  "margin-left": "140px"})
  } else {
    $(".options3").html("You're answer is wrong!").css({"background-color": "rgba(100,0,0,0.5)", "margin-left": "116px"})
  }
}
function checkAnswer2() {
  if(secondButton.text() === allQuestions[counter].answer){
    $(".options3").html("You are correct!").css({"background-color": "rgba(0,100,0,0.5)",  "margin-left": "140px"})
  } else {
    $(".options3").html("You're answer is wrong!").css({"background-color": "rgba(100,0,0,0.5)", "margin-left": "116px"})
  }
}
function checkAnswer3() {
  if(thirdButton.text() === allQuestions[counter].answer){
    $(".options3").html("You are correct!").css({"background-color": "rgba(0,100,0,0.5)",  "margin-left": "140px"})
  } else {
    $("#options3").html("You're answer is wrong!").css({"background-color": "rgba(100,0,0,0.5)", "margin-left": "116px"})
  }
}
function checkAnswer4() {
  if(fourthButton.text() === allQuestions[counter].answer){
    $(".options3").html("You are correct!").css({"background-color": "rgba(0,100,0,0.5)",  "margin-left": "140px"})
  } else {
    $("#options3").html("You're answer is wrong!").css({"background-color": "rgba(100,0,0,0.5)", "margin-left": "116px"})
  }
}

function switchQuestions2() {
  for(let i = 0; i < allQuestions[counter].choices.length; i++){
    $(".buttons").eq(i).text(allQuestions[counter].choices[i])
  }
  $("h3").text(allQuestions[counter].question)
   return counter = counter + 1
  // goNext.on("click", switchQuestions3)
  // goBack.on("click", href="game.js")
}

function goBackwards() {
  for(let i = 0; i < allQuestions[counter].choices.length; i++){
    $(".buttons").eq(i).text(allQuestions[counter].choices[i])
  }
  $("h3").text(allQuestions[counter].questions)
  return counter = counter - 1
}
// function switchQuestions3() {
//   for(let i = 0; i < allQuestions.question3.choices.length; i++){
//     $(".buttons").eq(i).text(allQuestions.question3.choices[i])
//   }
//   $("h3").text(allQuestions.question3.question)
//   goNext.on("click", switchQuestions4)
//   goBack.on
// }
// function switchQuestions4() {
//   for(let i = 0; i < allQuestions.question4.choices.length; i++){
//     $(".buttons").eq(i).text(allQuestions.question4.choices[i])
//   }
//   $("h3").text(allQuestions.question4.question)
//   goNext.on("click", switchQuestions5)
// }
// function switchQuestions5() {
//   for(let i = 0; i < allQuestions.question5.choices.length; i++){
//     $(".buttons").eq(i).text(allQuestions.question5.choices[i])
//   }
//   $("h3").text(allQuestions.question5.question)
//   goNext.on("click", switchQuestions6)
// }
// function switchQuestions6() {
//   for(let i = 0; i < allQuestions.question6.choices.length; i++){
//     $(".buttons").eq(i).text(allQuestions.question6.choices[i])
//   }
//   $("h3").text(allQuestions.question6.question)
//   goNext.on("click", switchQuestions7)
// }
// function switchQuestions7() {
//   for(let i = 0; i < allQuestions.question7.choices.length; i++){
//     $(".buttons").eq(i).text(allQuestions.question7.choices[i])
//   }
//   $("h3").text(allQuestions.question7.question)
//   goNext.on("click", switchQuestions8)
// }
// function switchQuestions8() {
//   for(let i = 0; i < allQuestions.question8.choices.length; i++){
//     $(".buttons").eq(i).text(allQuestions.question8.choices[i])
//   }
//   $("h3").text(allQuestions.question8.question)
//   goNext.on("click", switchQuestions9)
// }
// function switchQuestions9() {
//   for(let i = 0; i < allQuestions.question9.choices.length; i++){
//     $(".buttons").eq(i).text(allQuestions.question9.choices[i])
//   }
//   $("h3").text(allQuestions.question9.question)
//   goNext.on("click", switchQuestions10)
// }
// function switchQuestions10() {
//   for(let i = 0; i < allQuestions.question10.choices.length; i++){
//     $(".buttons").eq(i).text(allQuestions.question10.choices[i])
//   }
//   $("h3").text(allQuestions.question10.question)
// }
//
// function checkAnswer5() {
//   if(firstButton.text() === allQuestions.question2.answer){
//     $(".options3").html("You are correct!").css({"background-color": "rgba(0,100,0,0.5)",  "margin-left": "140px"})
//   } else {
//     $(".options3").html("You're answer is wrong!").css({"background-color": "rgba(100,0,0,0.5)", "margin-left": "116px"})
//   }
// }
