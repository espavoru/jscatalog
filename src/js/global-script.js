$(document).ready(function () {
  // Strings

  /**
   * ucFirst
   * Перший символ заголовним
   */
  function ucFirst() {
    var str = prompt("What is your phrase?", "jhony");
    if (!str)
      return str;

    return str.charAt(0).toUpperCase() + str.slice(1);
  }

//  alert(ucFirst());

  /**
   * checkSpam
   */
  function checkSpam(str) {
    var strLower = str.toLowerCase();

    return !!(~strLower.indexOf('viagra') ||
            ~strLower.indexOf('xxx'));
  }

  /*
   alert(checkSpam('vIaGras'));
   alert(checkSpam('xXxXx'));
   alert(checkSpam('vi*a*gra'));
   */

  /**
   * truncate
   * Cutting long string
   */
  function truncate(str, maxlength) {
    if (str.length > maxlength) {
      return str.slice(0, maxlength - 3) + '...';
    }
    return str;
  }

  function truncateShort(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 3) +
            '...' :
            str;
  }

//  alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
//  alert(truncate("Всем привет!", 20));

//  alert(truncateShort("Вот, друже, что мне хотелось бы сказать на эту тему:", 20));
//  alert(truncateShort("Whats up!", 20));

  /**
   * extractCurrencyValue
   */
  function extractCurrencyValue(str) {
    return +str.slice(1);
  }

  alert(extractCurrencyValue('$120'));
  alert(extractCurrencyValue('$5000'));
  alert(extractCurrencyValue('$1.99'));
});

