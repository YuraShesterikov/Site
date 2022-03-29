(function () {
  const sizeLink = document.querySelectorAll('.size__link');
  const activeClass = 'size__link--active';

  sizeLink.forEach(function (sizeLin) {
    sizeLin.addEventListener('click', function (e) {
      e.preventDefault('click');
      sizeLink.forEach(function (link) {
        link.classList.remove(activeClass);
      })
      sizeLin.classList.add(activeClass);
    })
  })
})();