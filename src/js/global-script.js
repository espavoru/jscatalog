$(document).ready(function () {
  // Infinite loop + switch
  var a = 0;

// Виконуємо цикл нескінченно, поки
// а не стане undefined / ESC
  while (a || a == 0) {
// запитуємо кожен раз "а"
    a = prompt('What is a?', '');
// Перевіряємо що було введено
// Якщо введено не пусте значення
// а нажали ESC, то виконуємо
    if (!a && a != '') {
      alert('Canceled');
// якщо "а" має якесь значення
    } else {
// приводимо "а" до цифри
      a = +a;
    }
// Перевіряємо умови
    switch (a) {
// якщо 0, то виконуємо
      case 0:
        alert(0);
        break;

      case 1:
        alert(1);
        break;

      case 2:
      case 3:
        alert('2,3');
        break;
// коли нічого не підійшло
      default:
        alert("You'll luck next time");
        break;
    }

    alert('a is ' + a);
  }
});
