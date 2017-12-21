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

  /**
   * Calculator object constructor
   * @returns {global-scriptL#1.CalculatorStr}
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
    /**
     * Do calculation
     * @param {string} str - 'Numb Operator Numb'
     * @returns {Function}
     */
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
    /**
     * Add new math operations
     * @param {string} name - math operation
     * @param {Function} func
     */
    this.addMethod = function(name, func) {
      methods[name] = func;
    };
  }

  /* @type Object */
  var calc = new CalculatorStr();
  /*
   calc.addMethod('*', function(a, b) {
   return a * b;
   });
   calc.addMethod('/', function(a, b) {
   return a / b;
   });
   calc.addMethod('**', function(a, b) {
   return Math.pow(a, b);
   });
   /* @type string */
//  var result = 'Your result is ' + calc.calculate('3 / 7');

//  alert(result);

  /**
   * Create object
   * @param {string} fullName
   * @returns {global-scriptL#1.User}
   */
  function User(fullName) {
    this.fullName = fullName;

    Object.defineProperties(this, {

      firstName: {

        get: function() {
          return this.fullName.split(' ')[0];
        },

        set: function(newFirstName) {
          this.fullName = newFirstName + ' ' + this.lastName;
        }

      },

      lastName: {

        get: function() {
          return this.fullName.split(' ')[1];
        },

        set: function(newLastName) {
          this.fullName = this.firstName + ' ' + newLastName;
        }

      }

    });
  }

/* @type Object */
  var johny = new User('John Smart');
  // read firstName/lastName
  alert(johny.firstName);
  alert(johny.lastName);

  // write in lastName
  johny.lastName = 'Gray';

  alert(johny.fullName);
});