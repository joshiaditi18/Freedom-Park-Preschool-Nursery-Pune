// Shared navbar HTML injected by each page
const NAV_HTML = `
<nav class="navbar">
  <a href="index.html" class="nav-logo">
    <div class="logo-icon">🌳</div>
    <div>
      <div style="font-size:1rem;line-height:1.1">FREEDOM PARK</div>
      <div style="font-size:0.65rem;font-weight:500;color:var(--muted);font-family:var(--font-body)">PRESCHOOL &amp; NURSERY</div>
    </div>
  </a>
  <button class="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="programs.html">Programs</a></li>
    <li><a href="whyus.html">Why Us</a></li>
    <li><a href="gallery.html">Gallery</a></li>
    <li><a href="achievements.html">Achievements</a></li>
    <li><a href="admissions.html">Admissions</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="footer-logo">
        <div class="logo-icon">🌳</div>
        <div class="footer-logo-text">Freedom Park Preschool
          <small>Preschool &amp; Daycare</small>
        </div>
      </div>
      <p>"Nurturing young minds with love, creativity, Indian values, and care since 2016."</p>
      <div class="footer-icons">🐘 🦁 🦚 🔤 🔢 🪔 🇮🇳</div>
    </div>
    <div>
      <h4>Quick Links</h4>
      <ul class="footer-links">
        <li><a href="index.html">🏠 Home</a></li>
        <li><a href="about.html">💛 About</a></li>
        <li><a href="programs.html">📚 Programs</a></li>
        <li><a href="gallery.html">🖼️ Gallery</a></li>
        <li><a href="contact.html">📞 Contact</a></li>
      </ul>
    </div>
    <div>
      <h4>Contact Us</h4>
      <ul class="footer-links">
        <li>📍 Padmavatinagari, Wadmukhwadi, Pune – 412105</li>
        <li style="margin-top:8px">📞 <a href="tel:9356860684">9356860684</a></li>
        <li style="margin-top:8px">✉️ <a href="mailto:freedomparkpreschool2016@gmail.com">freedomparkpreschool2016@gmail.com</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    © 2025 Freedom Park Preschool &amp; Nursery, Wadmukhwadi, Pune. All rights reserved. Made with 💛 for little learners.
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;

  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;
});
