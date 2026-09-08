const hero = document.querySelector('.hero');
const sticky = document.querySelector('.sticky');

const offerBar = document.createElement('aside');
offerBar.className = 'top-offer-bar';
offerBar.setAttribute('aria-label', 'Condição especial da oferta');
offerBar.innerHTML = '<span>● Condição especial disponível apenas hoje!</span><small>Protocolo + 3 bônus inclusos por R$19,90</small>';
document.body.insertBefore(offerBar, document.body.firstElementChild);

const offerBarStyles = document.createElement('style');
offerBarStyles.textContent = '.top-offer-bar{position:fixed;inset:0 0 auto;z-index:100;min-height:38px;padding:8px 18px;background:#073b45;color:#fff;display:flex;align-items:center;justify-content:center;gap:13px;text-align:center;font:700 11px/1.25 Manrope,Arial,sans-serif;letter-spacing:.02em;box-shadow:0 2px 12px #001f2830}.top-offer-bar span{color:#fff}.top-offer-bar span::first-letter{color:#68d9d1}.top-offer-bar small{color:#aee6df;font:10px/1.25 Manrope,Arial,sans-serif;letter-spacing:0}body{padding-top:38px}@media(max-width:520px){.top-offer-bar{min-height:48px;padding:7px 13px;display:block;font-size:10px}.top-offer-bar small{display:block;margin-top:2px;font-size:9px}body{padding-top:48px}}';
document.head.appendChild(offerBarStyles);

document.documentElement.style.overflowX = 'hidden';
document.documentElement.style.overflowY = 'auto';
document.documentElement.style.scrollBehavior = 'smooth';
document.body.style.overflowX = 'hidden';
document.body.style.overflowY = 'auto';
document.body.style.touchAction = 'pan-y';

const offer = document.querySelector('#oferta');
if (offer) offer.style.scrollMarginTop = '56px';

// Os CTAs levam à oferta sem adicionar #oferta à URL. Assim, um reload
// sempre começa no topo e não volta automaticamente para a seção de compra.
if (window.location.hash === '#oferta') {
  history.replaceState(null, '', window.location.pathname + window.location.search);
  window.scrollTo({ top: 0, behavior: 'auto' });
}
document.querySelectorAll('.hero nav a:last-child, a.btn, .sticky a').forEach((link) => {
  if (link.closest('.buy')) return;
  link.href = '#oferta';
  link.addEventListener('click', (event) => {
    event.preventDefault();
    offer?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

if (hero && sticky && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => {
    const pastHero = !entry.isIntersecting;
    document.body.classList.toggle('hero-passed', pastHero);
    sticky.hidden = !pastHero;
  }, { threshold: 0.12 }).observe(hero);
}
