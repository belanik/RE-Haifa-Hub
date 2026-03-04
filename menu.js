// menu.js — универсальное меню RE-Haifa
// Подключите этот файл на каждой странице:
// <script src="/menu.js"></script>  (или с нужным относительным путём)
// Замените <div id="menu-slot"></div> на этот скрипт

(function () {
  const style = document.createElement("style");
  style.textContent = `
    .top-nav {
      background: #1b5e20;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 4px;
      padding: 6px 10px;
      z-index: 100;
      position: relative;
    }
    .top-nav a {
      color: #fff;
      text-decoration: none;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.78em;
      font-weight: 700;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      white-space: nowrap;
      background: #2e7d32;
      border: 1px solid rgba(255,255,255,0.25);
      transition: background 0.2s;
    }
    .top-nav a:hover {
      background: #388e3c;
    }
    .top-nav .nav-home {
      background: #1b5e20;
      font-size: 0.9em;
      letter-spacing: 0.03em;
      border: 1px solid rgba(255,255,255,0.4);
    }
    .top-nav .nav-home:hover {
      background: #2e7d32;
    }
    @media (max-width: 700px) {
      .top-nav { justify-content: flex-start; padding: 3px 5px; gap: 2px; }
      .top-nav a { font-size: 0.68em; padding: 3px 8px; }
    }
  `;
  document.head.appendChild(style);

  // Определяем глубину страницы, чтобы правильно построить путь к корню
  function getRootPath() {
    const depth = window.location.pathname.split("/").filter(Boolean).length - 1;
    return depth > 0 ? "../".repeat(depth) : "./";
  }

  const root = getRootPath();

  const nav = document.createElement("nav");
  nav.className = "top-nav";
  nav.setAttribute("aria-label", "Навигация");
  nav.innerHTML = `
    <a class="nav-home" href="${root}index.html">🌿 Re-Haifa</a>
    <a href="${root}foodwasteprogramRU.html" style="color:#ffd200;">Позиция по реформе отходов</a>
    <a href="${root}foodwasteprogramRU.html" style="color:#ffd200;">FOOD WASTE PROGRAM</a>
    <a href="${root}ecoanalytics_RU/index.html">Эко-аналитика</a>
    <a href="${root}eco-law-ru.html">Эко законы Израиля</a>
    <a href="${root}programma.html">Циркулярная экономика</a>
    <a href="${root}textbookWM.html">Школа управления отходами</a>
    <a href="${root}oecd_reports/oecd_reports.html">Доклады ОЭСР</a>
    <a href="${root}about_us.html">Наша команда</a>
    <a href="https://www.facebook.com/people/Re-Haifa/61575821814765/" target="_blank" rel="noopener">Мы на Facebook</a>
    <a href="https://belanik.github.io/RE-Haifa-Hub/anketa-ru.html" target="_blank" style="color:#ffd200; font-weight:900;">Присоединиться к нам ➜</a>
  `;

  // Вставляем меню: в div#menu-slot если есть, иначе сразу после <header>
  const slot = document.getElementById("menu-slot");
  if (slot) {
    slot.replaceWith(nav);
  } else {
    const header = document.querySelector("header");
    if (header) header.insertAdjacentElement("afterend", nav);
    else document.body.prepend(nav);
  }
})();
