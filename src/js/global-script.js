$(document).ready(function() {
  var calculator = {

    read: function() {
      this.a = +prompt('Enter "a" value', '0');
      this.b = +prompt('Enter "b" value', '0');
    },

    sum: function() {
      return this.a + this.b;
    },

    mul: function() {
      return this.a * this.b;
    }
  };

  calculator.read();
  alert('The sum of numbers: \n' + calculator.sum());
  alert('The multiplication of numbers: \n' + calculator.mul());
});