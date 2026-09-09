const hero = document.querySelector('.hero');
const sticky = document.querySelector('.sticky');

document.querySelectorAll('.inside li').forEach((item) => {
  if (item.textContent.includes('aproximadamente 60 páginas')) {
    item.textContent = '120 páginas de consulta';
  }
});

document.querySelectorAll('.purchase-cta').forEach((cta) => {
  cta.addEventListener('click', () => {
    if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', 'CTA_Click', { content_name: 'Aquário Sem Perdas', value: 19.90, currency: 'BRL' });
    }
  });
});

const productPages = document.querySelector('.real-pages');
if (productPages) {
  const originalSlides = [...productPages.querySelectorAll('figure')];
  if (originalSlides[1]) productPages.prepend(originalSlides[1]);
  const additionalPages = [
    ['assets/pagina-antes-de-mexer.png', 'Página Antes de mexer no aquário', 477, 715],
    ['assets/pagina-alimentacao.png', 'Página sobre alimentação dos peixes', 477, 716],
    ['assets/pagina-teste-7-dias.png', 'Página Teste dos 7 dias', 477, 717]
  ];
  additionalPages.forEach(([source, description, width, height]) => {
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.src = source;
    image.alt = description;
    image.width = width;
    image.height = height;
    image.loading = 'lazy';
    image.decoding = 'async';
    figure.appendChild(image);
    productPages.appendChild(figure);
  });
  const slides = [...productPages.querySelectorAll('figure')];
  const track = document.createElement('div');
  track.className = 'carousel-track';
  slides.forEach((slide) => track.appendChild(slide));

  const previous = document.createElement('button');
  previous.className = 'carousel-control previous';
  previous.type = 'button';
  previous.setAttribute('aria-label', 'Página anterior');
  previous.textContent = '←';

  const next = document.createElement('button');
  next.className = 'carousel-control next';
  next.type = 'button';
  next.setAttribute('aria-label', 'Próxima página');
  next.textContent = '→';

  const indicators = document.createElement('div');
  indicators.className = 'carousel-indicators';
  indicators.setAttribute('aria-label', 'Páginas do protocolo');
  const dots = slides.map((slide, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `Ver página ${index + 1}`);
    indicators.appendChild(dot);
    return dot;
  });

  productPages.replaceChildren(track, previous, next, indicators);
  productPages.classList.add('product-carousel');
  const carouselHint = document.createElement('p');
  carouselHint.className = 'carousel-hint';
  carouselHint.textContent = 'Arraste ou use as setas para ver páginas reais do protocolo →';
  productPages.append(carouselHint);
  let activeSlide = 0;
  const showSlide = (index) => {
    activeSlide = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${activeSlide * 100}%)`;
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === activeSlide);
      dot.setAttribute('aria-current', dotIndex === activeSlide ? 'true' : 'false');
    });
  };
  previous.addEventListener('click', () => showSlide(activeSlide - 1));
  next.addEventListener('click', () => showSlide(activeSlide + 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));
  let swipeStart = 0;
  track.addEventListener('touchstart', (event) => {
    swipeStart = event.changedTouches[0].screenX;
  }, { passive: true });
  track.addEventListener('touchend', (event) => {
    const distance = event.changedTouches[0].screenX - swipeStart;
    if (Math.abs(distance) > 40) showSlide(activeSlide + (distance < 0 ? 1 : -1));
  }, { passive: true });
  showSlide(0);
}

const carouselStyles = document.createElement('style');
carouselStyles.textContent = '.product-carousel{position:relative!important;height:446px!important;display:block!important;overflow:hidden!important;padding-bottom:36px}.product-carousel .carousel-track{height:100%;display:flex;transition:transform .28s ease;will-change:transform}.product-carousel figure{flex:0 0 100%!important;max-width:none!important;height:410px!important;margin:0!important;padding:0 54px!important;display:flex;align-items:center;justify-content:center;overflow:hidden;transform:none!important;border:0!important;background:transparent!important;box-shadow:none!important}.product-carousel figure img{display:block;width:auto!important;height:100%!important;max-width:100%;object-fit:contain}.carousel-control{position:absolute;z-index:2;top:calc(50% - 18px);width:36px;height:36px;padding:0;border:1px solid #6bcfc7;border-radius:50%;background:#073b45;color:#fff;font-size:19px;line-height:1;cursor:pointer}.carousel-control:hover{background:#0d9d94}.carousel-control.previous{left:4px}.carousel-control.next{right:4px}.carousel-indicators{position:absolute;bottom:4px;left:0;right:0;display:flex;justify-content:center;gap:7px}.carousel-indicators button{width:7px;height:7px;padding:0;border:0;border-radius:50%;background:#6f9d9b;cursor:pointer}.carousel-indicators button.is-active{width:20px;border-radius:7px;background:#69d7cd}@media(max-width:720px){.product-carousel{height:330px!important;padding-bottom:30px}.product-carousel figure{height:300px!important;padding:0 38px!important}.carousel-control{width:31px;height:31px;font-size:17px}.carousel-indicators{bottom:2px}}';
document.head.appendChild(carouselStyles);

const refinementStyles = document.createElement('style');
refinementStyles.textContent = '.social-proof{max-width:620px;margin:16px auto -5px;padding:12px 18px;border:1px solid #a7ddd7;border-radius:999px;background:#e8f8f4;box-shadow:0 8px 20px #08343a12}.social-proof b:before{content:"✓";display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;margin-right:7px;border-radius:50%;background:#07958c;color:#fff;font-size:11px}.social-proof b{font-size:14px}.carousel-hint{position:absolute;bottom:1px;left:0;right:0;margin:0;text-align:center;color:#8adfd7;font:9px "DM Mono",monospace;letter-spacing:.02em}.product-carousel .carousel-indicators{bottom:22px}.product-carousel{height:520px!important}.product-carousel figure{height:480px!important}.pain .story{padding:28px 0;box-shadow:inset 0 1px #d8e2dc,inset 0 -1px #d8e2dc}.pain .story strong{padding:10px 14px;border-radius:6px;background:#fff1eb;color:#a54136;font-size:13px;line-height:1.35}.pain .story strong em{display:block;margin-top:2px;color:#a54136;font-style:normal;font-size:15px}.transformation{margin-top:26px;padding:17px 19px;border-left-width:5px;border-radius:0 8px 8px 0;box-shadow:0 8px 18px #08343a10;font-size:16px;line-height:1.45}.early-offer-box{border:1px solid #2c7775;box-shadow:0 18px 40px #062b3530}.early-offer-box>div:first-child:before{content:"PROTOCOLO + 3 BÔNUS";display:inline-block;margin-bottom:10px;padding:5px 8px;border-radius:4px;background:#0d9d94;color:#fff;font:9px "DM Mono",monospace;letter-spacing:.08em}.early-price{box-shadow:0 10px 24px #001f2530}.early-price del{font-size:18px}.early-price strong{font-size:52px;color:#063b45}.early-price>small:nth-of-type(2){margin-top:9px}.offer-proof{display:inline-block;padding:8px 11px;border:1px solid #4aaca4;border-radius:5px;background:#0b4650}@media(max-width:720px){.social-proof{margin:10px 14px -3px;border-radius:9px;font-size:11px}.social-proof b{display:block;margin:0 0 3px}.carousel-hint{font-size:8px}.product-carousel{height:380px!important}.product-carousel figure{height:345px!important}.pain .story strong{font-size:12px}.pain .story strong em{font-size:13px}.transformation{font-size:14px}.early-price strong{font-size:50px}}';
document.head.appendChild(refinementStyles);

const guaranteeStyles = document.createElement('style');
guaranteeStyles.textContent = '.guarantee .seal{position:relative;flex-basis:165px;width:165px;height:165px;border:6px solid #f7fffc;background:radial-gradient(circle at 32% 25%,#2aa79d 0,#087b77 42%,#063b45 100%);box-shadow:0 0 0 2px #0c8d85,0 14px 28px #06343a35;color:#fff;overflow:hidden}.guarantee .seal:before{content:"✓";position:absolute;top:15px;right:18px;width:25px;height:25px;border:1px solid #9fece4;border-radius:50%;display:grid;place-items:center;color:#baf4ee;font:700 15px/1 Manrope}.guarantee .seal:after{content:"GARANTIA";position:absolute;bottom:17px;left:0;right:0;color:#baf4ee;font:700 8px "DM Mono",monospace;letter-spacing:.16em}.guarantee .seal b{color:#fff;font-size:62px;line-height:.82;text-shadow:0 3px 10px #002b3060}.guarantee .seal small{margin-top:7px;color:#e4fffb;font:700 11px/1.05 "DM Mono",monospace;letter-spacing:.1em}.guarantee .seal small br{display:block}@media(max-width:720px){.guarantee .seal{width:155px;height:155px;flex-basis:155px}.guarantee .seal b{font-size:58px}}';
document.head.appendChild(guaranteeStyles);

if (hero && sticky && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => {
    const pastHero = !entry.isIntersecting;
    document.body.classList.toggle('hero-passed', pastHero);
    sticky.hidden = !pastHero;
  }, { threshold: 0.12 }).observe(hero);
}
