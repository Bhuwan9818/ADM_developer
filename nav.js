/* ── NAV + FOOTER INJECTOR ── */
(function() {
  const page = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'index.html',   label: 'Home' },
    { href: 'about.html',      label: 'About' },
    // { href: 'index.html#amenities',  label: 'Amenities' },
    { href: 'index.html#location',   label: 'Location' },
    { href: 'index.html#pricing',    label: 'Pricing' },
    // { href: 'index.html#gallery',    label: 'Gallery' },
    // { href: 'about.html',  label: 'Our Story' },
    { href: 'contact.html',label: 'Contact' },
  ];

  const dlIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;

  const navHTML = `
  <nav id="mainNav" class="scrolled">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-badge">ADM</div>
      <div class="nav-logo-text">
        <strong>Mayur City</strong>
        <span>Sector-27, Jhajjar</span>
      </div>
    </a>

    <ul class="nav-center">
      ${links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
    </ul>

    <div class="nav-right">
      <a href="brochure.pdf" download class="btn-dl" title="Download Brochure">
        ${dlIcon} Brochure
      </a>
      <a href="pricelist.pdf" download class="btn-dl" title="Download Price List">
        ${dlIcon} Price List
      </a>
      <a href="contact.html" class="btn-enquire desktop-only">Enquire Now</a>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- Mobile Drawer -->
  <div class="mobile-menu" id="mobileMenu">
    <ul>
      ${links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
    </ul>
    <div class="mobile-dl-group">
      <a href="brochure.pdf" download class="btn-dl">${dlIcon} Download Brochure</a>
      <a href="pricelist.pdf" download class="btn-dl">${dlIcon} Download Price List</a>
    </div>
    <a href="contact.html" class="btn-enquire">Enquire Now →</a>
  </div>`;

  const footerHTML = `
  <footer>
    <div class="footer-grid">
      <div>
        <div class="footer-brand-name">Mayur City</div>
        <div class="footer-brand-by">by ADM Developers</div>
        <p class="footer-desc">A RERA-registered gated affordable plotted colony under Deen Dayal Jan Awas Yojna, Sector-27, Jhajjar, Haryana. Spread over 18.325 acres with 311 plots.</p>
        <div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap;">
          <a href="brochure.pdf" download class="btn-dl" style="border-color:rgba(255,255,255,.25);font-size:11px;padding:8px 14px;">
            <svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Brochure
          </a>
          <a href="pricelist.pdf" download class="btn-dl" style="border-color:rgba(255,255,255,.25);font-size:11px;padding:8px 14px;">
            <svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Price List
          </a>
          <a href="layout-plan.pdf" download class="btn-dl" style="border-color:rgba(255,255,255,.25);font-size:11px;padding:8px 14px;">
            <svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Layout Plan
          </a>
          <a href="rera-certificate.pdf" download class="btn-dl" style="border-color:rgba(255,255,255,.25);font-size:11px;padding:8px 14px;">
            <svg style="width:12px;height:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            RERA Certificate
          </a>
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Project</div>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="index.html#about">About Project</a></li>
          <li><a href="index.html#amenities">Amenities</a></li>
          <li><a href="index.html#pricing">Price List</a></li>
          <li><a href="index.html#gallery">Gallery</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Company</div>
        <ul>
          <li><a href="about.html">Our Story</a></li>
          <li><a href="about.html#vision">Vision & Mission</a></li>
          <li><a href="index.html#location">Location</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Legal</div>
        <ul>
          <li><a href="rera-certificate.pdf" download>RERA Certificate</a></li>
          <li><a href="brochure.pdf" download>Brochure PDF</a></li>
          <li><a href="pricelist.pdf" download>Price List PDF</a></li>
          <li><a href="layout-plan.pdf" download>Layout Plan PDF</a></li>
          <li><a href="contact.html">Site Visit</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 ADM Developers. All rights reserved.</span>
      <span class="footer-rera">RERA: HRERA-PKL-JJR-678-2025</span>
      <span>Sector-27, Jhajjar, Haryana</span>
    </div>
  </footer>`;

  // Inject nav
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  // Inject footer
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Active link highlight
  document.querySelectorAll('.nav-center a, .mobile-menu a').forEach(a => {
    if (a.href.split('#')[0].endsWith(page) && !a.href.includes('#')) {
      a.classList.add('active');
    }
  });

  // Nav scroll
  const nav = document.getElementById('mainNav');
  function checkScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', checkScroll);
  checkScroll();

  // Hamburger toggle
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  ham.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    ham.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  // Close on link click
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      ham.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
})();
