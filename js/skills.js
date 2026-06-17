const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const pct = el.dataset.pct || '0';
      requestAnimationFrame(() => { el.style.width = pct + '%'; });
      skillObserver.unobserve(el);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(el => skillObserver.observe(el));
