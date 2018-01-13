$(document).ready(function() {
  "use strict";

  function Category() {
    let elems = document.querySelectorAll('.grid__item'),
        elemTotal = document.querySelector('.grid__total'),
        totalSum = 0;


    this.run = function() {
      elemTotal.innerHTML = totalSum + ' USD';


      for (let i = 0; i < elems.length; i++) {
        elems[i].addEventListener('click', function(){
          let price = +this.dataset.price;

          this.classList.contains('grid__item--active') ?
            totalSum -= price : totalSum += price;

          this.classList.toggle('grid__item--active');
          elemTotal.innerHTML = totalSum + ' USD';
        });
      }

    };
  }

  let category = new Category();
  category.run();
});