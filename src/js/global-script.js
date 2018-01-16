$(document).ready(function() {
  "use strict";

/**
 * Create popup
 * @param {Object} options
 * @returns {Object}
 */
  function MyPopup(options) {
    let closeBtn = options.closeBtn || false,
        width = options.width, // 400px, 60%
        timerOff = options.timerOff || false,
        content = options.content || 'Hello World',
        addCss = options.addCss;


    let popupOverlay = document.createElement('div');
    popupOverlay.className = 'popup';
    document.body.insertBefore(popupOverlay, null);

    let popupContent = document.createElement('div');
    popupContent.className = 'popup__content';
    popupContent.innerHTML = content;
    popupOverlay.insertBefore(popupContent, null);

    document.body.addEventListener('click', callback);
    document.body.addEventListener('keydown', closeEsc);
    function callback(e) {
      let target = e.target;

      if (target.matches('.popup') ||
          target.classList.contains('popup__close')) {
        remove(300);
//          target.remove();
//        target.parentNode.removeChild(target);
//        popupOverlay.classList.toggle('popup--hidden');;
      }

    }

    /**
     * Close popup on overlay click
     * @param {number} t - timer number in ms
     */
    function remove(t) {
      popupOverlay.classList.add('popup--hidden');
      setTimeout(function() {
        popupOverlay.remove();
      }, t);
    }

    /**
     * Close popup on Esc
     * @param {event} e
     */
    function closeEsc(e) {
      e.preventDefault();
      e.keyCode == 27 ? remove(300) : null;
    }

    /*
     * Create close button icon
     */
    function closeIcon() {
      let closeElem = document.createElement('div');
      closeElem.className = 'popup__close';
      closeElem.innerHTML = 'X';
      popupContent.appendChild(closeElem);
    }

    /*
     * Set width of popup
     * @param {string} width - popup width - 400px, 60% etc
     */
    function setWidth(width) {
      popupContent.style.width = width;
    }

    /*
     * Auto close popup on timer
     * @param {number} timerOff - time to close
     */
    function setTimerOff(timerOff) {
      setTimeout(function() {
        remove(300);
      }, timerOff);
    }

    /*
     * Add custom class to popup container
     * @param {string} addCss - custom css 'alert--success' etc
     */
    function customCss(addCss) {
      popupOverlay.classList.add(addCss);
    }

    closeBtn ? closeIcon() : null;
    width ? setWidth(width) : null;
    timerOff ? setTimerOff(timerOff) : null;
    addCss ? customCss(addCss) : null;
  }

/**
 * Create simple menu
 */
  function menu() {
    var elem = document.querySelector('.menu .btn__checkout');
    var options = {};
    var popupOverlay = document.querySelector('.popup');


    document.body.addEventListener('click', callback);

    function callback(e) {
      e.preventDefault();

      var target = e.target,
          dataPopup = target.dataset.popup;

      if (dataPopup) {
        menu[dataPopup]();
      }
    }

    menu.checkout = function() {
      var checkout = {
        content: '<p class="popup__head">Checkout</p>' +
            '<p class="popup__body">Donec viverra interdum turpis, a auctor nunc aliquam ac. Phasellus iaculis ex in justo eleifend volutpat. Vivamus cursus ex metus, a mollis massa sodales id.</p>',
        closeBtn: true,
        width: '90%'
      };
      var popup = new MyPopup(checkout);
    };

    menu.delivery = function() {
      var delivery = {
        content: '<p class="popup__head">Delivery</p>' +
            '<p class="popup__body">Donec viverra interdum turpis, a auctor nunc aliquam ac. Phasellus iaculis ex in justo eleifend volutpat. Vivamus cursus ex metus, a mollis massa sodales id.</p>',
        timerOff: 1000
      };
      var popup = new MyPopup(delivery);
    };

    menu.guarantee = function() {
      options.content = '<p class="popup__head">Guarantee</p>' +
          '<p class="popup__body">Phasellus risus metus, vulputate scelerisque arcu quis, faucibus volutpat risus. Praesent quis libero blandit, scelerisque magna fringilla, tristique dui. </p>';
      var popup = new MyPopup(options);
    };
  }

  menu();


  /**
   * Example of shops catalog with JS
   * @returns {global-scriptL#1.Category}
   */
  function Category() {
    let elems = document.querySelectorAll('.grid__item'),
        elemTotal = document.querySelector('.grid__total'),
        totalSum = 0,
        self = this;

    let options = {
      content: 'Hello World!',
      closeBtn: true,
      width: '60%',
      timerOff: false,
      timerOn: false,
      addCss: ''
    };
    let popupOverlay = document.querySelector('.popup');

    elemTotal.innerHTML = totalSum + ' USD';

    this.first = function() {
      options.content = 'Lorem Ipsum';
//      let popup1 = new MyPopup(options);
    };

    this.start = function() {
      document.body.addEventListener('click', callback);
    };

    function callback(e) {
      let target = e.target,
          price = +target.dataset.price;

      if (!target.classList.contains('grid__item'))
        return;

      target.classList.contains('grid__item--active') ?
          totalSum -= price : totalSum += price;

      target.classList.toggle('grid__item--active');
      elemTotal.innerHTML = totalSum + ' USD';

      let dataPopup = target.getAttribute('data-popup');
//          popupOverlay = document.querySelector('.popup');

      if (dataPopup) {
//        self[dataPopup]();
//        popupOverlay.classList.toggle('popup--hidden');
      }
    }
  }

  let category = new Category();
  category.start();
});