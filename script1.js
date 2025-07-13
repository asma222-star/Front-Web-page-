// Simple fade-in on scroll effect
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".section");
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
