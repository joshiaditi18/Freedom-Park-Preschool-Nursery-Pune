// ===== FREEDOM PARK PRESCHOOL — GLOBAL SCRIPT =====

// Hamburger menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.animate-up').forEach(el => observer.observe(el));

  // -------- Generic Slider --------
  function initSlider(wrapSel, slideSel, prevSel, nextSel, dotsSel, auto = 4000) {
    const wrap   = document.querySelector(wrapSel);
    if (!wrap) return;
    const slider = wrap.querySelector(slideSel);
    const slides = slider.querySelectorAll(':scope > *');
    const dotsEl = document.querySelector(dotsSel);
    let current  = 0;
    let timer;

    function goTo(i) {
      current = (i + slides.length) % slides.length;
      slider.style.transform = `translateX(-${current * 100}%)`;
      if (dotsEl) {
        dotsEl.querySelectorAll('.dot').forEach((d, idx) => d.classList.toggle('active', idx === current));
      }
    }

    if (dotsEl) {
      slides.forEach((_, i) => {
        const d = document.createElement('button');
        d.className = 'dot' + (i === 0 ? ' active' : '');
        d.addEventListener('click', () => { goTo(i); resetTimer(); });
        dotsEl.appendChild(d);
      });
    }

    const prev = wrap.querySelector(prevSel) || document.querySelector(prevSel);
    const next = wrap.querySelector(nextSel) || document.querySelector(nextSel);
    if (prev) prev.addEventListener('click', () => { goTo(current - 1); resetTimer(); });
    if (next) next.addEventListener('click', () => { goTo(current + 1); resetTimer(); });

    function resetTimer() { clearInterval(timer); timer = setInterval(() => goTo(current + 1), auto); }
    if (auto) timer = setInterval(() => goTo(current + 1), auto);
  }

  // Gallery slider
  initSlider('.gallery-slider-wrap', '.gallery-slider', '.gallery-prev', '.gallery-next', '#gallery-dots', 3500);

  // Achievements slider
  initSlider('.ach-slider-wrap', '.ach-slider', '.ach-prev', '.ach-next', '#ach-dots', 3000);

  // -------- Admissions Upload --------
  const uploadArea = document.getElementById('upload-area');
  const fileInput  = document.getElementById('payment-proof');
  const dlBtn      = document.getElementById('download-btn');

  if (uploadArea && fileInput) {
    uploadArea.addEventListener('click', () => fileInput.click());
    uploadArea.addEventListener('dragover', e => { e.preventDefault(); uploadArea.style.borderColor = 'var(--orange)'; });
    uploadArea.addEventListener('dragleave', () => { uploadArea.style.borderColor = 'var(--sky)'; });
    uploadArea.addEventListener('drop', e => {
      e.preventDefault();
      fileInput.files = e.dataTransfer.files;
      handleUpload();
    });
    fileInput.addEventListener('change', handleUpload);
  }

  function handleUpload() {
    if (fileInput && fileInput.files.length > 0) {
      if (uploadArea) {
        uploadArea.innerHTML = `<div style="font-size:2.5rem">✅</div><p style="color:var(--green);font-weight:800">Payment proof uploaded! ✨</p><p style="font-size:0.85rem;color:var(--muted)">${fileInput.files[0].name}</p>`;
      }
      if (dlBtn) dlBtn.style.display = 'flex';
    }
  }

  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      if (btn) { btn.textContent = '✅ Message Sent!'; btn.style.background = 'linear-gradient(135deg, var(--green), #26A69A)'; }
      setTimeout(() => { if (btn) { btn.textContent = 'Send Message'; btn.style.background = ''; } contactForm.reset(); }, 3000);
    });
  }

  // Gallery category filter (just for visual, slides are always shown)
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});
