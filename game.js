let allQuestions = [
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
    answer: "2.0T"
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

let counter = 1
let counter2 = 0
let score = 0
let missed = 0

  let firstButton = $(".buttons").eq(0)
  let secondButton = $(".buttons").eq(1)
  let thirdButton = $(".buttons").eq(2)
  let fourthButton = $(".buttons").eq(3)
  let goNext = $("#goNext")
  let goBack = $("#goBack")

  firstButton.on("click", checkAnswer1)
  secondButton.on("click", checkAnswer2)
  thirdButton.on("click", checkAnswer3)
  fourthButton.on("click", checkAnswer4)
  goNext.on("click", switchQuestions2)
  goBack.on("click", goBackwards)


  function checkAnswer1() {
    if(firstButton.text() === allQuestions[counter - 1].answer){
      $(".options3").html("You are correct!").css({"background-color": "rgba(0,100,0,0.5)",  "margin-left": "140px"})
        return score++
    } else {
      $(".options3").html("You're answer is wrong!").css({"background-color": "rgba(100,0,0,0.5)", "margin-left": "116px"})
        return missed++
    }
  }

  function checkAnswer2() {
    if(secondButton.text() === allQuestions[counter].answer){
      $(".options3").html("You are correct!").css({"background-color": "rgba(0,100,0,0.5)",  "margin-left": "140px"})
        return score++
    } else {
      $(".options3").html("You're answer is wrong!").css({"background-color": "rgba(100,0,0,0.5)", "margin-left": "116px"})
        return missed++
    }
  }

  function checkAnswer3() {
    if(thirdButton.text() === allQuestions[counter].answer){
      $(".options3").html("You are correct!").css({"background-color": "rgba(0,100,0,0.5)",  "margin-left": "140px"})
        return score++
    } else {
      $("#options3").html("You're answer is wrong!").css({"background-color": "rgba(100,0,0,0.5)", "margin-left": "116px"})
    }
      return missed++
  }

  function checkAnswer4() {
    if(fourthButton.text() === allQuestions[counter].answer){
      $(".options3").html("You are correct!").css({"background-color": "rgba(0,100,0,0.5)",  "margin-left": "140px"})
        return score++
    } else {
      $("#options3").html("You're answer is wrong!").css({"background-color": "rgba(100,0,0,0.5)", "margin-left": "116px"})
    }
      return missed++
  }

  function switchQuestions2() {
    for(let i = 0; i < allQuestions[counter].choices.length; i++){
      $(".buttons").eq(i).text(allQuestions[counter].choices[i])
    }
    $("h3").text(allQuestions[counter].question)
    if(counter2 >= 1 && counter >= 1){
      counter = counter + 1, counter2 = counter2 + 1
      for(let i = 0; i < allQuestions.length; i++){
        $(".head3").text(allQuestions[counter].question)
        $(".buttons").eq(i).text(allQuestions[counter].choices[i])
      }
    } else {
      counter2 = 1
      for(let i = 0; i < allQuestions.length; i++){
        $(".head3").text(allQuestions[counter].question)
        $(".buttons").eq(i).text(allQuestions[counter].choices[i])
      }
    }
    console.log(counter2);
    $("li").eq(0).html("Question number: " + "" + (counter2 + 1))
    $("li").eq(1).html("Correct Answers: " + "" + score)
    $("li").eq(2).html("Missed Answers: " + "" + missed)
    $(".options3").html("").css("background-color", "rgba(255,255,255,1)")
  }

  function goBackwards() {
    for(let i = 0; i < allQuestions[counter].choices.length; i++){
      $(".buttons").eq(i).text(allQuestions[counter].choices[i])
    }
    $("h3").text(allQuestions[counter].question)
    if(counter2 >= 1 && counter >= 1){
      counter = counter - 1, counter2 = counter2 - 1
      for(let i = 0; i < allQuestions.length; i++){
        $(".head3").text(allQuestions[counter].question)
        $(".buttons").eq(i).text(allQuestions[counter].choices[i])
      }
    } else if(counter === 0){
      window.location.href='index.html'
    } else {
      counter2 = 1
      for(let i = 0; i < allQuestions.length; i++){
        $(".head3").text(allQuestions[counter].question)
        $(".buttons").eq(i).text(allQuestions[counter].choices[i])
      }
    }
    $(".options3").html("").css("background-color", "rgba(255,255,255,1)")
    $("li").eq(0).html("Question number: " + "" + (counter2 + 1))
  }
