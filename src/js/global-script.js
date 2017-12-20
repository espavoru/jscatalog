$(document).ready(function() {
  /*
   * Functions constructors new
   */
  /**
   * Calculators constructor
   * @returns {global-scriptL#1.Calculator}
   */
  function Calculator() {
    this.read = function() {
      this.numA = +prompt('What is A number?', 0);
      this.numB = +prompt('What is B number?', 0);
    };
    this.sum = function() {
      return this.numA + this.numB;
    };
    this.mul = function() {
      return this.numA * this.numB;
    };
  }

  /* @type Object */
  var myCalc = new Calculator();

  /*
   myCalc.read();
   alert('The sum result is ' + myCalc.sum());
   alert('The multiplying result is ' + myCalc.mul());
   */

  /**
   * Create objects what sum prompt values
   * @param {number} startingValue
   * @returns {global-scriptL#1.Accumulator}
   */
  function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
      this.value += +prompt('What is your number?', 0);
    };
  }

  var accumulator = new Accumulator(1);
  /*
   accumulator.read();
   accumulator.read();
   alert('Your sum is ' + accumulator.value);
   */

  function CalculatorStr() {
    var methods = {
      '+': function(a, b) {
        return a + b;
      },
      '-': function(a, b) {
        return a - b;
      }
    };

    this.calculate = function(str) {
      /* @type Array */
      var split = str.split(' '),
          /* @type number */
          a = +split[0],
          /* @type string */
          op = split[1],
          /* @type number */
          b = +split[2];

      if (!methods[op] || isNaN(a) || isNaN(b)) {
        return 'NaN';
      }

      return methods[op](a, b);
    };

    this.addMethod = function(name, func) {
      methods[name] = func;
    };
  }

  /* @type Object */
  var calc = new CalculatorStr();

  calc.addMethod('*', function(a, b) {
    return a * b;
  });
  calc.addMethod('/', function(a, b) {
    return a / b;
  });
  calc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
  });

  var result = 'Your result is ' + calc.calculate('3 / 7');

  alert(result);
});