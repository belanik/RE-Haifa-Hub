// menu_he.js — תפריט ניווט עברי RE-Haifa
// הוסף לכל דף בעברית: <script src="/hebrew_version/menu_he.js"></script>

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
      direction: rtl;
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
      direction: rtl;
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

  const nav = document.createElement("nav");
  nav.className = "top-nav";
  nav.setAttribute("aria-label", "ניווט");
  nav.innerHTML = `
    <a href="/hebrew_version/Position_on_waste_reform_HE.html" style="color:#ffd200;">עמדה בנושא רפורמת הפסולת</a>

    <a href="/hebrew_version/foodwasteprogram_he.html" style="color:#ffd200;">תוכנית בזבוז מזון</a>
    <a href="/eco-analitics_HEB/ecoanalytics_HEB.html">אנליטיקה סביבתית</a>
    <a href="/hebrew_version/eco_law_he.html">חוקי סביבה בישראל</a>
    <a href="/hebrew_version/he_program.html">כלכלה מעגלית</a>
    <a href="/hebrew_version/textbookWMhe.html">בית ספר לניהול פסולת</a>
    <a href="/oecd_reports/oecd_reports.html">דוחות OECD</a>
    <a href="/hebrew_version/about_us_he.html">הצוות שלנו</a>
    <a href="https://www.facebook.com/people/Re-Haifa/61575821814765/" target="_blank" rel="noopener">פייסבוק</a>
    <a href="/hebrew_version/anketa_he.html" target="_blank" style="color:#ffd200; font-weight:900;">הצטרף אלינו ➜</a>
  `;

  // הכנס תפריט אחרי header
  const slot = document.getElementById("menu-slot");
  if (slot) {
    slot.replaceWith(nav);
  } else {
    const header = document.querySelector("header");
    if (header) header.insertAdjacentElement("afterend", nav);
    else document.body.prepend(nav);
  }

  // הכנס כותרת תחתונה
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    &copy; RE Haifa, 2025 &mdash; אקולוגיה, שיתוף וקהילה בחיפה &nbsp;|&nbsp;
    <a href="mailto:rehaifahub@gmail.com">rehaifahub@gmail.com</a> &nbsp;|&nbsp;
    <a href="https://www.facebook.com/people/Re-Haifa/61575821814765/" target="_blank" rel="noopener">פייסבוק</a> &nbsp;|&nbsp;
    <a href="https://t.me/rehaifahub" target="_blank">טלגרם</a>
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
