const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  overlay.classList.toggle("show");

  // Icon change logic
  if (navLinks.classList.contains("show")) {
    menuToggle.textContent = "✖";
  } else {
    menuToggle.textContent = "☰";
  }
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("show");
  overlay.classList.remove("show");
  menuToggle.textContent = "☰";
});

const worksGrid = document.querySelector(".works-grid");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const scrollAmount = 350; // how much to scroll

nextBtn.addEventListener("click", () => {
  worksGrid.scrollLeft += scrollAmount;
});

prevBtn.addEventListener("click", () => {
  worksGrid.scrollLeft -= scrollAmount;
});
