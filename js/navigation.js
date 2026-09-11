/**
 * ARCHITECTURE & CONSTRUCTION STUDIO — NAVIGATION
 * Minimal architectural navbar, scroll states, full-screen drawer menu
 */

document.addEventListener('DOMContentLoaded', () => {
  const siteHeader = document.querySelector('.site-header');
  const menuTrigger = document.querySelector('.menu-trigger');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerLinks = document.querySelectorAll('.drawer-link, .nav-link-item');
  const body = document.body;

  // 1. Scroll State Handler for Sticky Navbar
  const handleScroll = () => {
    if (window.scrollY > 40) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Mobile Drawer Open/Close
  if (menuTrigger && mobileDrawer) {
    menuTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = mobileDrawer.classList.contains('active');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    const openDrawer = () => {
      mobileDrawer.classList.add('active');
      document.documentElement.classList.add('menu-open');
      menuTrigger.setAttribute('aria-expanded', 'true');
      body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      mobileDrawer.classList.remove('active');
      document.documentElement.classList.remove('menu-open');
      menuTrigger.setAttribute('aria-expanded', 'false');
      body.style.overflow = '';
    };

    // Close on link click
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });

    // Close on Escape Key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
        closeDrawer();
      }
    });
  }

  // 3. Highlight Active Link based on Current Page URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  drawerLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html') || (currentPath === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
