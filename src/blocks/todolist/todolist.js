$(function() {
  function main() {
    $('li')
        .css({
//          'transition': 'all 1s',
          'padding-left': '+=10',
          'padding-right': '+=10'
        });
  }
  main();
  function ex00() {
    $(':header').addClass('headline');
    $('li:lt(3)').hide().fadeIn(1500);
    $('li').on('click', function() {
      $(this).remove();
    });
  }
//  ex00();
  function exampleText() {
    var elem = $('.todolist__item:eq(0)');
    elem.text('<b>Ice cream</b>');
    $('li:nth-child(2)').addClass('todolist__item--cool');
  }
//  exampleText();
  function exampleHtml() {
    var $listHTML = $('.todolist__items').html();
    $('.todolist__items').append($listHTML);
  }
//  exampleHtml();
  function exText02() {
    var $listText = $('.todolist__items').text();
    $('.todolist__items').append($listText);
  }
//  exText02();
  function ex03() {
    var $listItemHTML = $('li').html();
//    $('li:eq(0)').prepend('<i class="fa fa-android"></i> ');
    $('li').append(' <i>' + $listItemHTML + '</i> ');
  }
//  ex03();
  function ex04() {
    var $listItemText = $('li').text();
    $('li').append(' <i>' + $listItemText + '</i> ');
  }
//  ex04();
  function ex05() {
    $('li').html(function() {
      return '<a href="#">' + $(this).text() + ' ' + this.className + '</a>';
    });
  }
//  ex05();
  function ex06() {
    $('li:contains("Cake")').text('Sugarbombs');
    $('li:not(:lt(3))').remove();
  }
//  ex06();
  function alert07() {
    $('ul').before('<p class="alert alert--success">List updated!</p>');
    $('p.alert').hide().fadeIn(1000);
    var $newListItem = $('<li class="todolist__item"><em>Ice cream</em> sale</li>');
    $('li:last').after($newListItem);
    $('li').prepend('+ ');
  }
//  alert07();
  function css08() {
    $faHeart = $('<i class="fa fa-heart"></i>');
    $('li:eq(2)')
        .removeClass('todolist__item--hot')
        .addClass('todolist__item--cool')
        .append($faHeart)
        .css('color', '#333');
    $('.fa-heart').css({
      'float': 'right',
      'padding-left': '10px',
      'color': 'white',
      'border-left': '2px solid #ccc'
    });
    $('ul').attr('id', 'group');
//    $('ul').removeAttr('id', 'group');
  }
//  css08();
  function ex09() {
    var backgroundColor = $('li:last').css('background-color');
    $('ul').append('<p>Color was: ' + backgroundColor + '</p>');
    $('li').css({
      'padding-left': '+=75',
      'font-family': 'Georgia',
      'color': 'black',
      'border': '1px solid #fff',
      'background-color': backgroundColor
    });
  }
//  ex09();
  function each10() {
    $('li').each(function() {
      var classes = this.className;
      $(this).append('<span class="todolist__item--order">'
          + classes + '</span>');
    });
  }
//  each10();
  function events11() {
    var classes;
    var $listItems = $('li');

    $listItems.on('mouseover click', function(e) {
      classes = this.getAttribute('class');
//      $listItems.children('span').remove();
      $(this).append('<span class="todolist__item--priority">' +
          classes + '</span>');
    });

    $listItems.on('mouseout', function(e) {
      $(this).children('span').remove();
    });
  }
//  events11();
  function events12() {
    $('li').on('click', function(e) {
      $('li span').remove();
      var date = new Date();
//      date.setTime(e.timeStamp);
      var clicked = date.toDateString();
      $(this).append('<span class="date">' +
          clicked + ' ' + e.type + '</span>');
    });
  }
//  events12();
  function eventsDelegation13() {
    var listItem,
        itemStatus,
        eventType;

    $('ul').on(
        'click mouseover', // event
        'li:not(:last)', // filter
        {status: 'important'}, // data - details
        function(e) {
          listItem = 'Element: ' + e.target.textContent + '</br>';
          itemStatus = 'Status: ' + e.data.status + '</br>';
          eventType = 'Event: ' + e.type;
          $('.todolist').append($('<p class="notes"></p>'));
          $('.notes').html(listItem + itemStatus + eventType);
        }
    );
  }
//  eventsDelegation13();
  function animate14() {
    $('h2').hide().delay(300).slideDown();
    var $li = $('li');

    $li.hide().each(function(index) {
      $(this).delay(700 * index).fadeIn(700);
    });

    $li.on('click', function() {
      $(this).fadeOut(700);
    });
  }
//  animate14();
  function animateCSS15() {
    $('li').on('click', function() {
      $(this).animate({
        opacity: 0,
        paddingLeft: '+=80'
      },
          500,
          function() {
            $(this).remove();
          });
    });
  }
//  animateCSS15();
  function DomNav16() {
    var $h2 = $('h2');
    $('ul').hide();
    $h2.append('<a>Show</a>');
    $('h2 a').addClass('btn').css({
      'margin-left': '30px',
      'font-size': '0.7em'
    });

    $h2.on('click', function() {
      $h2.next()
          .fadeIn(500)
          .children('.todolist__item--hot')
          .addClass('todolist__item--complete');
      $h2.find('a').fadeOut();
    });
  }
//  DomNav16();
  function filter17() {
    var $listItems = $('li');
    $listItems.filter('.todolist__item--hot:last')
        .removeClass('todolist__item--hot');
    $('li:not(.todolist__item--hot)')
        .addClass('todolist__item--complete');

    $listItems.each(function() {
      var $this = $(this);
      if ($this.is('todolist__item--hot')) {
        $this.prepend('Sale!');
      }
    });

    $('li:contains("Roll")').append(' with honey');
  }
//  filter17();
  function form18() {
    var $newItemBtn,
        $newItemForm,
        $textInput;

    $newItemBtn = $('.todolist__btn');
    $newItemForm = $('.todolist__form');
    $textInput = $('input:text');

    $newItemBtn.show();
    $newItemForm.hide();

    $('.todolist__btn').on('click', function() {
      $newItemBtn.hide();
      $newItemForm.show();
    });

    $newItemForm.on('submit', function(e) {
      e.preventDefault();
      var newText = $('input:text').val();

      $('li:last').after('<li class="todolist__item">' + newText + '</li>');
      $newItemForm.hide();
      $newItemBtn.show();
      $textInput.val('');
    });
  }
  form18();
});
