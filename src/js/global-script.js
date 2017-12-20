$(document).ready(function () {
  /*
   * Functions constructors new
   */
  /**
   * Calculators constructor
   * @returns {global-scriptL#1.Calculator}
   */
  function Calculator() {
    this.read = function () {
      this.numA = +prompt('What is A number?', 0);
      this.numB = +prompt('What is B number?', 0);
    };
    this.sum = function () {
      return this.numA + this.numB;
    };
    this.mul = function () {
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

  function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
      this.value += +prompt('What is your number?', 0);
    };
  }

  var accumulator = new Accumulator(1);

  accumulator.read();
  accumulator.read();
  alert('Your sum is ' + accumulator.value);
});