/**
 * GURVIK PROJECT MANAGEMENT - FZCO
 * Clean Controller: Direct Autoplay Video Sound Toggle, Drawer & Form
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Direct Hero Video Sound Toggle
  const heroVideo = document.getElementById('heroBrandVideo');
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');
  const soundLabel = document.getElementById('soundLabel');

  if (heroVideo && soundToggleBtn) {
    // Ensure video plays smoothly
    heroVideo.play().catch(() => {
      // Browser autoplay policy handled
    });

    soundToggleBtn.addEventListener('click', () => {
      if (heroVideo.muted) {
        heroVideo.muted = false;
        if (soundIcon) soundIcon.textContent = '🔊';
        if (soundLabel) soundLabel.textContent = 'Sound On';
      } else {
        heroVideo.muted = true;
        if (soundIcon) soundIcon.textContent = '🔇';
        if (soundLabel) soundLabel.textContent = 'Sound Off';
      }
    });
  }

  // 2. Mobile Menu Drawer
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  mobileMenuBtn?.addEventListener('click', openDrawer);
  mobileMenuClose?.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

  mobileDrawer?.addEventListener('click', (e) => {
    if (e.target === mobileDrawer) {
      closeDrawer();
    }
  });

  // 3. Form Submission Simulation
  const consultationForm = document.getElementById('consultationForm');
  const formSuccess = document.getElementById('formSuccessMessage');

  if (consultationForm && formSuccess) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!consultationForm.checkValidity()) {
        consultationForm.reportValidity();
        return;
      }

      const submitBtn = consultationForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting Request...';
      }

      setTimeout(() => {
        consultationForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
        formSuccess.classList.add('active');
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 600);
    });
  }

  // 4. Smooth Scrolling Offset for Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
