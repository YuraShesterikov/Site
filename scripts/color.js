(function () {
  const elem = document.querySelector('.buy__content--left');
  const iso = new Isotope(elem, {
    itemSelector: '.buy__content--item',
    filter: '.black'
  });

  const colorLink = document.querySelectorAll('.color__link');
  const activeClass = 'color__item--active';

  colorLink.forEach(function (colorLin) {
    colorLin.addEventListener('click', function (e) {
      e.preventDefault('click');
      const filterName = colorLin.getAttribute('data-filter');
      colorLink.forEach(function (link) {
        link.closest('.color__item').classList.remove(activeClass);
      })
      colorLin.closest('.color__item').classList.add(activeClass);
      iso.arrange({
        filter: `.${filterName}`
      })
    })
  })
})();

