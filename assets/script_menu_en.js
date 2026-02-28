(async function () {
  const slot = document.getElementById('menu-slot');
  if (!slot) return;

  const res = await fetch('/assets/menu_en.html', { cache: 'no-cache' });
  slot.innerHTML = await res.text();

  // Подсвечиваем активную кнопку
  const links = slot.querySelectorAll('.top-nav a');
  links.forEach(link => {
    if (link.href && window.location.pathname === new URL(link.href).pathname) {
      link.style.background = '#1b5e20';
      link.style.outline = '2px solid #ffd200';
    }
  });

  const menu = document.getElementById("sideMenu");
  const btn = document.getElementById("menuBtn");
  const backdrop = document.getElementById("menuBackdrop");
  if (!menu || !btn || !backdrop) return;

  function openMenu() {
    menu.style.width = "250px";
    backdrop.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    menu.style.width = "0";
    backdrop.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }
  function toggleMenu() {
    if (menu.style.width === "250px") closeMenu();
    else openMenu();
  }
  btn.addEventListener("click", toggleMenu);
  backdrop.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();
