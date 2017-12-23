$(document).ready(function() {
  /*
   * OOP functional inheritance
   */
  /**
   * Create general object machine
   * @param {number} power
   * @returns {global-scriptL#1.Machine}
   */
  function Machine(power) {
    this._enabled = false;

    this.enable = function() {
      this._enabled = true;
    };

    this.disable = function() {
      this._enabled = false;
    };
  }
  /**
   * Create coffeMachines objects
   * @param {number} power
   * @returns {global-scriptL#1.CoffeeMachine}
   */
  function CoffeeMachine(power) {
    Machine.apply(this, arguments);
    /* @type number */
    var waterAmount = 0;
    /* @type number */
    var timerID;

    this.setWaterAmount = function(amount) {
      waterAmount = amount;
    };

    function onReady() {
      alert('Кава готова!');
    }
    /* @type Function */
    var parentDisable = this.disable;
    this.disable = function() {
      parentDisable.call(this);
      clearTimeout(timerID);
    };

    this.run = function() {
      if (!this._enabled) {
        alert('Кавоварка вимкнена.');
        throw new Error("Кавоварка вимкнена.");
      }
      timerID = setTimeout(onReady, 1000);
    };
  }
  /* @type Object */
  var coffeeMachine = new CoffeeMachine(1000);
  coffeeMachine.enable();
  // coffeeMachine.run();
  // coffeeMachine.disable(); // зупинить роботу, нічого не виведе

  /**
   * Create fridge objects
   * @param {number} power
   * @returns {global-scriptL#1.Fridge}
   */
  function Fridge(power) {
    // успадкувати
    Machine.apply(this, arguments);
    /* @type [string] */
    var food = [];

    this.addFood = function() {
      if (!this._enabled) {
        alert('Холодильник вимкнений');
        throw new Error('Холодильник вимкнений');
      }
      if (food.length + arguments.length > this._power / 100) {
        alert('Не можна додати, не вистачає потужності');
        throw new Error("Не можна додати, не вистачає потужності");
      }
      for (var i = 0; i < arguments.length; i++) {
        food.push(arguments[i]); // додати усе з arguments
      }
    };

    this.getFood = function() {
      // копіюємо їжу в новий масив, щоб маніпуляції з ним
      // не міняли food
      return food.slice();
    };

    this.filterFood = function(filter) {
      return food.filter(filter);
    };

    this.removeFood = function(item) {
      /* @type string */
      var idx = food.indexOf(item);
      if (idx != -1) {
        food.splice(idx, 1);
      }
    };
    /* @type Function */
    var parentDisable = this.disable;
    this.disable = function() {
      if (food.length) {
        alert('Не можна виключити: всередині їжа');
        throw new Error("Не можна виключити: всередині їжа");
      }
      parentDisable();
    };
  }

  /* @type Object */
  var fridge = new Fridge(500);
  fridge.enable();

  fridge.addFood({
    title: 'котлета',
    calories: 100
  });
  fridge.addFood({
    title: 'салат',
    calories: 30
  });
  fridge.addFood({
    title: 'сік',
    calories: 20
  });
  /* @type [string] */
  var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
  });

  fridge.removeFood('немає такої їжі'); // Без ефекту
  alert(fridge.getFood().length); // 3

  dietItems.forEach(function(item) {
    alert(item.title); // садат, сік
    fridge.removeFood(item);
  });

  alert(fridge.getFood().length); // 1

  fridge.disable(); // помилка, в холодильнику є їжа
});