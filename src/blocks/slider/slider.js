"use strict";
// document.addEventListener('DOMContentLoaded', function(){});
// (function(){}());

/* @type Array */
//let items = document.querySelectorAll('.slider img'),
//    /* @type Obj */
//    btnPrev = document.querySelector('.slider__prev'),
//    /* @type Obj */
//    btnNext = document.querySelector('.slider__next'),
//    /* @type number */
//    currentSlideIndex = 0,
//    timer = setInterval(getNextSlide, 5000);
//
//btnNext.addEventListener('click', getNextSlide);
//btnPrev.addEventListener('click', getPrevSlide);
//clearInterval(timer);
//
//function getNextSlide() {
//  items[currentSlideIndex].classList.remove('active');
//
//  currentSlideIndex >= items.length -1 ?
//    currentSlideIndex = 0 : currentSlideIndex++;
//
//  items[currentSlideIndex].classList.add('active');
//}
//
//function getPrevSlide() {
//  items[currentSlideIndex].classList.remove('active');
//
//  currentSlideIndex <= 0 ?
//    currentSlideIndex = items.length -1 : currentSlideIndex--;
//
//  items[currentSlideIndex].classList.add('active');
//}


/**
 * Simple sllider
 * @param {number} time - Timer in ms
 * @returns {Slider}
 */
function Slider(time) {
  let currentSlideIndex = 0,
      getNextSlide,
      timer,
      slider = this;

  this.items = document.querySelectorAll('.slider img');
  this.btnPrev = document.querySelector('.slider__prev');
  this.btnNext = document.querySelector('.slider__next');

  getNextSlide = function() { // Прив'язка контексту через bind
    this.items[currentSlideIndex].classList.remove('active');

    currentSlideIndex >= this.items.length - 1 ?
        currentSlideIndex = 0 : currentSlideIndex++;

    this.items[currentSlideIndex].classList.add('active');
  }.bind(this);

  function getPrevSlide() { // Збереження контексту через замикання
    slider.items[currentSlideIndex].classList.remove('active');

    currentSlideIndex <= 0 ?
        currentSlideIndex = slider.items.length - 1 : currentSlideIndex--;

    slider.items[currentSlideIndex].classList.add('active');
  }
  ;

  timer = setInterval(getNextSlide, time || 5000);

  this.start = function() {
    this.btnNext.addEventListener('click', getNextSlide);
    this.btnPrev.addEventListener('click', getPrevSlide);
    clearInterval(timer);
  };
}

//let slider1 = new Slider();
//slider1.start();

function User() {
  let firstName = '',
      surname = '';

  this.setFirstName = function(userFirstName) {
    firstName = userFirstName;
    return this;
  };

  this.setSurname = function(userSurname) {
    surname = userSurname;
    return this;
  };

  this.getFullName = function() {
    return firstName + ' ' + surname;
  };
}

let user = new User();
user.setFirstName('John');
user.setSurname('Smith');

//alert(user.getFullName());


