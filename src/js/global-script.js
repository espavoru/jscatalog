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
//  gridForEach.runForEach();

  /*
   * Navigation with child
   */
  function Children(_class) {
    "use strict";
    let elems = document.querySelector(_class);

    this.run = function() {
      let result = elems.parentNode.children[1].lastElementChild;

      result = !elems.firstChild ? 'Empty' : ('Has some children \n' +
          'First child \n');

      console.log(elems);
      console.log(result);
      return this;
    };
  }

  let children = new Children('.grid');
//  children.run();

  /*
   *
   */
  function GetElementsBy(cls) {
    let elem = document.querySelectorAll(cls),
        elems = document.querySelectorAll(cls),
        childs;



    this.run = function() {
      childs = elem.getElementsByTagName('*');
      console.dir(childs);

      for (let i = 0; i < childs.length; i++) {
        childs[i].addEventListener('click', function(e) {
          console.log(this);
          this.style.background = '#333';
        });
      }
    };

    this.runArr = function() {
      console.log(elems);

      for (let i = 0; i < elems.length; i++) {
        elems[i].addEventListener('click', function() {
          this.classList.toggle('grid__item--active');

          if (this.innerHTML) {
            setTimeout(function() {
              elem[i].innerHTML = '';
            }, 700);
          } else {
            this.innerHTML = 'div ' + (i + 1);
          }
        });
      }
    };
  }

  let getElementsBy = new GetElementsBy('.grid *');
//  getElementsBy.run();
  getElementsBy.runArr();

});