$(document).ready(function() {
  /**
   * Metrics
   */

  function makeBtn() {
    var a = document.createElement('a');
    a.className = 'button';
    a.appendChild(document.createTextNode('Push me'));
    a.href = '/';

    var s = a.style;
    s.MozBorderRadius = s.WebkitBorderRadius = s.borderRadius = '8px';
    s.border = '2px groove green';
    s.display = 'block';
    s.height = '30px';
    s.lineHeight = '30px';
    s.width = '100px';
    s.textDecoration = 'none';
    s.textAlign = 'center';
    s.color = '#333';
    s.fontWeight = 'bold';

    var div = document.body.children[0];
    div.appendChild(a);
  }

  /**
   * Показывает уведомление, пропадающее через 1.5 сек
   *
   * @param options.top {number} вертикальный отступ, в px
   * @param options.right {number} правый отступ, в px
   * @param options.cssText {string} строка стиля
   * @param options.className {string} CSS-класс
   * @param options.html {string} HTML-текст для показа
   */
  function showNotification(options) {

    var notification = document.createElement('div');
    notification.className = "notification";
    if (options.cssText) {
      notification.style.cssText = options.cssText;
    }
    notification.style.top = (options.top || 0) + 'px'; // can use cssText
    notification.style.right = (options.right || 0) + 'px'; // can use cssText
    if (options.className) {
      notification.classList.add(options.className);
    }

    notification.innerHTML = options.html;
    document.body.appendChild(notification); // over cover

    setTimeout(function() {
      document.body.removeChild(notification);
    }, 1500);
  }

  // тест работоспособности
  var i = 0;
  setInterval(function() {
    showNotification({
      top: 10,
      right: 10,
      html: 'Привет ' + ++i,
      className: "welcome"
    });
  }, 2000);
});