$(document).ready(function() {
  /*
   * Object Orienting Programming
   */
  /**
   * Create users objects
   * @returns {global-scriptL#1.User}
   */
  function User() {
    /* @type string */
    var firstName, surname;

    this.setFirstName = function(newFirstName) {
      firstName = newFirstName;
    };

    this.setSurname = function(newSurname) {
      surname = newSurname;
    };

    this.getFullName = function() {
      return firstName + ' ' + surname;
    };
  }

  /* @type Object */
  var user = new User();
  /*
   user.setFirstName('Peter');
   user.setSurname('Gray');
   alert(user.getFullName());
   */

  /**
   * Create coffeemachine objects
   * @returns {global-scriptL#1.User}
   */
  function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    var timerId;

    function getTimeBoil() {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.waterAmount = function(amount) {
      // виклик без параметра, значить режим геттера, повертаємо
      // властивість
      if (!arguments.length) {
        return waterAmount;
      }

      // інакше режим сеттера
      if (amount < 0) {
        throw new Error("Значення має бути позитивним");
      }
      if (amount > capacity) {
        alert("Не можна залити води більше, ніж" + capacity);
        throw new Error("Не можна залити води більше, ніж" + capacity);
      }

      waterAmount = amount;
    };

    this.addWater = function(amount) {
      this.waterAmount(waterAmount + amount);
    };

    function onReady() {
      alert('Кава готова!');
    }

    this.setOnReady = function(newOnReady) {
      onReady = newOnReady;
    };

    this.run = function() {
      timerId = setTimeout(function() {
        timerId = null;
        onReady();
      }, getTimeBoil());
    };

    this.isRunning = function() {
      return !!timerId;
    };
  }

  var coffeMachine = new CoffeeMachine(100000, 500);

  coffeMachine.waterAmount(200);
  coffeMachine.addWater(200);
  alert('Рівень води ' + coffeMachine.waterAmount() + ' ml');;

  alert('Before: ' + coffeMachine.isRunning()); // Before: false

  coffeMachine.run();
  alert('In process: ' + coffeMachine.isRunning()); // In process: true

  coffeMachine.setOnReady(function() {
    var amount = coffeMachine.waterAmount();
    alert('Кава вже готова: ' + amount + 'ml');
    alert('After: ' + coffeMachine.isRunning()); // After: false
  });
});