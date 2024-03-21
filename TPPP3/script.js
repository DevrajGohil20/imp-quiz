const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Chloroplast", "Endoplasmic Reticulum"],
      answer: "Mitochondria"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "William Faulkner"],
      answer: "Harper Lee"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      answer: "H2O"
    },
    {
      question: "Which element has the atomic number 6?",
      options: ["Carbon", "Oxygen", "Iron", "Hydrogen"],
      answer: "Carbon"
    },
    {
      question: "Who discovered gravity?",
      options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
      answer: "Isaac Newton"
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      answer: "Mount Everest"
    },
    {
      question: "What is the chemical formula for table salt?",
      options: ["NaCl", "HCl", "KCl", "CaCl2"],
      answer: "NaCl"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
    }
  ];
  
  const quizContainer = document.getElementById('quiz');
  const submitButton = document.getElementById('submit');
  
  function buildQuiz() {
    questions.forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question');
      questionDiv.innerHTML = `<h2>Question ${index + 1}:</h2>
                               <p>${question.question}</p>`;
  
      question.options.forEach((option, optionIndex) => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `question${index}`;
        radio.value = option;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));
        questionDiv.appendChild(label);
      });
  
      quizContainer.appendChild(questionDiv);
    });
  }
  
  function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.question');
    let correctAnswers = 0;
  
    questions.forEach((question, index) => {
      const answerContainer = answerContainers[index];
      const selector = `input[name=question${index}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      if (userAnswer === question.answer) {
        correctAnswers++;
        answerContainer.style.color = 'green';
      } else {
        answerContainer.style.color = 'red';
        alert(`The correct answer is: ${question.answer}`);
      }
    });
  
    alert(`You got ${correctAnswers} out of ${questions.length} questions correct.`);
  }
  
  buildQuiz();
  
  submitButton.addEventListener('click', showResults);
  