$(document).ready(function() {
  /**
   * Basic dom node properties
   */
//  console.dir(document.body);
//  console.log(document.body);

  let elem = document.querySelectorAll('.animals');

//  console.log(elem[0].innerHTML = '<b>Not valid code');

  elem = document.querySelector('[name=search]');
//  console.dir(elem.outerHTML);

  // заменяем outerHTML на <p>...</p>
//  elem.outerHTML = '<p>Some new content</p>';
  // ... но содержимое div.outerHTML осталось тем же, несмотря
  // на "перезапись"
//  console.dir(elem.outerHTML);
  elem = document.querySelector('[name=search]');

//  elem.children[0].hidden = true;
  console.dir(elem.outerHTML);
});