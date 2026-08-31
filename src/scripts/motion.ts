/**
 * Every animation that needs more than CSS. Kept to one small module:
 * scroll reveals, counting numbers, the scroll-progress bar and the pointer
 * glow. All of it is optional — the page is fully readable without it.
 */
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ------------------------------------------------------------- reveals */
function initReveals() {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
  );
  targets.forEach((el) => observer.observe(el));
}

/* ------------------------------------------------------- counting stats */
function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count ?? '0');
  const decimals = Number(el.dataset.decimals ?? '0');
  const render = (value: number) => {
    el.textContent = value.toFixed(decimals);
  };
  if (reducedMotion) {
    render(target);
    return;
  }
  const duration = 1100;
  const start = performance.now();
  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    // ease-out-cubic: fast first, settles on the number
    render(target * (1 - Math.pow(1 - progress, 3)));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const counters = document.querySelectorAll<HTMLElement>('[data-count]');
  if (!('IntersectionObserver' in window)) {
    counters.forEach(countUp);
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        countUp(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.6 },
  );
  counters.forEach((el) => observer.observe(el));
}

/* ------------------------------------------------------ scroll progress */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

/* --------------------------------------------------------- pointer glow */
function initPointerGlow() {
  if (reducedMotion || window.matchMedia('(pointer: coarse)').matches) return;
  for (const zone of document.querySelectorAll<HTMLElement>('[data-glow]')) {
    zone.addEventListener('pointermove', (event) => {
      const rect = zone.getBoundingClientRect();
      zone.style.setProperty('--glow-x', `${event.clientX - rect.left}px`);
      zone.style.setProperty('--glow-y', `${event.clientY - rect.top}px`);
    });
  }
}

initReveals();
initCounters();
initScrollProgress();
initPointerGlow();
