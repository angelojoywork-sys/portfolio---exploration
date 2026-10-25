(() => {
  const ROLES = {
    visual:   { title: 'Visual Designer',  color: 'var(--yellow)' },
    ux:       { title: 'UX Designer',      color: 'var(--green)' },
    engineer: { title: 'Design Engineer',  color: 'var(--blue)' },
    motion:   { title: 'Motion Designer',  color: 'var(--violet)' },
    video:    { title: 'Video Editor',     color: 'var(--red)' },
    photo:    { title: 'Photographer',     color: 'var(--orange)' },
  };

  const home = document.getElementById('home');
  const role = document.getElementById('role');
  const stage = document.getElementById('role-stage');
  const title = document.getElementById('role-title');
  const back = document.getElementById('back');
  const buttons = [...document.querySelectorAll('.char-btn')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Build the mis-registered colour: clone each drawing into a fill-only layer
  // nudged a few px away from the outline layer.
  document.querySelectorAll('.shape').forEach((shape) => {
    const fill = shape.cloneNode(true);
    fill.classList.add('fill-layer');
    fill.setAttribute('transform', 'translate(4 3)');
    shape.classList.add('line-layer');
    shape.before(fill);
  });

  const byRole = (key) => buttons.find((b) => b.dataset.role === key);

  function show(key, { focus = true } = {}) {
    const data = ROLES[key];
    if (!data) {
      role.hidden = true;
      home.hidden = false;
      document.title = "Angelo's Creative World";
      return;
    }
    const src = byRole(key);
    stage.replaceChildren(src.querySelector('.bobber').cloneNode(true));
    stage.style.setProperty('--c', src.style.getPropertyValue('--c'));
    role.style.setProperty('--c', data.color);
    title.textContent = data.title;
    document.title = `${data.title} · Angelo's Creative World`;
    home.hidden = true;
    role.hidden = false;
    window.scrollTo(0, 0);
    if (focus) title.focus({ preventScroll: true });
  }

  function route({ focusBack = false } = {}) {
    const key = location.hash.slice(1);
    const wasRole = !role.hidden;
    show(ROLES[key] ? key : '');
    if (!ROLES[key] && focusBack && wasRole) {
      const last = byRole(route.last);
      if (last) last.focus();
    }
    route.last = ROLES[key] ? key : route.last;
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const go = () => { location.hash = btn.dataset.role; };
      if (reduceMotion.matches) return go();
      btn.classList.add('squash');
      setTimeout(() => { btn.classList.remove('squash'); go(); }, 330);
    });
  });

  back.addEventListener('click', () => {
    if (history.length > 1 && route.last) history.back();
    else location.hash = '';
  });

  window.addEventListener('hashchange', () => route({ focusBack: true }));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !role.hidden) back.click();
  });

  route();
})();
