// Privacy-friendly analytics by Plausible.
// Count public page visits, not local previews or embedded demonstrations.
(function () {
  if (!['aenguslynch.com', 'www.aenguslynch.com'].includes(window.location.hostname)) return;
  if (window.top !== window.self || window.plausibleInstalled) return;
  window.plausibleInstalled = true;
  window.plausible = window.plausible || function () {
    (window.plausible.q = window.plausible.q || []).push(arguments);
  };
  window.plausible.init = window.plausible.init || function (options) {
    window.plausible.o = options || {};
  };
  window.plausible.init();
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://plausible.io/js/pa-31-hNmQylSNVMBjwvKexe.js';
  document.head.appendChild(script);
})();
