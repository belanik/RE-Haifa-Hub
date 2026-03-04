// menu.js — универсальное меню RE-Haifa
// Подключите этот файл на каждой странице:
// <script src="/`"></script>  (или с нужным относительным путём)
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

@media (max-width: 700px) {
      .top-nav { justify-content: flex-start; padding: 3px 5px; gap: 2px; }
      .top-nav a { font-size: 0.68em; padding: 3px 8px; }
    }

    .site-footer {
      background: #1b5e20;
      color: rgba(255,255,255,0.85);
      text-align: center;
      padding: 16px 20px;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      font-size: 0.85em;
      margin-top: 2rem;
    }
    .site-footer a {
      color: #ffd200;
      text-decoration: none;
      font-weight: 700;
    }
    .site-footer a:hover {
      text-decoration: underline;
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

  // Вставляем футер: заменяем существующий <footer> или добавляем в конец <body>
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    &copy; RE Haifa, 2025 &mdash; Экология, обмен и сообщество в Хайфе &nbsp;|&nbsp;
    <a href="mailto:rehaifahub@gmail.com">rehaifahub@gmail.com</a> &nbsp;|&nbsp;
    <a href="https://www.facebook.com/people/Re-Haifa/61575821814765/" target="_blank" rel="noopener">Facebook</a> &nbsp;|&nbsp;
    <a href="https://t.me/rehaifahub" target="_blank">Telegram</a>
  `;

  // Заменяем существующий footer если есть, иначе добавляем в конец body
  window.addEventListener("DOMContentLoaded", () => {
    const existingFooter = document.querySelector("footer");
    if (existingFooter) {
      existingFooter.replaceWith(footer);
    } else {
      document.body.appendChild(footer);
    }
  });
})();









