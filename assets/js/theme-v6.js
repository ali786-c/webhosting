/* ==========================================================================
   AASMART HOSTING - Theme V6 JS Handler
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');

  if (menuBtn && navLinks) {
    const toggleMenu = (state) => {
      const open = state !== undefined ? state : !navLinks.classList.contains('open');
      navLinks.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', open);
      menuBtn.textContent = open ? '✕' : '☰';
    };

    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    navLinks.querySelectorAll('a:not(.dropdown-toggle), .btn').forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu(false);
      });
    });

    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        toggleMenu(false);
      }
    });
  }

  // Mobile Dropdown Click Handler
  const dropdownToggles = document.querySelectorAll('.nav-item .dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 960) {
        e.preventDefault();
        e.stopPropagation();
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
