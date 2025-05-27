const title = document.getElementById("title");
const hero = document.getElementById("hero");

window.addEventListener("DOMContentLoaded", () => {
  if (title) title.classList.add("fade-in");
  if (hero) hero.classList.add("fade-in-b");
});

function scrollToSection() {
  const section = document.querySelector(".image-container"); // Updated selector
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
