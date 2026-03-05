// menu_en.js — English navigation menu RE-Haifa
// Add to each English page: <script src="/english_version/menu_en.js"></script>

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
    .site-footer a:hover {
      text-decoration: underline;
    }
  `;
  document.head.appendChild(style);

  const nav = document.createElement("nav");
  nav.className = "top-nav";
  nav.setAttribute("aria-label", "Navigation");
  nav.innerHTML = `
    <a href="/english_version/position_on_waste_reform_en.html" style="color:#ffd200;">Position on Waste Reform</a>
    <a href="/english_version/position_on_waste_reform_en.html" style="color:#ffd200;">FOOD WASTE PROGRAM</a>
    <a href="/eco-analitics_EN/ecoanalytics_EN.html">Eco-Analytics</a>
    <a href="/english_version/eco_law_en.html">Eco Laws of Israel</a>
    <a href="/english_version/en_program.html">Circular Economy</a>
    <a href="/english_version/textbookWMen.html">Waste Management School</a>
    <a href="/oecd_reports/oecd_reports.html">OECD Reports</a>
    <a href="/english_version/about_us_en.html">Our Team</a>
    <a href="https://www.facebook.com/people/Re-Haifa/61575821814765/" target="_blank" rel="noopener">Facebook</a>
    <a href="/english_version/anketa_en.html" target="_blank" style="color:#ffd200; font-weight:900;">Join Us ➜</a>
  `;

  // Insert menu after <header>
  const slot = document.getElementById("menu-slot");
  if (slot) {
    slot.replaceWith(nav);
  } else {
    const header = document.querySelector("header");
    if (header) header.insertAdjacentElement("afterend", nav);
    else document.body.prepend(nav);
  }

  // Insert footer
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    &copy; RE Haifa, 2025 &mdash; Ecology, sharing and community in Haifa &nbsp;|&nbsp;
    <a href="mailto:rehaifa@gmail.com">rehaifa@gmail.com</a> &nbsp;|&nbsp;
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
