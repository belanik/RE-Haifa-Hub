function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  if (menu.style.width === "250px" || menu.style.width === "220px") {
    menu.style.width = "0";
  } else {
    menu.style.width = "250px";
  }
}
