/**
 * ARCHITECTURE & CONSTRUCTION STUDIO — CUSTOM CURSOR
 * Minimal architectural dot & follower with contextual hover labels
 */

document.addEventListener('DOMContentLoaded', () => {
  // Only initialize on desktop/fine pointer devices
  if (window.matchMedia('(pointer: fine)').matches) {
    const dot = document.createElement('div');
    dot.className = 'custom-cursor';
    
    const follower = document.createElement('div');
    follower.className = 'custom-cursor-follower';
    
    const label = document.createElement('span');
    label.className = 'cursor-text';
    follower.appendChild(label);
    
    document.body.appendChild(dot);
    document.body.appendChild(follower);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let followerX = mouseX;
    let followerY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const renderCursor = () => {
      // Lerp movement
      dotX += (mouseX - dotX) * 0.7;
      dotY += (mouseY - dotY) * 0.7;
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;

      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;

      requestAnimationFrame(renderCursor);
    };
    renderCursor();

    // Contextual Hover Listeners
    const initCursorHover = () => {
      // Projects
      document.querySelectorAll('[data-cursor="project"], .arch-card, .featured-project-container').forEach(el => {
        el.addEventListener('mouseenter', () => {
          document.body.classList.add('cursor-hover-project');
          label.textContent = 'VIEW';
        });
        el.addEventListener('mouseleave', () => {
          document.body.classList.remove('cursor-hover-project');
          label.textContent = '';
        });
      });

      // Material / Visual Explore
      document.querySelectorAll('[data-cursor="explore"], .material-card, .map-visual-box').forEach(el => {
        el.addEventListener('mouseenter', () => {
          document.body.classList.add('cursor-hover-explore');
          label.textContent = 'EXPLORE';
        });
        el.addEventListener('mouseleave', () => {
          document.body.classList.remove('cursor-hover-explore');
          label.textContent = '';
        });
      });

      // Links & Buttons
      document.querySelectorAll('a, button, input, select, textarea').forEach(el => {
        el.addEventListener('mouseenter', () => {
          document.body.classList.add('cursor-hover-link');
        });
        el.addEventListener('mouseleave', () => {
          document.body.classList.remove('cursor-hover-link');
        });
      });
    };

    initCursorHover();
    // Expose for dynamic modals/content updates
    window.refreshCursorListeners = initCursorHover;
  }
});
