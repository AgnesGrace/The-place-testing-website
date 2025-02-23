const header = document.querySelector('.header');
const btn = document.querySelector('.mobile-icons-btn');
const links = document.querySelectorAll('.main-header-link');
const heroSection = document.querySelector('.section-hero');

btn.addEventListener('click', () => {
  header.classList.toggle('nav-open');
});

links.forEach((link) =>
  link.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  })
);

/**
 * sticky navigation
 */
const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    console.log(entry);
    if (entry.isIntersecting === false && entry.intersectionRatio === 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  },
  {
    root: null /**observe the el in the entire browser */,
    threshold: 0,
  }
);

observer.observe(heroSection);
