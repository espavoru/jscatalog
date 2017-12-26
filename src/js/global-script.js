$(document).ready(function() {
  /**
   * Attributes and custom properties
   */
  let elem = document.querySelectorAll('[data-custom-search="site-search"]')[0];
  let elemData = elem.dataset;
  /*
   console.dir('Your element is: \n' +
   elem.outerHTML);
   console.log('\n\You looking for attribute: \n');
   console.log(elemData);
   console.dir('\n\Attribute value is: \n' + elemData.customSearch);
   */

  function setClass() {
    let css = 'a[href*="://"]:not([href*="http://internal.com"])';
    let links = document.querySelectorAll(css);

    for (var i = 0; i < links.length; i++) {
      links[i].classList.add('external');
    }
  }

//  setClass();

/*
 * Add custom class to elements
 */
  function setLinksBg() {
    "use strict";

    let links = document.querySelectorAll('a');

    for (let i = 0; i < links.length; i++) {
      let a = links[i];
      let href = a.getAttribute('href');

      if (!href) continue; // немає атрибуту
      if (href.indexOf('://') == -1) continue; // без протоколу
      if (href.indexOf('http://internal.com') === 0) continue; // внутрішня

      a.classList.add('external');
    }
  }

  setLinksBg();
});