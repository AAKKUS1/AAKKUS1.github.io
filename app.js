const title = document.getElementById("title");
const hero = document.getElementById("hero");

window.addEventListener("DOMContentLoaded", () => {
  title.classList.add("fade-in");
  hero.classList.add("fade-in-b");
});

function scrollToSection() {
  const section = document.getElementById("desc-artiste");
  section.scrollIntoView({ behavior: "smooth" });
}
