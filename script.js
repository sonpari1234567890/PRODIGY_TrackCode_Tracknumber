// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-lines");
  const menu = document.querySelector(".menu-items");

  // Toggle Menu (For Mobile)
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");

    // Toggle animation for hamburger icon
    hamburger.classList.toggle("open");
  });

  // Smooth Scrolling
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Get target section
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      // Scroll smoothly to the target section
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, // Adjust for fixed navbar
          behavior: "smooth",
        });
      }

      // Close menu on link click (for mobile)
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        hamburger.classList.remove("open");
      }
    });
  });
});

// Optional Scroll Animation
window.addEventListener("scroll", () => {
  const revealElements = document.querySelectorAll(".reveal");

  revealElements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
});
