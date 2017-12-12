$(document).ready(function () {
// Recursion
  /**
   * Power function
   */
  function pow(x, n) {
    if (n != 1) {
      return x * pow(x, n - 1);
    } else {
      return x;
    }
  }
//  alert(pow(2,3));

  /**
   * SumTo function with recursion
   */
  function sumTo(n) {
    if (n > 1) {
      return n + sumTo(n - 1);
    } else {
      return n;
    }
  }
//  var userNumRec = +prompt('What is N number?', '');
//  alert(sumTo(userNumRec));

  /**
   * SumTo function with for loop
   */
  function sumToFL(n) {
    var result = n;

    for (var i = 1; i < n; i++) {
      result += i;
    }
    return result;
  }

//  var userNum = +prompt("What is your sum number?", '');
//  alert(sumToFL(userNum));

  /**
   * SumTo function by math formula
   */
  function sumToMath(n) {
    return n * (n + 1) / 2;
  }

//  var userNumMath = +prompt("What is N number?", "");
//  alert(sumToMath(userNumMath));

  /**
   * Factorial function with recursion
   */
  // If else variant
  function factorialRec(n) {
    if (n > 1) {
      return n * factorialRec(n - 1);
    } else {
      return n;
    }

  }
  // short solution
  function factorialRecShort(n) {
    return (n != 1) ? n * factorialRecShort(n - 1) : 1;
  }

//  var userNum = +prompt('What is your N?', '');
//  alert(factorialRec(userNum));
//  alert(factorialRecShort(userNum));

  /**
   * Fibonacci function
   */
  function fib(n) {
    var a = 1,
        b = 1;

    for (var i = 3; i <= n; i++) {
      var c = a + b;

      a = b;
      b = c;
    }

    return b;
  }

//  var userNum = +prompt('What is N?', '');
//  alert(fib(userNum));
});
