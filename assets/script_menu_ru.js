(async function () {
  const slot = document.getElementById('menu-slot');
  if (!slot) return;

  const res = await fetch('/assets/menu_ru.html', { cache: 'no-cache' });
  slot.innerHTML = await res.text();

  const menu = document.getElementById("sideMenu");
  const btn = document.getElementById("menuBtn");
  const backdrop = document.getElementById("menuBackdrop");

  if (!menu || !btn || !backdrop) {
    console.error("Menu elements not found. Check IDs in menu_ru.html");
    return;
  }

  function openMenu(){
    menu.classList.add("open");
    backdrop.classList.add("open");
    btn.setAttribute("aria-expanded","true");
  }

  function closeMenu(){
    menu.classList.remove("open");
    backdrop.classList.remove("open");
    btn.setAttribute("aria-expanded","false");
  }

  btn.addEventListener("click", () => {
    menu.classList.contains("open") ? closeMenu() : openMenu();
  });

  backdrop.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });
})();
