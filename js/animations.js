/**
 * ARCHITECTURE & CONSTRUCTION STUDIO — GSAP & SCROLLTRIGGER ANIMATIONS
 * Editorial text reveals, parallax, clip-path image reveals, and process line drawings
 */

function initStudioAnimations() {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReducedMotion || typeof gsap === 'undefined') {
    // Fallback: Show all immediately
    document.querySelectorAll('.fade-up, .img-reveal-wrapper, .reveal-text').forEach(el => {
      el.classList.add('is-inview');
    });
    return;
  }

  // Register ScrollTrigger
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // 1. Hero Reveal Animation
  const heroTitle = document.querySelector('.hero-massive-title');
  const heroMedia = document.querySelector('.hero-bg-media img');
  const heroSubRow = document.querySelector('.hero-sub-row');

  if (heroTitle) {
    gsap.from(heroTitle, {
      duration: 1.4,
      y: 60,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.2
    });
  }

  if (heroMedia) {
    gsap.from(heroMedia, {
      duration: 2.2,
      scale: 1.15,
      opacity: 0.2,
      ease: 'power2.out'
    });
  }

  if (heroSubRow) {
    gsap.from(heroSubRow, {
      duration: 1.2,
      y: 30,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.6
    });
  }

  // 2. ScrollTrigger Reveal on Elements (.fade-up)
  document.querySelectorAll('.fade-up').forEach((el) => {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () => el.classList.add('is-inview')
      });
    } else {
      el.classList.add('is-inview');
    }
  });

  // 3. Image Clip Path Reveals (.img-reveal-wrapper)
  document.querySelectorAll('.img-reveal-wrapper').forEach((el) => {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => el.classList.add('is-inview')
      });
    } else {
      el.classList.add('is-inview');
    }
  });

  // 4. Parallax on Featured Images
  if (typeof ScrollTrigger !== 'undefined') {
    document.querySelectorAll('.featured-media img, .page-hero-bg img').forEach((img) => {
      gsap.to(img, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  }

  // 5. Architecture Process Step Sequencing
  const processSteps = document.querySelectorAll('.process-step');
  if (processSteps.length > 0 && typeof ScrollTrigger !== 'undefined') {
    processSteps.forEach((step, idx) => {
      ScrollTrigger.create({
        trigger: step,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          setTimeout(() => {
            step.classList.add('active');
          }, idx * 120);
        }
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initStudioAnimations();
});
