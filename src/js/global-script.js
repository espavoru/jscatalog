$(document).ready(function() {
  "use strict";

  function Alert(options) {
    let classes = options.classes || 'alert',
        content = options.content || '<b>Hello</b> World!',
        place = document.querySelector(options.place) || document.body.children[0];

    this.newElem = document.createElement('div');
    this.newElem.className = classes;
    this.newElem.innerHTML = content;

    function insertTo() {
      place.parentNode.insertBefore(this.newElem, place);
    }

    this.run = function() {
      this.newElem.style.opacity = 1;
      insertTo.apply(this);
    };

    this.stop = function() {
      this.newElem.style.opacity = 0;
//      this.newElem.parentNode.removeChild(this.newElem);
    };

    return this;
  }

  let optionsW = {
    classes: 'alert alert--warning',
    content: '<b>Donec viverra</b> interdum turpis, a auctor nunc aliquam ac. Phasellus iaculis ex in justo eleifend volutpat. Vivamus cursus ex metus, a mollis massa sodales id.',
    place: '.grid'
  };

//  let mywarning = new Alert(optionsW);





  /**
   * Example of shops catalog with JS
   * @returns {global-scriptL#1.Category}
   */
  function Category() {
    let elems = document.querySelectorAll('.grid__item'),
        elemTotal = document.querySelector('.grid__total'),
        totalSum = 0;

    let optionsA = {
      classes: 'alert alert--success alert--fixed',
      content: '<b>Voluptas</b> sit aspernatur aut odit aut' +
          'fugit, sed quia consequuntur magni dolores eos',
      place: '.grid__total'
    };

    let  myalert = new Alert(optionsA);

    this.run = function() {
      elemTotal.innerHTML = totalSum + ' USD';



      for (let i = 0; i < elems.length; i++) {
        elems[i].addEventListener('click', function() {
          let price = +this.dataset.price;

          this.classList.contains('grid__item--active') ?
              totalSum -= price : totalSum += price;

          this.classList.toggle('grid__item--active');
          elemTotal.innerHTML = totalSum + ' USD';

          if (this.classList.contains('grid__item--active')) {
            myalert.run();
            setTimeout(function() {
              myalert.stop();
            }, 1000);
          } else {
            myalert.stop();
          }
        });
      }
    };
  }

  let category = new Category();
  category.run();
});