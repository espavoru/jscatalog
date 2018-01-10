"use strict";
// document.addEventListener('DOMContentLoaded', function(){});
// (function(){}());

/* @type Array */
let items = document.querySelectorAll('.slider img'),
    /* @type Obj */
    btnPrev = document.querySelector('.slider__prev'),
    /* @type Obj */
    btnNext = document.querySelector('.slider__next'),
    /* @type number */
    currentSlideIndex = 0;

btnNext.addEventListener('click', getNextSlide);
btnPrev.addEventListener('click', getPrevSlide);


function getNextSlide() {
  items[currentSlideIndex].classList.remove('active');

  currentSlideIndex >= items.length -1 ?
    currentSlideIndex = 0 : currentSlideIndex++;

  items[currentSlideIndex].classList.add('active');
}

function getPrevSlide() {
  items[currentSlideIndex].classList.remove('active');

  currentSlideIndex <= 0 ?
    currentSlideIndex = items.length -1 : currentSlideIndex--;

  items[currentSlideIndex].classList.add('active');
}