(() => {
  'use strict';

  document.addEventListener('click', (event) => {
    const cta = event.target.closest('.purchase-cta');
    if (cta && typeof window.fbq === 'function') {
      window.fbq('trackCustom', 'CTA_Click', {
        content_name: 'Aquário Sem Perdas', value: 19.90, currency: 'BRL'
      });
    }
  });

  const carousel = document.querySelector('.product-carousel');
  if (carousel) {
    const track = carousel.querySelector('.carousel-track');
    const slides = [...track.children];
    const dots = [...carousel.querySelectorAll('.carousel-indicators button')];
    let activeSlide = 0;
    let swipeStart = 0;
    const showSlide = (index) => {
      activeSlide = (index + slides.length) % slides.length;
      track.style.transform = `translateX(-${activeSlide * 100}%)`;
      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === activeSlide;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-current', active ? 'true' : 'false');
      });
    };
    carousel.querySelector('.previous').addEventListener('click', () => showSlide(activeSlide - 1));
    carousel.querySelector('.next').addEventListener('click', () => showSlide(activeSlide + 1));
    dots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));
    track.addEventListener('touchstart', (event) => {
      swipeStart = event.changedTouches[0].screenX;
    }, { passive: true });
    track.addEventListener('touchend', (event) => {
      const distance = event.changedTouches[0].screenX - swipeStart;
      if (Math.abs(distance) > 40) showSlide(activeSlide + (distance < 0 ? 1 : -1));
    }, { passive: true });
  }

  const hero = document.querySelector('.hero');
  const sticky = document.querySelector('.sticky');
  if (hero && sticky && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      const pastHero = !entry.isIntersecting;
      document.body.classList.toggle('hero-passed', pastHero);
      sticky.hidden = !pastHero;
    }, { threshold: 0.12 }).observe(hero);
  }
})();
