// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Данные игр на основе серии Call of Duty [web:13][web:22]
  const games = [
    {
      title: "Call of Duty: Black Ops 7",
      desc: "2035 год, самый большой Black Ops. Доступна на PC, Xbox, PlayStation.",
      year: 2026,
    },
    {
      title: "Call of Duty: Modern Warfare III",
      desc: "Интенсивные бои в современном сеттинге.",
      year: 2023,
    },
    {
      title: "Call of Duty: Black Ops 6",
      desc: "Новая глава в подсерии Black Ops.",
      year: 2024,
    },
  ];

  const news = [
    {
      title: "Black Ops 7 вышла!",
      desc: "Игра доступна на всех платформах. Мир на краю пропасти в 2035.",
      date: "07.04.2026",
    },
    {
      title: "Новый сезон в MWIII",
      desc: "Обновления с оружием и картами.",
      date: "01.04.2026",
    },
  ];

  // Заполнение игр
  const gamesGrid = document.getElementById("gamesGrid");
  games.forEach((game) => {
    const card = createCard(game.title, game.desc, game.year);
    gamesGrid.appendChild(card);
  });

  // Заполнение новостей
  const newsGrid = document.getElementById("newsGrid");
  news.forEach((item) => {
    const card = createNewsCard(item.title, item.desc, item.date);
    newsGrid.appendChild(card);
  });

  // Гамбургер меню
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Плавная прокрутка
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

function createCard(title, desc, year) {
  const card = document.createElement("div");
  card.className = "game-card";
  card.innerHTML = `
        <div class="card-img">${title}</div>
        <div class="card-content">
            <h3 class="card-title">${title}</h3>
            <p class="card-desc">${desc}</p>
            <p>${year}</p>
        </div>
    `;
  return card;
}

function createNewsCard(title, desc, date) {
  const card = document.createElement("div");
  card.className = "news-card";
  card.innerHTML = `
        <div class="card-img">News</div>
        <div class="card-content">
            <h3 class="card-title">${title}</h3>
            <p class="card-desc">${desc}</p>
            <p>${date}</p>
        </div>
    `;
  return card;
}
