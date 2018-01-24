$(document).ready(function() {
  var menu,
      main,
      elem;

  menu = new Menu({
    title: 'Brands',
    items: {
      asus: 'Asus',
      sony: 'Sony',
      hp: 'HP',
      acer: 'Acer'
    },
    onselect: showName
  });

  function showName(itemName) {
    alert(itemName);
  }

  elem = menu.getElem();
  main = document.querySelector('main');
  main.appendChild(elem);

  /**
   *
   * @param {type} options
   * @returns {hotelL#1.Menu}
   */
  function Menu(options) {
    var elem;

    function getElem() {
      !elem ? render() : null;
      return elem;
    }

    function render() {
      elem = document.createElement('div');
      elem.setAttribute('class', 'menu');

      var title = document.createElement('span');
      title.setAttribute('class', 'menu__title');
      title.textContent = options.title;
      elem.insertBefore(title, null);

      elem.addEventListener('mousedown', function(){
        return false;
      });

      elem.addEventListener('click', function(e) {
        var target = e.target;

        target.closest('.menu__title') ? toggle() : null;

        if (target.closest('a')) {
          e.preventDefault();
          select(target.closest('a'));
        }
      });
    }

    function select(link) {
      options.onselect(link.getAttribute('href').slice(1));
    }

    function renderItems() {
      if (elem.querySelector('.menu__items')) return ;

      var list, items, li, a;
      list = document.createElement('ul');
      list.setAttribute('class', 'menu__items');
      items = options.items || {};

      for (var key in items) {
        li = document.createElement('li');
        li.setAttribute('class', 'menu__item');
        a = document.createElement('a');
        a.setAttribute('class', 'menu__link');
        a.setAttribute('href', '#' + key);
        a.textContent = items[key];

        li.appendChild(a);
        list.appendChild(li);
      }
      elem.appendChild(list);
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
    this.open = open;
    this.close = close;
    this.toggle = toggle;
  }
});