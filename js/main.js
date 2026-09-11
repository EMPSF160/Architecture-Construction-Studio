/**
 * ARCHITECTURE & CONSTRUCTION STUDIO — MAIN RUNTIME
 * Lenis Smooth Scroll, Swiper Initializer, Project Transition Modal, Contact Form Validation
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAST & RESPONSIVE SMOOTH SCROLL INITIALIZATION
  let lenis = null;
  if (typeof Lenis !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    try {
      lenis = new Lenis({
        duration: 0.6, // Fast, snappy, instantaneous response
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothTouch: false, // Keep 100% native mobile touch response
        wheelMultiplier: 1.25, // Quick scroll progression
        touchMultiplier: 1.5,
        infinite: false
      });

      // Synchronize Lenis with GSAP ScrollTrigger
      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      } else {
        const raf = (time) => {
          lenis.raf(time);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      }
    } catch (e) {
      console.warn('Lenis smooth scroll failed to start:', e);
    }
  }

  // 2. SWIPER INITIALIZATION (Material & Galleries)
  if (typeof Swiper !== 'undefined') {
    // Material studies swiper (if present)
    new Swiper('.material-swiper', {
      slidesPerView: 1.2,
      spaceBetween: 20,
      grabCursor: true,
      keyboard: { enabled: true },
      breakpoints: {
        576: { slidesPerView: 2.2, spaceBetween: 24 },
        1024: { slidesPerView: 4, spaceBetween: 24 }
      }
    });

    // Journal preview swiper (if present)
    new Swiper('.journal-swiper', {
      slidesPerView: 1.15,
      spaceBetween: 20,
      grabCursor: true,
      breakpoints: {
        768: { slidesPerView: 2.2, spaceBetween: 24 },
        1200: { slidesPerView: 3, spaceBetween: 32 }
      }
    });
  }

  // 3. PROJECT TRANSITION MODAL (SIGNATURE FULLSCREEN INTERACTION)
  const modal = document.getElementById('project-modal');
  let modalSwiper = null;

  window.openProjectModal = (projectId) => {
    const project = typeof getProjectById === 'function' ? getProjectById(projectId) : null;
    if (!project || !modal) return;

    // Populate Modal Content
    const numEl = modal.querySelector('.modal-project-num');
    const titleEl = modal.querySelector('.modal-project-title');
    const subtitleEl = modal.querySelector('.modal-project-subtitle');
    const descEl = modal.querySelector('.modal-project-desc');
    const specTable = modal.querySelector('.modal-specs-table');
    const swiperWrapper = modal.querySelector('.modal-swiper-wrapper');

    if (numEl) numEl.textContent = `PROJECT ${project.number}`;
    if (titleEl) titleEl.textContent = project.title;
    if (subtitleEl) subtitleEl.textContent = project.subtitle;
    if (descEl) descEl.textContent = project.concept;

    // Populate Specs Table
    if (specTable) {
      specTable.innerHTML = `
        <div class="modal-spec-row"><span class="modal-spec-label">Location</span><span class="modal-spec-val">${project.location}</span></div>
        <div class="modal-spec-row"><span class="modal-spec-label">Year</span><span class="modal-spec-val">${project.year}</span></div>
        <div class="modal-spec-label-group modal-spec-row"><span class="modal-spec-label">Typology</span><span class="modal-spec-val">${project.type}</span></div>
        <div class="modal-spec-row"><span class="modal-spec-label">Floor Area</span><span class="modal-spec-val">${project.area}</span></div>
        <div class="modal-spec-row"><span class="modal-spec-label">Status</span><span class="modal-spec-val">${project.status}</span></div>
        <div class="modal-spec-row"><span class="modal-spec-label">Materials</span><span class="modal-spec-val">${project.materials}</span></div>
        ${project.stats?.embodiedCarbon ? `<div class="modal-spec-row"><span class="modal-spec-label">Carbon Strategy</span><span class="modal-spec-val">${project.stats.embodiedCarbon}</span></div>` : ''}
      `;
    }

    // Populate Gallery Slides
    if (swiperWrapper) {
      swiperWrapper.innerHTML = project.gallery.map(imgSrc => `
        <div class="swiper-slide modal-swiper-slide">
          <img src="${imgSrc}" alt="${project.title} Architectural Detail" loading="lazy">
        </div>
      `).join('');
    }

    // Initialize or Update Swiper in Modal
    if (modalSwiper) {
      modalSwiper.destroy(true, true);
    }

    if (typeof Swiper !== 'undefined') {
      setTimeout(() => {
        modalSwiper = new Swiper('.modal-swiper-container', {
          slidesPerView: 1,
          spaceBetween: 16,
          loop: project.gallery.length > 1,
          grabCursor: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          keyboard: { enabled: true }
        });
      }, 50);
    }

    // Show Modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (typeof window.refreshCursorListeners === 'function') {
      window.refreshCursorListeners();
    }
  };

  window.closeProjectModal = () => {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  const closeBtn = document.querySelector('.modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', window.closeProjectModal);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      window.closeProjectModal();
    }
  });

  // 4. FLOATING CURSOR IMAGE PREVIEW (PROJECTS PAGE)
  const projectListItems = document.querySelectorAll('.project-list-row');
  const floatingPreview = document.querySelector('.floating-project-preview');
  const previewImg = floatingPreview ? floatingPreview.querySelector('img') : null;

  if (projectListItems.length > 0 && floatingPreview && previewImg) {
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (floatingPreview.classList.contains('active')) {
        floatingPreview.style.left = `${mouseX + 30}px`;
        floatingPreview.style.top = `${mouseY}px`;
      }
    }, { passive: true });

    projectListItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const imgSrc = item.getAttribute('data-image');
        if (imgSrc) {
          previewImg.src = imgSrc;
          floatingPreview.classList.add('active');
        }
      });

      item.addEventListener('mouseleave', () => {
        floatingPreview.classList.remove('active');
      });
    });
  }

  // 5. JOURNAL ARTICLE MODAL / DRAWER
  const journalModal = document.getElementById('journal-modal');
  window.openArticleModal = (articleId) => {
    const article = typeof getArticleById === 'function' ? getArticleById(articleId) : null;
    if (!article || !journalModal) return;

    journalModal.querySelector('.article-modal-cat').textContent = `${article.category} / ${article.date}`;
    journalModal.querySelector('.article-modal-title').textContent = article.title;
    journalModal.querySelector('.article-modal-img').src = article.image;
    journalModal.querySelector('.article-modal-body').innerHTML = article.content;

    journalModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeArticleModal = () => {
    if (!journalModal) return;
    journalModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  const journalCloseBtn = document.querySelector('.journal-modal-close');
  if (journalCloseBtn) {
    journalCloseBtn.addEventListener('click', window.closeArticleModal);
  }

  // 6. CONTACT FORM SUBMISSION & CLIENT-SIDE VALIDATION
  const contactForm = document.getElementById('contact-form');
  const feedbackMsg = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const projectType = document.getElementById('project-type')?.value;
      const message = document.getElementById('message')?.value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields (Name, Email, Message).');
        return;
      }

      // Email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please provide a valid architectural inquiry email address.');
        return;
      }

      // Submit feedback simulation
      if (feedbackMsg) {
        feedbackMsg.innerHTML = `
          <strong>Inquiry Registered.</strong> Thank you, ${name}. Your architectural brief regarding <em>${projectType || 'a new commission'}</em> has been transmitted to our Chennai Studio team. We will review site parameters and respond within 48 hours.
        `;
        feedbackMsg.classList.add('show');
        contactForm.reset();
        
        // Scroll feedback into view smoothly
        feedbackMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // 7. BACK TO TOP BUTTON
  const backToTopBtn = document.querySelector('.footer-back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
});
