// menu.js — универсальное меню RE-Haifa с поддержкой языков
(function () {

  // ===== ТАБЛИЦА СООТВЕТСТВИЙ ЯЗЫКОВЫХ ВЕРСИЙ =====
  const langMap = {

    // КОРНЕВЫЕ СТРАНИЦЫ (русские)
    '/index.html':                          { en: '/english_version/index_en.html',                    he: '/hebrew_version/index_he.html' },
    '/eco-law-ru.html':                     { en: '/english_version/eco_law_en.html',                  he: '/hebrew_version/eco_law_he.html' },
    '/about_us.html':                       { en: '/english_version/about_us_en.html',                 he: '/hebrew_version/about_us_he.html' },
    '/programma.html':                      { en: '/english_version/en_program.html',                  he: '/hebrew_version/he_program.html' },
    '/textbookWM.html':                     { en: '/english_version/textbookWMen.html',                he: '/hebrew_version/textbookWM_he.html' },
    '/foodwasteprogramRU.html':             { en: '/english_version/en_program.html',                  he: '/hebrew_version/foodwasteprogram_he.html' },
    '/re-haifa-hub-project.html':           { en: '/english_version/re-haifa-hub-project_en.html',     he: '/hebrew_version/re-haifa-project_he.html' },

    // ДОКЛАДЫ ОЭСР
    '/oecd_reports/oecd_reports.html':      { en: '/oecd_reports/oecd_reports_en.html',                he: '/oecd_reports/oecd_reports_he.html' },
    '/oecd_reports/oecd_reports_en.html':   { ru: '/oecd_reports/oecd_reports.html',                  he: '/oecd_reports/oecd_reports_he.html' },
    '/oecd_reports/oecd_reports_he.html':   { ru: '/oecd_reports/oecd_reports.html',                  en: '/oecd_reports/oecd_reports_en.html' },

    // ЭКО-АНАЛИТИКА (папки названы по-разному)
    '/ecoanalytics_RU/index.html':          { en: '/eco-analitics_EN/index.html',                     he: '/eco-analitics_HEB/index.html' },
    '/eco-analitics_EN/index.html':         { ru: '/ecoanalytics_RU/index.html',                      he: '/eco-analitics_HEB/index.html' },
    '/eco-analitics_HEB/index.html':        { ru: '/ecoanalytics_RU/index.html',                      en: '/eco-analitics_EN/index.html' },

    // АНГЛИЙСКИЕ СТРАНИЦЫ
    '/english_version/index_en.html':                       { ru: '/index.html',                       he: '/hebrew_version/index_he.html' },
    '/english_version/eco_law_en.html':                     { ru: '/eco-law-ru.html',                  he: '/hebrew_version/eco_law_he.html' },
    '/english_version/about_us_en.html':                    { ru: '/about_us.html',                    he: '/hebrew_version/about_us_he.html' },
    '/english_version/en_program.html':                     { ru: '/programma.html',                   he: '/hebrew_version/he_program.html' },
    '/english_version/textbookWMen.html':                   { ru: '/textbookWM.html',                  he: '/hebrew_version/textbookWM_he.html' },
    '/english_version/re-haifa-hub-project_en.html':        { ru: '/re-haifa-hub-project.html',        he: '/hebrew_version/re-haifa-project_he.html' },
    '/english_version/position_on_waste_reform_en.html':    { ru: '/proposals_to_ministries/docs_proposal_to_memshala.html', he: '/hebrew_version/Position_on_waste_reform_HE.html' },

    // ИВРИТСКИЕ СТРАНИЦЫ
    '/hebrew_version/index_he.html':                        { ru: '/index.html',                       en: '/english_version/index_en.html' },
    '/hebrew_version/eco_law_he.html':                      { ru: '/eco-law-ru.html',                  en: '/english_version/eco_law_en.html' },
    '/hebrew_version/about_us_he.html':                     { ru: '/about_us.html',                    en: '/english_version/about_us_en.html' },
    '/hebrew_version/he_program.html':                      { ru: '/programma.html',                   en: '/english_version/en_program.html' },
    '/hebrew_version/textbookWM_he.html':                   { ru: '/textbookWM.html',                  en: '/english_version/textbookWMen.html' },
    '/hebrew_version/foodwasteprogram_he.html':             { ru: '/foodwasteprogramRU.html',           en: '/english_version/en_program.html' },
    '/hebrew_version/re-haifa-project_he.html':             { ru: '/re-haifa-hub-project.html',        en: '/english_version/re-haifa-hub-project_en.html' },
    '/hebrew_version/Position_on_waste_reform_HE.html':     { ru: '/proposals_to_ministries/docs_proposal_to_memshala.html', en: '/english_version/position_on_waste_reform_en.html' },
  };

  function getLangUrl(targetLang) {
    const path = window.location.pathname;
    const entry = langMap[path];
    if (entry && entry[targetLang]) return entry[targetLang];
    return null;
  }

  const urlRU = getLangUrl('ru');
  const urlEN = getLangUrl('en');
  const urlHE = getLangUrl('he');

  // Определяем текущий язык страницы
  const path = window.location.pathname;
  const isEN = path.includes('/english_version/') || path.includes('/eco-analitics_EN/');
  const isHE = path.includes('/hebrew_version/') || path.includes('/eco-analitics_HEB/');
  const isRU = !isEN && !isHE;

  // ===== СТИЛИ =====
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
    .top-nav a:hover { background: #388e3c; }
    .top-nav a.lang-active {
      background: #ffd200;
      color: #1b5e20;
      border-color: #ffd200;
    }
    .top-nav a.lang-disabled {
      opacity: 0.4;
      cursor: default;
      pointer-events: none;
    }
    body {
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
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
    .site-footer a:hover { text-decoration: underline; }
  `;
  document.head.appendChild(style);

  // ===== МЕНЮ =====
  const nav = document.createElement("nav");
  nav.className = "top-nav";
  nav.setAttribute("aria-label", "Навигация");

  // Кнопки языков
  const ruBtn = urlRU
    ? `<a href="${urlRU}" ${isRU ? 'class="lang-active"' : ''}>RU</a>`
    : `<a class="${isRU ? 'lang-active' : 'lang-disabled'}">RU</a>`;
  const enBtn = urlEN
    ? `<a href="${urlEN}" ${isEN ? 'class="lang-active"' : ''}>EN</a>`
    : `<a class="lang-disabled">EN</a>`;
  const heBtn = urlHE
    ? `<a href="${urlHE}" ${isHE ? 'class="lang-active"' : ''} lang="he">HE</a>`
    : `<a class="lang-disabled" lang="he">HE</a>`;

  nav.innerHTML = `
    <a href="/proposals_to_ministries/docs_proposal_to_memshala.html" style="color:#ffd200;">Позиция по реформе отходов</a>
    <a href="/foodwasteprogramRU.html" style="color:#ffd200;">FOOD WASTE PROGRAM</a>
    <a href="/ecoanalytics_RU/index.html">Эко-аналитика</a>
    <a href="/eco-law-ru.html">Эко законы Израиля</a>
    <a href="/programma.html">Циркулярная экономика</a>
    <a href="/textbookWM.html">Школа управления отходами</a>
    <a href="/oecd_reports/oecd_reports.html">Доклады ОЭСР</a>
    <a href="/about_us.html">Наша команда</a>
    <a href="https://www.facebook.com/people/Re-Haifa/61575821814765/" target="_blank" rel="noopener">Facebook</a>
    <a href="https://belanik.github.io/RE-Haifa-Hub/anketa-ru.html" target="_blank" style="color:#ffd200; font-weight:900;">Присоединиться к нам ➜</a>
    ${ruBtn}
    ${enBtn}
    ${heBtn}
  `;

  // Вставляем меню
  const slot = document.getElementById("menu-slot");
  if (slot) {
    slot.replaceWith(nav);
  } else {
    const header = document.querySelector("header");
    if (header) header.insertAdjacentElement("afterend", nav);
    else document.body.prepend(nav);
  }

  // ===== ФУТЕР =====
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    &copy; RE Haifa, 2025 &mdash; Экология, обмен и сообщество в Хайфе &nbsp;|&nbsp;
    <a href="mailto:rehaifa.info@gmail.com">rehaifa.info@gmail.com</a> &nbsp;|&nbsp;
    <a href="https://www.facebook.com/people/Re-Haifa/61575821814765/" target="_blank" rel="noopener">Facebook</a> &nbsp;|&nbsp;
    <a href="https://t.me/rehaifahub" target="_blank">Telegram</a>
  `;

  window.addEventListener("DOMContentLoaded", () => {
    const existingFooter = document.querySelector("footer");
    if (existingFooter) {
      existingFooter.replaceWith(footer);
    } else {
      document.body.appendChild(footer);
    }
  });

})();
