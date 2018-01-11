window.onload = function() {

  function Grid() {
    "use strict";

    let items = document.querySelectorAll('.grid__item');

    this.classToggler = function() {
      this.classList.toggle('grid__item--active');
    };

    this.run = function() {
      for (var i = 0; i < items.length - 1; i++) {
        items[i].addEventListener('click', this.classToggler);
      }
    };
  }

let grid = new Grid();
grid.run();
};