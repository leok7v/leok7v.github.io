(function () {
  var order = ['system', 'light', 'dark'];
  var btn = document.getElementById('theme');
  var root = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  var mode = 'system';
  try {
    var saved = localStorage.getItem('codexese-theme');
    if (order.indexOf(saved) >= 0) { mode = saved; }
  } catch (e) { mode = 'system'; }
  function apply(next) {
    mode = next;
    if (mode === 'system') { root.removeAttribute('data-theme'); }
    else { root.setAttribute('data-theme', mode); }
    if (btn) {
      btn.setAttribute('data-mode', mode);
      btn.title = 'Theme: ' + mode + ' (click to change)';
      btn.setAttribute('aria-label', 'Theme: ' + mode + '. Click to change.');
    }
    if (meta) {
      var dark = mode === 'dark' || (mode === 'system' &&
                 window.matchMedia('(prefers-color-scheme: dark)').matches);
      meta.setAttribute('content', dark ? '#14162e' : '#f8f6f1');
    }
    try { localStorage.setItem('codexese-theme', mode); }
    catch (e2) { mode = next; }
  }
  apply(mode);
  if (btn) {
    btn.addEventListener('click', function () {
      apply(order[(order.indexOf(mode) + 1) % order.length]);
    });
  }
}());
