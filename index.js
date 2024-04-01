document.addEventListener("DOMContentLoaded", function () {
  let scrollTarget = document.querySelectorAll(".scroll-target");
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  function textAppear(entries, observer) {
    for (let entry of entries) {
      addClass(entry);
      function addClass(entry) {
        if (!entry.isIntersecting) {
          return;
        }
        console.log(entry);
        entry.target.classList.add(`active`);
        observer.unobserve(entry.target);
      }
    }
  }

  const observer = new IntersectionObserver(textAppear, options);

  for (let targetElement of scrollTarget) {
    observer.observe(targetElement);
  }
});
