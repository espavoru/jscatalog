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

  /**
   * getRandomEl
   */
  function getRandomEl() {
    var rndEl,
            arr = [];

    arr.push(
            'Apple',
            'Orange',
            'Pich',
            'Lemon');

    rndEl = Math.floor(Math.random() * arr.length);
    return arr[rndEl];
  }

//  alert(getRandomEl());

  /**
   * doMath
   */
  function doMath() {
    var array = [];

    while (true) {
      var num = prompt('What is your number bro?', '0');

      if (num === '' || num === null || isNaN(num))
        break;

      array.push(num);
//      result += +num; // short cheat variant )
    }

    var result = 0;
    for (var i = 0; i < array.length; i++) {
      result += +array[i];
    }

    alert(array + '\n \n' + 'Total sum: ' + result);
  }

//  doMath();

  /**
   * findInArr
   */
  var arr = ['test', 2, 1.5, 2, false];

  function findInArr(arr, value) {
    for (var i = 0; i < arr.length; i++) {
      var result = -1;
      if (value === arr[i]) {
        result = i;
        alert('Array: \n' + arr + '\n\n' +
                'Found ' + value + ' at ' +
                result + ' position');
      }
    }
    if (result === -1)
      alert('Found nothing');
  }

//  findInArr(arr, 'test');
//  findInArr(arr, 2);
//  findInArr(arr, 1.5);
//  findInArr(arr, 1);

  if ([].indexOf) {

    var find = function (array, value) {
      return array.indexOf(value);
    }

  } else {
    var find = function (array, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i] === value)
          return i;
      }

      return -1;
    }
  }

  var arr = ["a", -1, 2, "b"];
  var index = find(arr, 2);

//  alert(index);

  /**
   * filterRange
   */
  function filterRange(arr, a, b) {
    var cloneArray = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] >= a && arr[i]<= b) {
        cloneArray.push(arr[i]);
      }
    }
    return cloneArray;
  }

  var arr = [5,4,3,8,0];
  var filtered = filterRange(arr, 3, 5);

  alert(
          'Start array is \n' +
          arr + '\n\n' +
          'Filtered array is \n' +
          filtered);
});