

const app = document.getElementById("app");
app.style.textAlign = "center";
app.style.fontFamily = "Arial, sans-serif";
app.justifyContent = "center";
app.alignItems = "center";

function showMessage(text, color = "#4CAF50") {
  let resultDiv = document.getElementById("resultMessage");
  if (!resultDiv) {
    resultDiv = document.createElement("div");
    resultDiv.id = "resultMessage";
    app.appendChild(resultDiv);
  }
  resultDiv.textContent = text;
  resultDiv.style.backgroundColor = color;
  resultDiv.style.display = "block";
}

function clearApp() {
  app.innerHTML = "";
}

function startGame() {
  clearApp();
  const title = document.createElement("h2");
  title.textContent = "Choose a Puzzle:";
  title.style.textAlign = "center";
  title.style.fontSize = "40px";
  
  const passwordBtn = document.createElement("button");
  passwordBtn.textContent = "🔐 Password Puzzle";
  passwordBtn.onclick = passwordPuzzle;

  const mathBtn = document.createElement("button");
  mathBtn.textContent = "🧠 Math Puzzle";
  mathBtn.onclick = mathPuzzle;

  app.appendChild(title);
  app.appendChild(passwordBtn);
  app.appendChild(mathBtn);
}

function passwordPuzzle() {
  clearApp();

  const questionSet = [
   { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { question: "What is the boiling point of water in Celsius?", answer: "100" },
    { question: "What is the chemical symbol for gold?", answer: "Au" },
    { question: "What is the capital of Japan?", answer: "Tokyo" },
    { question: "What is the currency of the United States?", answer: "Dollar" },
    { question: "What is the hardest natural substance on Earth?", answer: "Diamond" },
    { question: "What is the capital of Australia?", answer: "Canberra" },
    { question: "What is the largest desert in the world?", answer: "Sahara" },
    { question: "What is the chemical formula for water?", answer: "H2O" },
    { question: "What is the longest river in the world?", answer: "Nile" },
    { question: "What is the capital of Canada?", answer: "Ottawa" },
    { question: "What is the largest continent?", answer: "Asia" },
    { question: "What is the main ingredient in sushi?", answer: "Rice" },
    { question: "What is the chemical symbol for silver?", answer: "Ag" },
    { question: "What is the capital of Italy?", answer: "Rome" },
    { question: "What is the largest country in the world?", answer: "Russia" },
    { question: "What is the capital of Germany?", answer: "Berlin" },
    { question: "What is the main ingredient in chocolate?", answer: "Cocoa" },
    { question: "What is the capital of Spain?", answer: "Madrid" },
    { question: "What is the chemical symbol for oxygen?", answer: "O2" },
    { question: "What is the capital of India?", answer: "New Delhi" },
    { question: "What is the chemical symbol for carbon dioxide?", answer: "CO2" },
    { question: "What is the capital of Russia?", answer: "Moscow" },
    { question: "What is the capital of China?", answer: "Beijing" },
  ];
  const randomQuestion = questionSet[Math.floor(Math.random() * questionSet.length)];

  const questionDiv = document.createElement("p");
  questionDiv.textContent = randomQuestion.question;
  questionDiv.style.fontSize = "40px";

  const answerInput = document.createElement("input");
  answerInput.type = "text";
  answerInput.placeholder = "Your answer here...";

  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit";

  const backButton = document.createElement("button");
  backButton.textContent = "🔙 Back";
  backButton.onclick = startGame;

const countDown = document.createElement("div");
  countDown.className = "countdown";

  app.appendChild(questionDiv);
  app.appendChild(answerInput);
  app.appendChild(submitButton);
   app.appendChild(backButton);
  app.appendChild(countDown);
 

  let timeLeft = 30;
  countDown.innerText = `Time left: ${timeLeft} seconds`;

  const timer = setInterval(() => {
    timeLeft--;
    countDown.innerText = `Time left: ${timeLeft} seconds`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      showMessage("⏰ Time's up! You couldn't escape.", "#f44336");
      submitButton.disabled = true;
    }
  }, 1000);

  submitButton.onclick = function () {
    const userAnswer = answerInput.value.trim();
    if (userAnswer.toLowerCase() === randomQuestion.answer.toLowerCase()) {
      clearInterval(timer);
      showMessage("✅ Door Opened! You can escape now!", "#4CAF50");
      submitButton.disabled = true;
    } else {
      showMessage("❌ Incorrect! Try again.", "#ff9800");
    }
  };
}

function mathPuzzle() {
  clearApp();

  const questions = [
   { q: "What's 3 × 7 + 1?",a: 22 },
    { q: "What's 10 + 5?",a: 15 },
    { q: "What's 8 × 6?",a: 48 },
    { q: "What's 15 - 7?",a: 8 },
    { q: "What's 100 ÷ 5?",a: 20 },
    { q: "What's 9 + 12?",a: 21 },
    { q: "What's 20 - 4?",a: 16 },
    { q: "What's 7 × 4?",a: 28 },
    { q: "What's 18 ÷ 2?",a: 9 },
    { q: "What's 5 + 9 + 1?",a: 15 },
    { q: "What's 30 ÷ 3?",a: 10 },
    { q: "What's 2 × 10?",a: 20 },
    { q: "What's 40 - 8?",a: 32 },
    { q: "What's 16 + 3?",a: 19 },
    { q: "What's 12 × 2?",a: 24 },
    { q: "What's 9 × 5?",a: 45 },
    { q: "What's 100 - 25?",a: 75 },
    { q: "What's 60 ÷ 6?",a: 10 },
    { q: "What's 50 + 25?",a: 75 },
    { q: "What's 3 × 3 × 3?",a: 27 },
    { q: "What's 81 ÷ 9?",a: 9 },
    { q: "What's 11 + 11?",a: 22 },
    { q: "What's 13 + 17?",a: 30 },
    { q: "What's 45 ÷ 5?",a: 9 },
    { q: "What's 14 + 14?",a: 28 }
  ];

  let index = 0
  let score = 0;

  const questionText = document.createElement("p");
  questionText.style.fontSize='40px';
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Answer...";

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";

  const backButton = document.createElement("button");
  backButton.textContent = "🔙 Back";
  backButton.onclick = startGame;

  const showQuestion = () => {
    if (index < questions.length) {
      questionText.textContent = `Q${index + 1}: ${questions[index].q}`;
      input.value = "";
    } else {
      showMessage(`🎉 Quiz Over! Your score: ${score}/${questions.length}`);
      nextBtn.disabled = true;
    }
  };

  nextBtn.onclick = () => {
    if (input.value.trim() === questions[index].a) {
      score++;
    }
    index++;
    showQuestion();
  };

  app.appendChild(questionText);
  app.appendChild(input);
  app.appendChild(nextBtn);
  app.appendChild(backButton);
  showQuestion();
}

function getUserName() {
  clearApp();

  const title = document.createElement("h1");
  title.textContent = "🔐 Escape the Room";
  title.style.textAlign = "center";

  const label = document.createElement("label");
  label.textContent = "Enter your name: ";
  label.setAttribute("for", "name");
  label.style.fontSize = "25px";
 

  const input = document.createElement("input");
  input.id = "name";
  input.type = "text";
  input.placeholder = "Your Name";

  const button = document.createElement("button");
  button.textContent = "Start Game";
  
  
  button.onclick = () => {
    if (input.value.trim() !== "") {
      startGame();
    } else {
      showMessage("⚠️ Please enter your name.", "#f44336");
    }
  };

  app.appendChild(title);
  app.appendChild(label);
  app.appendChild(input);
  app.appendChild(button);
}

window.onload = getUserName;
