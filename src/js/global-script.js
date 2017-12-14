$(document).ready(function () {
  /*
   * Arrays
   */
  /**
   * getLastEl
   */
  function getLastEl() {
    var goods = [
      'toys',
      'pups',
      'food',
      'accessories',
      'sweets'
    ];
    var lastEl;

    return lastEl = goods[goods.length - 1];
  }

//  alert(getLastEl());

  /**
   * addToEnd
   */
  function addToEnd(newEl) {
    var goods = [
      'toys',
      'pups',
      'food',
      'accessories',
      'sweets'
    ];

    newEl = prompt('What is new element?', '');

    goods.push(newEl);
    return goods;
  }

//  alert(addToEnd());;

  /**
   * makeArray
   */
  function makeArray() {
    var style = [];

    style.push('Jazz', 'Bluez');
    alert('Add new items \n' + style);

    style.push('Rock&Roll');
    alert('Add anoter one \n' + style);

    style[style.length - 2] = 'Classic';
    alert('Replace second from end \n' + style);

    alert('Remove first item \n' + style.shift() + '\n' + style);

    style.unshift('Rap', 'Raggey');
    alert('Final result \n' + style);
  }

//  makeArray();
});