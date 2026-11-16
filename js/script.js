// Progressive enhancement for in-page navigation.
(() => {
  const links = document.querySelectorAll('a.nav-link[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const selector = link.getAttribute("href");
      const target = selector ? document.querySelector(selector) : null;
      if (!target) return;
      event.preventDefault();
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      if (window.history && window.history.replaceState) window.history.replaceState(null, "", selector);
      const nav = document.querySelector("#navbarNav");
      if (nav && nav.classList.contains("show") && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });
})();
