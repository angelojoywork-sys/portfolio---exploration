(function () {
  var ROLES = {
    visual: { title: "Visual Designer", accent: "var(--yellow)" },
    ux: { title: "UX Designer", accent: "var(--green)" },
    engineer: { title: "Design Engineer", accent: "var(--blue)" },
    motion: { title: "Motion Designer", accent: "var(--violet)" },
    video: { title: "Video Editor", accent: "var(--red)" },
    photo: { title: "Photographer", accent: "var(--orange)" }
  };

  var home = document.getElementById("home");
  var detail = document.getElementById("detail");
  var stage = document.getElementById("detail-stage");
  var title = document.getElementById("detail-title");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  var lastButton = null;

  function show(role) {
    var data = ROLES[role];
    if (!data) {
      detail.hidden = true;
      home.hidden = false;
      document.title = "Angelo's Creative World";
      if (lastButton) { lastButton.classList.remove("squash"); lastButton.focus(); }
      return;
    }
    var btn = document.querySelector('.char[data-role="' + role + '"]');
    lastButton = btn;
    stage.replaceChildren(btn.querySelector("svg").cloneNode(true));
    detail.style.setProperty("--accent", data.accent);
    title.textContent = data.title;
    document.title = data.title + " · Angelo's Creative World";
    home.hidden = true;
    detail.hidden = false;
    window.scrollTo(0, 0);
    title.focus({ preventScroll: true });
  }

  function route() {
    show(location.hash.replace("#", ""));
  }

  document.querySelectorAll(".char").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var role = btn.dataset.role;
      if (reduced.matches) { location.hash = role; return; }
      btn.classList.add("squash");
      setTimeout(function () { location.hash = role; }, 380);
    });
  });

  document.getElementById("back").addEventListener("click", function (e) {
    e.preventDefault();
    if (location.hash) { history.pushState("", document.title, location.pathname + location.search); }
    route();
  });

  window.addEventListener("hashchange", route);
  if (location.hash) route();
})();
