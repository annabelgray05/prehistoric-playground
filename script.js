// Set footer year automatically
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // If the URL has a hash (e.g. #trex), scroll to that dino section smoothly
  if (window.location.hash) {
    const targetId = window.location.hash.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }

  // Smooth scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const id = href.substring(1);
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState(null, "", href);
        }
      }
    });
  });
});
