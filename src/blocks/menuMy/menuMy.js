$(document).ready(function() {
  var menu1 = new Menu({
    title: 'Brands',
    items: {
      samsung: 'Samsung',
      apple: 'Apple',
      hp: 'HP',
      asus: 'Asus'
    },
    onselect: showSelected
  });

  function showSelected(itemName) {
    alert(itemName);
  }

  var main = document.querySelector('main');
//  main.appendChild(menu1.getElem());

  /**
   * Create menu component
   * @param {Object} options
   * @returns {global-scriptL#1.Menu}
   */
  function Menu(options) {
    var elem;

    function getElem() {
      !elem ? render() : null;
      return elem;
    }

    function render() {
      elem = document.createElement('div');
      elem.className = 'menu';

      var title = document.createElement('span');
      title.className = 'menu__title';
      title.textContent = options.title;
      elem.appendChild(title);

      elem.onmousedown = function() {
        return false;
      };

      elem.onclick = function(e) {
        var target = e.target;
        target.closest('.menu__title') ? toggle() : null;

        if (target.closest('a')) {
          e.preventDefault();
          select(target.closest('a'));
        }
      };
    }

    function renderItems() {
      if (elem.querySelector('ul'))
        return;

      var list = document.createElement('ul');
      var items = options.items;
      for (var name in items) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + name;
        a.textContent = items[name];
        li.insertBefore(a, null);
        list.insertBefore(li, null);
      }
      elem.appendChild(list);
    }

    function select(link) {
      options.onselect(link.getAttribute('href').slice(1));
    }

    function open() {
      renderItems();
      elem.classList.add('menu--open');
    }

    function close() {
      elem.classList.remove('menu--open');
    }

    function toggle() {
      elem.classList.contains('menu--open') ?
          close() : open();
    }

    this.getElem = getElem;
    this.toggle = toggle;
    this.open = open;
    this.close = close;
  }
});