// Negocios con Diana — interacciones del sitio.
(function () {
  'use strict';

  // Menú hamburguesa
  var cabecera = document.getElementById('cabecera');
  var botonMenu = cabecera.querySelector('.hamburguesa');
  function cerrarMenu() {
    cabecera.classList.remove('abierta');
    botonMenu.setAttribute('aria-expanded', 'false');
    botonMenu.setAttribute('aria-label', 'Abrir menú');
  }
  botonMenu.addEventListener('click', function () {
    var abierta = cabecera.classList.toggle('abierta');
    botonMenu.setAttribute('aria-expanded', String(abierta));
    botonMenu.setAttribute('aria-label', abierta ? 'Cerrar menú' : 'Abrir menú');
  });
  cabecera.querySelectorAll('.nav a').forEach(function (a) { a.addEventListener('click', cerrarMenu); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrarMenu(); });

  // Video: carga YouTube solo al hacer clic
  var botonVideo = document.querySelector('.video__boton');
  if (botonVideo) {
    botonVideo.addEventListener('click', function () {
      var id = botonVideo.getAttribute('data-video');
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      iframe.title = 'Los 7 frenos mentales que te están limitando de emprender';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      botonVideo.replaceWith(iframe);
    });
  }

  // Carruseles (solo activos en celular; en pantallas grandes se ven como rejilla)
  document.querySelectorAll('[data-carrusel]').forEach(function (carrusel) {
    var pista = carrusel.querySelector('.carrusel__pista');
    var items = Array.prototype.slice.call(pista.children);
    var puntos = carrusel.querySelector('.carrusel__puntos');
    var pos = carrusel.querySelector('.carrusel__pos');
    var flechas = carrusel.querySelectorAll('.carrusel__flecha');
    var actual = 0;

    items.forEach(function () { puntos.appendChild(document.createElement('i')); });

    function pintar() {
      Array.prototype.forEach.call(puntos.children, function (p, i) { p.classList.toggle('activo', i === actual); });
      pos.textContent = (actual + 1) + ' / ' + items.length;
      flechas[0].disabled = actual === 0;
      flechas[1].disabled = actual === items.length - 1;
    }

    function irA(i) {
      actual = Math.max(0, Math.min(items.length - 1, i));
      pista.scrollTo({ left: items[actual].offsetLeft - items[0].offsetLeft, behavior: 'smooth' });
      pintar();
    }

    flechas.forEach(function (f) {
      f.addEventListener('click', function () { irA(actual + Number(f.getAttribute('data-dir'))); });
    });

    var espera;
    pista.addEventListener('scroll', function () {
      clearTimeout(espera);
      espera = setTimeout(function () {
        var inicio = pista.scrollLeft + items[0].offsetLeft;
        var cercano = 0, distancia = Infinity;
        items.forEach(function (item, i) {
          var d = Math.abs(item.offsetLeft - inicio);
          if (d < distancia) { distancia = d; cercano = i; }
        });
        if (pista.scrollLeft + pista.clientWidth >= pista.scrollWidth - 4) cercano = items.length - 1;
        actual = cercano;
        pintar();
      }, 80);
    }, { passive: true });

    pintar();
  });

  // Animación suave al aparecer cada sección
  var animables = document.querySelectorAll('.aparecer');
  if ('IntersectionObserver' in window) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); observador.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    animables.forEach(function (el) { observador.observe(el); });
  } else {
    animables.forEach(function (el) { el.classList.add('visible'); });
  }
})();
