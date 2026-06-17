// Animate coverage bars when project cards enter view
const coverageBars = document.querySelectorAll('.coverage-fill');

const coverageObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const pct = el.dataset.pct || '0';
      requestAnimationFrame(() => { el.style.width = pct + '%'; });
      coverageObserver.unobserve(el);
    }
  });
}, { threshold: 0.3 });

coverageBars.forEach(el => coverageObserver.observe(el));

// Experience tabs
const expTabs = document.querySelectorAll('.exp-tab');
const expPanels = document.querySelectorAll('.exp-panel');

expTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    expTabs.forEach(t => t.classList.remove('active'));
    expPanels.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    document.querySelector(`.exp-panel[data-panel="${target}"]`)?.classList.add('active');
  });
});
