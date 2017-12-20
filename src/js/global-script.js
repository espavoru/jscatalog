$(document).ready(function () {
  /*
   * Closures | замикання
   */

  /**
   * Get sum elements
   * @param {number} a
   * @returns {Function}
   */
  function getSumFunc(a) {
    return function (b) {
      alert(a + b);
    };
  }

//  getSumFunc(2)(30);
//  getSumFunc(5)(11);

  /**
   * Make string buffer
   */
  function makeBuffer() {
    var text = '';

    function buffer(piece) {
      if (arguments.length == 0) { // вызов без аргументов
        return text;
      }
      text += piece;
    }
    ;

    buffer.clear = function () {
      text = "";
    };

    return buffer;
  }
  ;

  var buffer = makeBuffer();
  /*
   buffer('Hello');
   buffer('World!');
   alert(buffer());

   buffer.clear();
   alert(buffer());
   */

  var users = [{
      name: 'John',
      surname: 'Black',
      age: 20
    }, {
      name: 'Peter',
      surname: 'White',
      age: 25
    }, {
      name: 'Kate',
      surname: 'Smith',
      age: 18
    }
  ];

  /**
   * Make sort by field
   * @param {string} field
   * @returns {function}
   */
  function byField(field) {
    return function(a, b) {
      return a[field] < b[field] ? 1 : -1;
    };
  }
/*
  users.sort(byField('name'));
  users.forEach(function(user) {
    alert(user.name);
  });

  users.sort(byField('age'));
  users.forEach(function(user) {
    alert(user.name);
  });
  */


  function filter(arr, func) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      var val = arr[i];

      if (func(val)) {
        result.push(val);
      }
    }

    return result;
  }

  function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }

  function inArray(arr) {
    return function(x) {
      return arr.indexOf(x) != -1;
    };
  }

  var arr = [1, 2, 3, 4, 5, 6, 7, 8];
//  alert(filter(arr, function(a){
//    return a % 2 == 0;
//  }));

//  alert(filter(arr, inBetween(3, 6)));
  alert(filter(arr, inArray([1, 2, 10])));
});