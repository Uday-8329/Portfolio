// Animation: Reveal elements on scroll
document.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll(".project-card, .about-content, .skills-list .skill");
  
    reveals.forEach((element) => {
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight) {
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
      }
    });
    // Add hover animations dynamically
const icons = document.querySelectorAll('.social-icon');

icons.forEach((icon) => {
  icon.addEventListener('mouseover', () => {
    icon.style.transform = 'scale(1.1)';
    icon.style.transition = 'transform 0.2s';
  });

  icon.addEventListener('mouseout', () => {
    icon.style.transform = 'scale(1)';
  });
});
// Animate Education Section on Scroll
const educationItems = document.querySelectorAll('.education-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

educationItems.forEach((item) => {
  item.style.opacity = 0;
  item.style.transform = 'translateY(30px)';
  item.style.transition = 'all 0.5s ease-out';
  observer.observe(item);
});
  });