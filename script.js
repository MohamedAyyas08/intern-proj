// Responsive nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');

  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu after choosing a link
  primaryNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && primaryNav.classList.contains('open')) {
      primaryNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Update active nav link on scroll
  const sections = ['home', 'features'].map(id => document.getElementById(id)).filter(Boolean);
  const navLinks = Array.from(primaryNav.querySelectorAll('a'));

  const setActive = (id) => {
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + id);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(section => observer.observe(section));

  // Watch Demo button placeholder interaction
  document.getElementById('watch-demo').addEventListener('click', () => {
    alert('Demo video coming soon!');
  });

  // Subscribe form
  const subscribeForm = document.getElementById('subscribe-form');
  const subscribeNote = document.getElementById('subscribe-note');

  subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('subscribe-email').value.trim();
    if (email) {
      subscribeNote.textContent = 'Thanks — check your inbox to confirm your subscription.';
      subscribeNote.classList.add('success');
      subscribeForm.reset();
    }
  });
