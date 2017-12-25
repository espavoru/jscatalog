$(document).ready(function() {
  /**
   * DOM searching elements
   */
  /**
   * Get DOM elements by tag names
   * @param {string} elem
   */
  function getElements(elem) {

    let table = document.getElementById('age-table');
    let elements = table.getElementsByTagName(elem);

    for (var i = 0; i < elements.length; i++) {
      let oneElem = elements[i];
      alert(oneElem.value + ': ' + oneElem.checked);
    }
  }
//  getElements('input');

  /**
   * Get elements by class
   * @param {strig} className
   */
  function getElemByClass(className) {
    "use strict";
    let parent = document.getElementsByClassName('mainTable')[0];
    let elementsArr = parent.getElementsByClassName(className);

    for (var i = 0; i < elementsArr.length; i++) {
      let oneElem = elementsArr[i];
      alert(`Elem ${i + 1} ` + oneElem.innerText);
    }
  }

//  getElemByClass('mainTable__cell');

  /**
   * Get all elements by css selector
   * @param {string} cssSelector
   */
  function getQuerySelAll(cssSelector) {
    "use strict";

    let elementArr = document.querySelectorAll(cssSelector);

    for (let i = 0; i < elementArr.length; i++) {
      let oneElem = elementArr[i];
      alert(oneElem.innerText);
    }
  }

//  getQuerySelAll('ul > li');


  /**
   * Get elements in diff ways
   */
  function getSomeEl() {
    let labels = document.querySelectorAll('#ageTable label');
    let firstCell = document.querySelectorAll('#ageTable tr:first-child td:first-child');
    let secondForm = document.querySelectorAll('form:nth-of-type(2)');
    let formSearch = document.getElementsByName('search')[0];
    let inputInSearch = document.querySelectorAll('form[name$=search] input');
    let infoEl = document.querySelector('[name="info[0]"]');
    let infoInForm = document.querySelector('form[name="search-person"] [name="info[0]"]');
    let lis = document.getElementsByTagName();

    for (var i = 0; i < inputInSearch.length; i++) {
      let elem = inputInSearch[i];
//      alert(elem.outerHTML);
    }

//    alert(firstCell[0].outerHTML);
//    alert(secondForm[0].outerHTML);
//    alert(formSearch.outerHTML);
//    alert(inputInSearch.outerHTML);
//    alert(infoEl.outerHTML);
//    alert(infoInForm.outerHTML);
  }

//  getSomeEl();

  function getListItems() {
      let lis = document.querySelectorAll('.animals li');
      for (var i = 0; i < lis.length; i++) {

        let title = lis[i].firstChild.data;

        title = title.trim();

        let childCount = +lis[i].getElementsByTagName('li').length;

        childCount ? alert(title + ': ' + childCount) :
          alert('- ' + title);
      }
    };

    getListItems();

});