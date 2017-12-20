$(document).ready(function () {
  /*
   * Object methods
   *
   * this
   */
  ;/**
   * Calculator
   */
  function makeCalculator() {
    /* @type Object */
    var calculator = {
      read: function () {
        this.numA = +prompt('Enter first number', 0);
        this.numB = +prompt('Enter first number', 0);
      },
      'sum numbers': function () {
        return this.numA + this.numB;
      }
    };

    calculator.mul = function () {
      return this.numA * this.numB;
    };

    calculator.read();

    alert('calc.numA is ' + calculator['numA']);
    alert('calc.numB is ' + calculator.numB);

    alert('Sum numbers is ' + calculator['sum numbers']());
    alert('Multiple numbers is ' + calculator.mul());
  }

//  makeCalculator();

/*
 * Chaining
 */
  function makeChain() {
    /* @type Object */
    var ladder = {
      step: 0,
      up: function() {
        this.step++;
        return this;
      },
      down: function() {
        this.step--;
        return this;
      },
      showStep: function() {
        alert('Step is ' + this.step);
        return this;
      }
    };

    ladder.up().up().down().up().showStep(); // 2
  }

//  makeChain();
});