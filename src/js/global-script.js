$(document).ready(function () {
// Functions

  /**
   * Check age function with ? op
   */
  function checkAge(age) {
    return (age > 18) ? true :
            confirm('Does your parents allowed?');
  }

//  var age = prompt('What is your age?', '');
//  checkAge(age);

  /**
   * Check function with || op
   */
  function checkAgeOR(ageOr) {
    return (ageOr > 18) ||
            confirm('Does your parents allowed?');
  }

//  var ageOr = prompt('What is your age?', '');
//  checkAgeOR();

  /**
   * Min function
   */
  function min(a, b) {
    return (a < b) ? a : (a === b) ?
            'Equal numbers bro: ' + a : b;
  }

//  alert(min(1, 1));

  /**
   * Возводит x в степень n (комментарий JSDoc)
   *
   * @param {number} x число, которое возводится в степень
   * @param {number} n степень, должна быть целым числом больше 1
   *
   * @return {number} x в степени n
   */
  function pow(x, n) {
    var result = x;

    for (var i = 1; i < n; i++) {
      result *= x;
    }

    return result;
  }

  var x = prompt("x?", '');
  var n = prompt("n?", '');

  if (n <= 1) {
    alert('Степень ' + n +
            'не поддерживается, введите целую степень, большую 1'
            );
  } else {
    alert(pow(x, n));
  }
});
