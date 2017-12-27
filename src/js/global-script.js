$(document).ready(function() {
  /**
   * Modifying document
   */

  function makeElem() {
    "use strict";

    let main = document.querySelector('main');

    let div = document.createElement('div');
    div.classList.add('alert', 'alert--success');
    div.innerHTML = '<strong>Hello!</strong> BroWorld';

//    main.insertBefore(div, main.querySelector('hr'));
//    main.querySelector('[name=search]').insertBefore(
//        div, main.querySelector('[type=submit]'));
    main.querySelector('[name="search"]').insertBefore(
        div, main.querySelector('label').nextSibling);

    let div2 = div.cloneNode(true);
    div2.querySelector('strong').innerHTML = 'Wats up!';
    div2.classList.add('alert--warning');
    div2.classList.remove('alert--success');
    div.parentNode.insertBefore(div2, div.nextSibling);

    makeElem.remove = function() {
      setTimeout(function() {
        div.parentNode.removeChild(div2);
      }, 2000);
    };
  }

//  makeElem();
//  makeElem.remove();

  function makeTextNode() {
    "use strict";

    let div = document.createElement('div');
    let parentNode = document.querySelector('main');
    div.classList.add('alert', 'alert--danger');
    parentNode.appendChild(div);

    let message = prompt('Enter your message', '<b>Some</b> html cntent');

    // вставится именно как текст, без HTML-обработки
    div.appendChild(document.createTextNode(message));
  }

//  makeTextNode();

  /*
   * Polyfill for remove elem
   */
  (function() {
    if (!Element.prototype.remove) {
      Element.prototype.remove = function remove() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      };
    }
  })();

  elem = document.querySelector('[name=search]');
//  elem.remove();

  /*
   * Insert element after
   */
  let insertAfter = function(elem, refElem) {
    return refElem.parentNode.
        insertBefore(elem, refElem.nextSibling);
  };

  let refElem = document.querySelector('hr');
  elem = document.createElement('div');
  elem.textContent = 'Donec viverra interdum turpis, a auctor' +
      'nunc aliquam ac. Phasellus iaculis ex in justo eleifend' +
      'volutpat. Vivamus cursus ex metus, a mollis massa sodales id.';
  elem.classList.add('alert', 'alert--success');

//  insertAfter(elem, refElem);

/**
 * Remoove all childrens
 * @param {string} elem
 */
  function removeChildren(elem) {
    try {
      elem.innerHTML = '';
    } catch (e) {
      while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
      }
    }
  }

  elem = document.getElementById('ageTable');
//  removeChildren(elem);

/**
 * Create list with items
 */
  function createList() {
    "use strict";

    let ul = document.createElement('ul');
    let main = document.querySelector('main');

    main.appendChild(ul);

    while (true) {
      let userData = prompt('Enter your text for list item', '');

      if (!userData) {
        break;
      }

      let li = document.createElement('li');
      li.appendChild(document.createTextNode(userData));
      ul.insertBefore(li, null);
    }
  }

  createList();
});