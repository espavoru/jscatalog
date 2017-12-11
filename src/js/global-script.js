$(document).ready(function () {
  // Infinite loop + if else
  var browser;

// запитуємо назву браузера нескінченно
  do { // робимо запит хоча б один раз
    browser = prompt('What is your browser', ''); // результат завжди string

    if (browser === 'IE') { // Це IE?
      alert('Oh, so you use IE!'); // Якщо так - вивід повідомлення
    } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
// Якщо це один з перелічених вище
      alert('Yes, we are support these browsers');
// Вивід повідомлення
    } else if (browser) {
// Якщо введено хоча б щось, але не підійшло з вищого
      alert('We dont know such browser, try again');
// Вивід повідомлення
    }
// Виконуємо поки введено хоч щось.
  } while (browser)
// Якщо нічого не введено, або ESC - вихід з циклу
// та вивід повідомлення
  alert('We hope, you ok');
});
