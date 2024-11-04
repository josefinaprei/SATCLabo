const questions = [
    {
      text: "“The country runs better with a good-looking man in the White House. I mean, look what happened with Nixon. No one wanted to fuck him, so he fucked everyone.”",
      options: [
        { img: "Imagenes/samantha-quiz.jpg", name: "Samantha", correct: true },
        { img: "Imagenes/charlotte-quiz.jpg", name: "Charlotte", correct: false },
        { img: "Imagenes/carrie-quiz.webp", name: "Carrie", correct: false },
        { img: "Imagenes/miranda-quiz.webp", name: "Miranda", correct: false }
      ]
    },
    {
        text: "“When I first moved to New York and I was totally broke, sometimes I bought Vogue instead of dinner. I found it fed me more.”",
        options: [
          { img: "Imagenes/samantha-quiz.jpg", name: "Samantha", correct: false },
          { img: "Imagenes/charlotte-quiz.jpg", name: "Charlotte", correct: false },
          { img: "Imagenes/carrie-quiz.webp", name: "Carrie", correct: true },
          { img: "Imagenes/miranda-quiz.webp", name: "Miranda", correct: false }
        ]
    },
    {
        text: "“I read that if you don't have sex for a year, you can actually become revirginized.”",
        options: [
          { img: "Imagenes/samantha-quiz.jpg",name: "Samantha", correct: false },
          { img: "Imagenes/charlotte-quiz.jpg", name: "Charlotte", correct: true },
          { img: "Imagenes/carrie-quiz.webp", name: "Carrie", correct: false },
          { img: "Imagenes/miranda-quiz.webp", name: "Miranda", correct: false }
        ]
    },
    {
        text: "“I revealed too much too soon. I was emotionally slutty.”",
        options: [
          { img: "Imagenes/samantha-quiz.jpg", name: "Samantha",correct: false },
          { img: "Imagenes/charlotte-quiz.jpg",name: "Charlotte", correct: false },
          { img: "Imagenes/carrie-quiz.webp", name: "Carrie", correct: true },
          { img: "Imagenes/miranda-quiz.webp", name: "Miranda", correct: false }
        ]
    },
    {
        text: "“What's the big mystery? It's my clitoris, not the Sphinx.”",
        options: [
          { img: "Imagenes/samantha-quiz.jpg", name: "Samantha", correct: false },
          { img: "Imagenes/charlotte-quiz.jpg", name: "Charlotte", correct: false },
          { img: "Imagenes/carrie-quiz.webp", name: "Carrie", correct: false },
          { img: "Imagenes/miranda-quiz.webp", name: "Miranda", correct: true }
        ]
    },
    {
        text: "“I'd like a cheeseburger, please, large fries, and a Cosmopolitan!”",
        options: [
          { img: "Imagenes/samantha-quiz.jpg", name: "Samantha", correct: false },
          { img: "Imagenes/charlotte-quiz.jpg", name: "Charlotte", correct: false },
          { img: "Imagenes/carrie-quiz.webp", name: "Carrie", correct: true },
          { img: "Imagenes/miranda-quiz.webp", name: "Miranda", correct: false }
        ]
    },
    {
        text: "“Listen to me. The right guy is an illusion. Start living your lives.”",
        options: [
          { img: "Imagenes/samantha-quiz.jpg",  name: "Samantha", correct: true },
          { img: "Imagenes/charlotte-quiz.jpg", name: "Charlotte", correct: false },
          { img: "Imagenes/carrie-quiz.webp", name: "Carrie", correct: false },
          { img: "Imagenes/miranda-quiz.webp", name: "Miranda", correct: false }
        ]
    },
    {
        text: "“Don't play hard to get with a man who's hard to get.”",
        options: [
          { img: "Imagenes/samantha-quiz.jpg", name: "Samantha", correct: true },
          { img: "Imagenes/charlotte-quiz.jpg", name: "Charlotte", correct: false },
          { img: "Imagenes/carrie-quiz.webp", name: "Carrie", correct: false },
          { img: "Imagenes/miranda-quiz.webp", name: "Miranda",  correct: false }
        ]
    },
    {
        text: "“And, finally, the most important breakup rule: No matter who broke your heart, or how long it takes to heal, you'll never go through it without your friends.”",
        options: [
          { img: "Imagenes/samantha-quiz.jpg", name: "Samantha", correct: false },
          { img: "Imagenes/charlotte-quiz.jpg", name: "Charlotte", correct: false },
          { img: "Imagenes/carrie-quiz.webp", name: "Carrie", correct: true },
          { img: "Imagenes/miranda-quiz.webp", name: "Miranda", correct: false }
        ]
    },
    {
        text: "“He's just not that into you. So move on.”",
        options: [
          { img: "Imagenes/samantha-quiz.jpg", name: "Samantha", correct: false },
          { img: "Imagenes/charlotte-quiz.jpg", name: "Charlotte", correct: false },
          { img: "Imagenes/carrie-quiz.webp", name: "Carrie", correct: false },
          { img: "Imagenes/miranda-quiz.webp", name: "Miranda", correct: true }
        ]
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const startButton = document.getElementById("start-button");
  const questionContainer = document.getElementById("question-container");
  const resultsContainer = document.getElementById("results-container");
  const questionElement = document.getElementById("question");
  const answerOptions = document.getElementById("answer-options");
  const resultsMessage = document.getElementById("results-message");
  const scoreDisplay = document.getElementById("score");
  
  startButton.addEventListener("click", startQuiz);
  
  function startQuiz() {
    startButton.style.display = "none";
    questionContainer.style.display = "block";
    showQuestion();
  }
  
  function showQuestion() {
    questionElement.innerText = questions[currentQuestionIndex].text;
    answerOptions.innerHTML = "";
    questions[currentQuestionIndex].options.forEach(option => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.innerHTML = `
      <img src="${option.img}" alt="Option Image">
      <p class="character-name">${option.name}</p>
     `;
     optionElement.addEventListener("click", () => handleAnswer(option.correct));
    answerOptions.appendChild(optionElement);
    });
  }
  
  function handleAnswer(isCorrect) {
    if (isCorrect) score++;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    questionContainer.style.display = "none";
    document.getElementById("title").style.display = "none";
    resultsContainer.style.display = "flex";
    scoreDisplay.innerText = `You scored ${score} out of ${questions.length}`;
    
    const resultImage = document.getElementById("result-image");
  
    if (score <= 4) {
      resultsMessage.innerText = "Watching SATC one more time never hurted anyone!";
      resultImage.src = "Imagenes/triste.png";
    } else if (score <= 7) {
      resultsMessage.innerText = "Well, you did pay some attention to  SATC. Well done! ";
      resultImage.src = "Imagenes/corazones.png";
    } else {
      resultsMessage.innerText = "It seems like someone watched SATC more than once. Congrats! You deserve a dry martini.";
      resultImage.src = "Imagenes/trofeo.png";
    }
    
    resultImage.style.display = "block";
  }
  