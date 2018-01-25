$(function() {
  $(':header').addClass('headline');
//  $('li:lt(3)').hide().fadeIn(1500);
  $('li').on('click', function() {
//    $(this).remove();
  });

  function exampleText() {
    var elem = $('.todolist__item:eq(0)');
    elem.text('Sweets');
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
    $('li:eq(0)').prepend('<i class="fa fa-android"></i> ');
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
      return '<em>' + $(this).text() + '</em>';
    });
  }
//  ex05();
  function ex06() {
    $('li:contains("Cake")').text('Sugarbombs');
    $('li:eq(3)').remove();
  }
//  ex06();
  function alert07() {
    $('ul').before('<p class="alert alert--success">List updated!');
    var $newListItem = $('<li class="todolist__item"><em>Ice cream</em> sale</i>');
    $('li:last').after($newListItem);
    $('li').prepend('+ ');
  }
//  alert07();
  function css08() {
    $faHeart = $('<i class="fa fa-heart"></i>');
    $('li:eq(2)').removeClass('todolist__item--hot')
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
    var backgroundColor = $('li').css('background-color');
    $('ul').append('<p>Color was: ' + backgroundColor + '</p>');
    $('li').css({
      'background-color': '#c5a996',
      'border': '1px solid #fff',
      'color': 'black',
      'font-family': 'Georgia',
      'padding-left': '+=75'
    });
  }
//  ex09();
  function each10() {
    $('li').each(function() {
      var classes = this.getAttribute('class');
      $(this).append('<span class="todolist__item--order">'
          + classes + '</span>');
    });
  }
//  each10();
  function events11() {
    var classes = '';
    var $listItems = $('li');

    $listItems.on('mouseover click', function() {
      classes = this.getAttribute('class');
      $listItems.children('span').remove();
      $(this).append('<span class="todolist__item--priority">' +
          classes + '</span>');
    });

    $listItems.on('mouseout', function() {
      $(this).children('span').remove();
    });
  }
//  events11();
  function events12() {
    $('li').on('click', function(e) {
      $('li span').remove();
      var date = new Date();
      date.setTime(e.timeStamp);
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
        'click mouseover',
        'li:not(:last)',
        {status: 'important'},
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
    $('h2').hide().slideDown();
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
    $('li').on('click',
        function() {
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
  animateCSS15();
});
