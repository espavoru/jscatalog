$(document).ready(function() {

  function Menu(options) {
    var elem;

    function getElem() {
      !elem ? render() : null ;
      return elem;
    }

    function render() {
      elem = document.createElement('div');
      elem.className = 'menu';

      var elemTitle = document.createElement('span');
      elemTitle.className = 'menu__title';
      elemTitle.textContent = options.title;

      elem.appendChild(elemTitle);

      elem.onmousedown = function() {
        return false;
      };

      elem.onclick = function(e) {
        var closestTitle = e.target.closest('.menu__title');

        closestTitle && elem.contains(closestTitle) ?
          toggle() : null ;
      };
    }

    function renderItems() {
      var list = document.createElement('ul');
      var items = options.items || [];

      items.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      });

      elem.appendChild(list);
    }

    function open() {
      !elem.querySelector('ul') ?
        renderItems() : null ;

      elem.classList.add('menu--open');
    }

    function close() {
      elem.classList.remove('menu--open');
    }

    function toggle() {
      !elem.classList.contains('menu--open') ?
        open() : close();
    }

    this.getElem = getElem;
    this.open = open;
    this.close = close;
    this.toggle = toggle;
  }

  var menu = new Menu({
    title: 'Tablets',
    items: ['Samsung', 'Apple', 'HP', 'Asus']
  });

  var elem = menu.getElem();

  document.querySelector('main').appendChild(elem);


});