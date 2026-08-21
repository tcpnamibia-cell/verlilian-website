(function () {
  var toggle = document.getElementById('nav-toggle');
  var list = document.getElementById('nav-list');
  if (!toggle || !list) return;

  toggle.addEventListener('click', function () {
    var open = list.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  list.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      list.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 4 ? '0 1px 0 rgba(20,23,28,0.06)' : 'none';
    }, { passive: true });
  }
})();
