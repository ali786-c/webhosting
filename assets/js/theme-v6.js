/* ==========================================================================
   AASMART HOSTING - Theme V6 JS Handler
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
    });

    navLinks.querySelectorAll('a:not(.dropdown-toggle)').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Mobile Dropdown Click Handler
  const dropdownToggles = document.querySelectorAll('.nav-item .dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 960) {
        e.preventDefault();
        const parent = toggle.closest('.nav-item');
        if (parent) parent.classList.toggle('open');
      }
    });
  });

  // Ticking Latency Counter in Status Strip
  const lat = document.getElementById('latency');
  if (lat && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setInterval(() => {
      lat.textContent = (34 + Math.floor(Math.random() * 12)) + 'ms';
    }, 2500);
  }

  // Domain Search Helper -> WHMCS Domain Checker
  const WHMCS = 'https://my.aasmarthosting.com';
  const domainBtn = document.getElementById('domainBtn');
  const domainInput = document.getElementById('domainInput');

  function searchDomain() {
    if (!domainInput) return;
    const q = domainInput.value.trim();
    if (!q) return;
    window.location.href = WHMCS + '/cart.php?a=add&domain=register&query=' + encodeURIComponent(q);
  }

  if (domainBtn && domainInput) {
    domainBtn.addEventListener('click', searchDomain);
    domainInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') searchDomain();
    });
  }
});
