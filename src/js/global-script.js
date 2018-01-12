$(document).ready(function() {

  function GridForEach() {
    "use strict";

    let elems = document.querySelectorAll('.grid__item');

    this.run = function() {
      for (let i = 0; i < elems.length; i++) {
        elems[i].addEventListener('click', classToggler);
      }
    };

    this.runForEach = function() {
      elems.forEach(callback);
    };

    function callback(item) {
      item.addEventListener('click', classToggler);
    }

    function classToggler() {
      this.classList.toggle('grid__item--fade');
    }
  }

  let gridForEach = new GridForEach();
//  gridForEach.run();
  gridForEach.runForEach();
});