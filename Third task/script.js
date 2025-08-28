
    // NAVIGATION
    const navQuiz = document.getElementById('nav-quiz');
    const navCarousel = document.getElementById('nav-carousel');
    const navJoke = document.getElementById('nav-joke');

    const pageQuiz = document.getElementById('page-quiz');
    const pageCarousel = document.getElementById('page-carousel');
    const pageJoke = document.getElementById('page-joke');

    function showPage(page) {
      pageQuiz.style.display = 'none';
      pageCarousel.style.display = 'none';
      pageJoke.style.display = 'none';

      navQuiz.classList.remove('active');
      navCarousel.classList.remove('active');
      navJoke.classList.remove('active');

      if (page === 'quiz') {
        pageQuiz.style.display = 'block';
        navQuiz.classList.add('active');
      } else if (page === 'carousel') {
        pageCarousel.style.display = 'block';
        navCarousel.classList.add('active');
      } else if (page === 'joke') {
        pageJoke.style.display = 'block';
        navJoke.classList.add('active');
      }
    }

    navQuiz.addEventListener('click', () => showPage('quiz'));
    navCarousel.addEventListener('click', () => showPage('carousel'));
    navJoke.addEventListener('click', () => showPage('joke'));

    // --------------------------
    // QUIZ LOGIC
    const quizQuestions = [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: 1
      },
      {
        question: "What does HTTP stand for?",
        options: ["HyperText Transfer Protocol", "HighText Transfer Protocol", "HyperText Transmission Protocol", "HyperText Transfer Program"],
        answer: 0
      },
      {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: 1
      },
      {
        question: "What is the boiling point of water at sea level?",
        options: ["100°C", "90°C", "80°C", "120°C"],
        answer: 0
      }
    ];

    let currentQuizIndex = 0;
    let score = 0;
    let quizAnswered = false;

    const quizQuestionEl = document.getElementById('quiz-question');
    const quizOptionsEl = document.getElementById('quiz-options');
    const quizNextBtn = document.getElementById('quiz-next-btn');
    const quizScoreEl = document.getElementById('quiz-score');

    function loadQuiz() {
      quizAnswered = false;
      quizNextBtn.style.display = 'none';
      quizScoreEl.textContent = '';

      const current = quizQuestions[currentQuizIndex];
      quizQuestionEl.textContent = current.question;
      quizOptionsEl.innerHTML = '';

      current.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.addEventListener('click', () => selectAnswer(index, btn));
        quizOptionsEl.appendChild(btn);
      });
    }

    function selectAnswer(selectedIndex, btn) {
      if (quizAnswered) return;

      quizAnswered = true;
      const current = quizQuestions[currentQuizIndex];
      const buttons = quizOptionsEl.querySelectorAll("button");

      if (selectedIndex === current.answer) {
        btn.classList.add("correct");
        score++;
      } else {
        btn.classList.add("wrong");
        buttons[current.answer].classList.add("correct");
      }

      quizScoreEl.textContent = `Score: ${score} / ${quizQuestions.length}`;
      quizNextBtn.style.display = "inline-block";
    }

    quizNextBtn.addEventListener("click", () => {
      currentQuizIndex++;
      if (currentQuizIndex < quizQuestions.length) {
        loadQuiz();
      } else {
        quizQuestionEl.textContent = "🎉 Quiz Completed!";
        quizOptionsEl.innerHTML = "";
        quizNextBtn.style.display = "none";
        quizScoreEl.textContent = `Final Score: ${score} / ${quizQuestions.length}`;
      }
    });

    loadQuiz();

    // --------------------------
    // CAROUSEL LOGIC
    const carouselImages = [
      "image1.webp",
      "image2.webp",
      "image3.webp",
      
    ];

    let carouselIndex = 0;
    const carouselImageEl = document.getElementById("carousel-image");
    const carouselPrev = document.getElementById("carousel-prev");
    const carouselNext = document.getElementById("carousel-next");

    function showCarouselImage(index) {
      carouselImageEl.src = carouselImages[index];
    }

    carouselPrev.addEventListener("click", () => {
      carouselIndex = (carouselIndex - 1 + carouselImages.length) % carouselImages.length;
      showCarouselImage(carouselIndex);
    });

    carouselNext.addEventListener("click", () => {
      carouselIndex = (carouselIndex + 1) % carouselImages.length;
      showCarouselImage(carouselIndex);
    });

    showCarouselImage(carouselIndex);

    // --------------------------
    // JOKE GENERATOR LOGIC
    const jokes = [
      "Why don’t scientists trust atoms? Because they make up everything!",
      "Why was the math book sad? It had too many problems.",
      "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
      "Why do cows wear bells? Because their horns don’t work.",
      "Parallel lines have so much in common… it’s a shame they’ll never meet."
    ];

    const jokeText = document.getElementById("joke-text");
    const jokeBtn = document.getElementById("joke-btn");

    jokeBtn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * jokes.length);
      jokeText.textContent = jokes[randomIndex];
    });

