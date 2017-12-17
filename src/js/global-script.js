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

  /*
   * Check is value a numeric
   *
   * @param {(string|number|boolean)} num - what to check
   * @returns {Boolean}
   */
  function isNumeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  }

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

  /*
   * Make array, by adding prompt items
   */
  function makeArray() {
    /** @type Array */
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

  /*
   * Sum all of array items
   */
  function doMath() {
    /** @type [number] */
    var array = [];

    while (true) {
      /** @type {number} */
      var num = prompt('What is your number bro?', '0');
      /** @type Number */
      var result = 0;

      if (num === '' || num === null || isNaN(num))
        break;

      array.push(num);
//      result += +num; // short cheat variant )
    }

    for (var i = 0; i < array.length; i++) {
      result += +array[i];
    }

    alert(array + '\n \n' + 'Total sum: ' + result);
  }

//  doMath();


  /*
   * Find value in array
   *
   * @param {[string|number|boolean]} arr - where to find fings
   * @param {(string|number|boolean)} value - what to find
   */
  function findInArr(arr, value) {
    for (var i = 0; i < arr.length; i++) {
      /** @type Number */
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

  /** @type Array */
  var people = ['test', 2, 1.5, 2, false];

//  findInArr(arr, 'test');
//  findInArr(arr, 2);
//  findInArr(arr, 1.5);
//  findInArr(arr, 1);

  if ([].indexOf) {

    /*
     * Find value in array
     *
     * @param {[string|number|boolean]} array - where find fings
     * @param {(string|number|boolean)} value - what to find
     * @returns {(string|number|boolean)}
     */
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

  /** @type Array */
  var people = ["a", -1, 2, "b"];
  var index = find(people, 2);

//  alert(index);

  /**
   * Filter items in range
   * @param {number[]} arr - numbers to filter
   * @param {number} a - min range limit
   * @param {number} b - max range limit
   * @returns {number[]}
   */
  function filterRange(arr, a, b) {
    /** @type {number[]} */
    var cloneArray = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] >= a && arr[i] <= b) {
        cloneArray.push(arr[i]);
      }
    }
    return cloneArray;
  }

  var people = [5, 4, 3, 8, 0];
  var filtered = filterRange(people, 3, 5);

  /*alert(
   'Start array is \n' +
   arr + '\n\n' +
   'Filtered array is \n' +
   filtered);
   */

  /**
   * Add class to object
   * @param {Object.<strng, strng>} obj - object with classes
   */
  var obj = {
    className: 'open menu'
  };

  function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];

    for (var i = 0; i < classes.length; i++) {
      if (classes[i] == cls)
        return;
    }

    classes.push(cls);
    obj.className = classes.join(' ');

    alert('New values ' + obj.className);
  }

  /*addClass(obj, 'nav-bar');
   addClass(obj, 'open');
   addClass(obj, 'nav-brand');*/

  /**
   * Remove symbols '-' from string prop, capitalize words and
   * join in one string
   *
   * @param {string} str - string to convert
   */
  function camelize(str) {
    /** @type {string[]} */
    var arr = str.split('-');

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    str = arr.join('');

    alert('Changes ' + str);
  }

  /*camelize('left-border-width');
   camelize('top-border-color');
   camelize('grid-template-areas');*/

  /**
   * Looking for class in object prop. If find one - remove it.
   *
   * @param {Object.<string, string>} obj - All classes
   * @param {string} cls - class to remove
   */
  function removeClass(obj, cls) {
    /** @type {string[]} */
    var arrClasses = obj['className'] ?
            obj['className'].split(' ') : [];

    for (var i = 0; i < arrClasses.length; i++) {
      if (arrClasses[i] == cls) {
        arrClasses.splice(i, 1);
        i--;
      }
    }

    obj.className = arrClasses.join(' ');
    alert('Remove class \n' + cls + '\n\n' +
            'New classList \n' + obj['className']);
  }

  /** @type {Object.<string, string>} */
  var obj = {};
  obj['className'] = 'open menu btn list btn menu grid-item';

  /*removeClass(obj, 'open');
   removeClass(obj, 'menu'); // also remove all duplicates
   removeClass(obj, 'btn'); // also remove all duplicates
   removeClass(obj, 'grid-item');*/


  /**
   * Take array with numbers and remove all values not included
   * in range from 'a' to 'b'
   *
   * @param {number[]} arr - array with numbers
   * @param {number} a - min value of range
   * @param {number} b - max value of range
   */
  function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
      var value = arr[i];
      if (a > value || value > b)
        arr.splice(i--, 1); // remove i el and reduce i by 1
    }
  }
  /** @type {number[]} */
  var people = [1.8, 5, 3, 8, 2, 1, 9, 12];

//  filterRangeInPlace(arr, 1, 4);
//  alert(arr);

  /**
   * Sort array with numbers in Desc/Asc order
   * @param {number[]} arr - Array with numbers
   */
  function sortArrayDesc(arr) {
    function compare(a, b) {
      return b - a; // Desc
//      return a - b; // Asc
    }

    arr.sort(compare);
    alert('New sorted order \n' + arr);
  }

  /** @type {number[]} */
  var people = [5, 2, 1, -10, 8];
//  sortArrayDesc(arr);


  /**
   * Randomize elements in array
   * @param {[number]} arr
   * @returns {[number|string]}
   */
  function sortRandom(arr) {
    /** Random sort */
    function compareRandom() {
      return Math.random() - 0.5;
    }

    return arr.sort(compareRandom);
  }
  /** @type [number] */
  var arrNum = [1, 2, 3, 4, 5, 6];
  /** @type [string] */
  var arrStr = ['a', 'b', 'c', 'd', 'e'];
  /** @type [number|string] */
  var arrMixed = ['1', 'b', '2', 'd', '3', 'f'];
  /*
   alert(sortRandom(arrNum));
   alert(sortRandom(arrStr));
   alert(sortRandom(arrMixed));
   */

  /**
   * Sort array by field value
   * @param {Array} arr
   */
  function sortByField() {
    /** Sort function */
    function compareAge(personA, personB) {
      return personA.age - personB.age;
    }

    /* @type Object */
    var john = {name: 'John', age: 23};
    var kate = {name: 'Kate', age: 18};
    var rob = {name: 'Robin', age: 9};
    /* @type Array */
    var people = [john, kate, rob];

    people.sort(compareAge);

    for (var i = 0; i < people.length; i++) {
      alert('New order\n' + people[i].name);
    }
  }

//  sortByField();


  /*
   * Display nested list
   * @param {Object} list
   */
  function printList(list) {
    /* @type Object */
    var tmp = list;

    while (tmp) {
      alert(tmp.value);
      tmp = tmp.next;
    }
  }

  /* @type Object */
  var list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

//  printList(list);


  /*
   * Display nested list reversed
   * @param {Object} list
   */
  function printReverseList(list) {
    /* @type Array */
    var arr = [];
    /* @type Object */
    var tmp = list;

    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }

    for (var i = arr.length - 1; i >= 0; i--) {
      alert(arr[i]);
    }
  }

  /* @type Object */
  var list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

//  printReverseList(list);

  /*
   * Return array with only unique values
   * @param {[sting|number]} arr
   * @returns {Array}
   */
  function unuque(arr) {
    /* @type Object */
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
      /* @type (string|number|boolean) */
      var str = arr[i];
      obj[str] = true; // запомнить строку в виде свойства объекта
    }

    return Object.keys(obj); // или собрать ключи перебором для IE8-
  }

  /* @type [string|number] */
  var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
  ];

//  alert(unique(strings)); // кришна, харе, 8-()

  /**
   * Get array with string elements length
   * @returns {Array}
   */
  function getArrElLength() {
    /* @type [string] */
    var arr = ['Life', 'exist', 'on', 'Mars'];
    /* @type [number] */
    var arrLength = arr.map(function (item) {
      return item.length;
    });

    return arrLength;
  }

//  alert(getArrElLength()); // 4,5,2,4


/*
 * Get sums of numbers for each index
 * @param {[number]} arr - Array with numbers to summ
 * @returns {[number]}
 */
  function getSums(arr) {
    /* @type [number] */
    var result = [];
    if (!arr.length)
      return result;
    /* @type [number] */
    var totalSum = arr.reduce(function (sum, item) {
      result.push(sum);
      return sum + item;
    });
    result.push(totalSum);

    return result;
  }

//  alert(getSums([1, 2, 3, 4, 5])); // 1,3,6,10,15
//  alert(getSums([-2, -1, 0, 1])); // -2,-3,-3,-2


  /**
   * Check is argument exist
   * @param {(number|string)} param
   */
  function checkArg(param) {
    alert(arguments.length ? 1 : 0);
  }

//  checkArg(); // 0
//  checkArg(801); // 1
//  checkArg(undefined); // 1

  /*
   * Get sum of all arguments
   * @returns {number}
   */
  function sum() {
    /* @type number */
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  }

  alert(sum()); // 0
  alert(sum(1, 2)); // 3
  alert(sum(1, 2, 5, 1.2)); // 9.2
});