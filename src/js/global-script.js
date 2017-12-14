$(document).ready(function () {
  /**
   * isEmpty
   */
  function isEmpty(obj) {
    for (var key in obj) {
      return false;
    }
    return true;
  }

  var schedule = {};
//  alert(isEmpty(schedule));

  var schedule = {
    '8:30': 'Get up'
  };
//  alert(isEmpty(schedule));

  /**
   * getSalaries
   * Вивід суми зарплат
   */
  function getSalaries() {
    var salaries = {
      'John': 100,
      'Bob': 300,
      'Kate': 250
    };
    var totalSum = 0;

    for (var name in salaries) {
      totalSum += salaries[name];
    }
    return totalSum;
  }

  // alert(getSalaries()); // 650, якщо обєкт пустий - вивід 0

  /**
   * getTopSalarie
   */
  function getTopSalarie() {
    var salaries = {
      'John': 100,
      'Bob': 300,
      'Kate': 250
    };
    var topSalarie = 0,
            topName;

    for (var name in salaries) {
      if (topSalarie < salaries[name]) {
        topSalarie = salaries[name];
        topName = name;
      }
    }
    return (salaries[name] != undefined) ?
            'The biggest salary has: ' + topName : 'Data is empty';
  }

//  alert(getTopSalarie());

  /**
   * multiplyNumeric
   */
  function multiplyNumeric() {
    var menu = {
      width: 200,
      height: 300,
      title: 'My menu'
    };

    // isNumeric function
    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    for (var prop in menu) {
      if (isNumeric(menu[prop])) {
        menu[prop] *= 2;
      }
      console.log(prop + ': ' + menu[prop]);
    }

    alert('menu width  = ' + menu['width'] + '\n' +
          'menu height = ' + menu['height'] + '\n' +
          'menu title  = ' + menu['title']);
  }

  multiplyNumeric();
});