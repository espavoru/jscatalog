$(document).ready(function() {
  var calculator = {

    read: function() {
      this.a = +prompt('Enter "a" value', '0');
      this.b = +prompt('Enter "b" value', '0');

      return this;
    },

    sum: function() {
      this.result = this.a + this.b;
      alert('The sum of numbers: \n' + this.result);

      return this;
    },

    mul: function() {
      this.result = this.a * this.b;
      alert('The multiplication of numbers: \n' + this.result);

      return this;
    }
  };

  calculator.read().sum().mul();
});