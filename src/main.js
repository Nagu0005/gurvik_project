// ============================================
// GURVIK — Interactive Controller
// Form → SMTP Email + WhatsApp
// ============================================

// ---- Mobile Menu ----
const menuBtn = document.getElementById('mobileMenuBtn');
const menuClose = document.getElementById('mobileMenuClose');
const drawer = document.getElementById('mobileDrawer');

if (menuBtn && drawer) {
  menuBtn.addEventListener('click', () => drawer.classList.add('active'));
}
if (menuClose && drawer) {
  menuClose.addEventListener('click', () => drawer.classList.remove('active'));
}
if (drawer) {
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) drawer.classList.remove('active');
  });
  drawer.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', () => drawer.classList.remove('active'));
  });
}


// ---- Form Submission → Email (SMTP) + WhatsApp ----
const form = document.getElementById('consultationForm');
const successMsg = document.getElementById('formSuccessMessage');

if (form && successMsg) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      if (!field.value.trim()) {
        valid = false;
        field.style.borderColor = '#e53935';
      } else {
        field.style.borderColor = '';
      }
    });
    if (!valid) return;

    // Collect data
    const data = new FormData(form);
    const formData = {
      fullName: data.get('fullName') || '',
      phoneNumber: data.get('phoneNumber') || '',
      emailAddress: data.get('emailAddress') || '',
      location: data.get('location') || '',
      projectBrief: data.get('projectBrief') || '',
      partnerConsent: data.get('partnerConsent') ? 'Yes' : 'No',
    };

    // Disable button
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    // 1. Send via FormSubmit.co (100% Static, No backend/server needed)
    try {
      const response = await fetch('https://formsubmit.co/ajax/contact@gurvik.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Consultation: ${formData.fullName} (${formData.location})`,
          _template: 'table',
          _captcha: 'false',
          'Full Name': formData.fullName,
          'Phone Number': formData.phoneNumber,
          'Email Address': formData.emailAddress,
          'Emirate': formData.location,
          'Project Brief': formData.projectBrief || 'None provided',
          'Consent to Contact': formData.partnerConsent
        }),
      });
      const result = await response.json();
      console.log('✅ FormSubmit response:', result);
    } catch (err) {
      console.warn('⚠️ Email delivery notice:', err.message);
    }

    // 2. WhatsApp dispatch
    const briefLine = formData.projectBrief ? `\n• Brief: ${formData.projectBrief}` : '';
    const waMessage = `Hello Gurvik Team,

New Consultation Request:
• Name: ${formData.fullName}
• Phone: ${formData.phoneNumber}
• Email: ${formData.emailAddress}
• Emirate: ${formData.location}${briefLine}
• Consent to Contact: ${formData.partnerConsent}`;

    const waUrl = `https://wa.me/971585330177?text=${encodeURIComponent(waMessage)}`;

    // Show success
    form.style.display = 'none';
    successMsg.classList.add('active');

    // Open WhatsApp
    setTimeout(() => window.open(waUrl, '_blank'), 800);
  });
}

// ---- Smooth Scroll ----
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- Header Shadow ----
const header = document.getElementById('siteHeader');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10 
      ? '0 1px 8px rgba(0,0,0,0.06)' 
      : 'none';
  });
}

// ---- Interactive Service Scope Toggles ----
document.querySelectorAll('.scope-toggle-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.service-card');
    if (!card) return;
    const isExpanded = card.classList.contains('expanded');

    // Close other cards for a clean, non-cluttered view
    document.querySelectorAll('.service-card.expanded').forEach(other => {
      if (other !== card) {
        other.classList.remove('expanded');
        const otherBtn = other.querySelector('.scope-toggle-btn');
        if (otherBtn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          const span = otherBtn.querySelector('span');
          if (span) span.textContent = 'View Technical Scope';
        }
      }
    });

    if (isExpanded) {
      card.classList.remove('expanded');
      btn.setAttribute('aria-expanded', 'false');
      const span = btn.querySelector('span');
      if (span) span.textContent = 'View Technical Scope';
    } else {
      card.classList.add('expanded');
      btn.setAttribute('aria-expanded', 'true');
      const span = btn.querySelector('span');
      if (span) span.textContent = 'Hide Technical Scope';
    }
  });
});

