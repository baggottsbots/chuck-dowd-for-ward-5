tailwind.config = {
      theme: {
        extend: {
          colors: {
            navy: { 950: '#07182B', 900: '#0A2239', 800: '#102F4C', 700: '#173F63', 600: '#1F4E79' },
            gold: { 300: '#E7C878', 400: '#DDBB5F', 500: '#C9A227', 600: '#A9861D' },
            cream: { 50: '#FBF8F1', 100: '#F6F0E3', 200: '#EDE3CE' }
          },
          fontFamily: { display: ['Fraunces','Georgia','serif'], sans: ['Inter','system-ui','sans-serif'] }
        }
      }
    };

(function () {
      var nav = document.getElementById('site-nav');
      function toggle() { nav.classList.toggle('nav-scrolled', window.scrollY > 20); }
      window.addEventListener('scroll', toggle, { passive: true });
      toggle();
    })();
    (function () {
      var menu = document.getElementById('mobile-menu');
      var toggle = document.getElementById('menu-toggle');
      function openMenu() {
        menu.classList.remove('menu-hidden'); menu.classList.add('menu-visible');
        document.body.style.overflow = 'hidden';
        toggle.setAttribute('aria-expanded', 'true');
      }
      function closeMenu() {
        menu.classList.add('menu-hidden'); menu.classList.remove('menu-visible');
        document.body.style.overflow = '';
        toggle.setAttribute('aria-expanded', 'false');
      }
      toggle.addEventListener('click', openMenu);
      document.getElementById('menu-close').addEventListener('click', closeMenu);
      menu.querySelectorAll('.mobile-link').forEach(function (link) {
        link.addEventListener('click', closeMenu);
      });
    })();