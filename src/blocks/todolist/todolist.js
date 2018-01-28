$(function() {
  function main() {
    $('li')
        .css({
//          'transition': 'all 1s',
          'padding-left': '+=10',
          'padding-right': '+=10'
        });
  }
//  main();
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
//      return '<em>' + $(this).text() + '</em>';
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
    $('li:eq(3)').remove();
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

    $('h2 a').on('click', function() {
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
    $newItemBtn.on('click', function() {
      $newItemBtn.hide();
      $newItemForm.show();
      $textInput.focus();
    });

    $('body').on('keydown', function(e) {
      if (e.keyCode == '27') {
        $newItemForm.hide();
        $newItemBtn.fadeIn('slow');
      }
    });

    $newItemForm.on('submit', function(e) {
      e.preventDefault();
      var newText = $textInput.val();
      $('li:last').after('<li class="todolist__item">' + newText
          + '</li>');
      $newItemForm.hide();
      $newItemBtn.show();
      $textInput.val('');
    });
  }
//  form18();
  function ex19() {
    var $cloneQuote = $('p.quote').clone();
    $('p').remove();
    $cloneQuote.insertAfter('h2.todolist__title');

    var $moveItem = $('li:first').detach();
    $moveItem.appendTo('ul');
  }

  function ex20() {
    var $listHeight = $('ul.todolist__items').height();
    $('ul.todolist__items').append('<p> List height is ' +
        $listHeight + 'px</p>');
    $('li').width('60%');
    $('li:eq(0)').width('200').next().width('75%');
  }

  function ex20() {
    var footer = $('<p class="footer">&copy; The King of taste</p>');
    var adv = $('<div class="adSlide">Sale! Just 2 days!</div>');
    $('.todolist').after(adv).after(footer);

    var $window = $(window);
    var $adSlide = $('.adSlide');
    var endZone = $('.footer').offset().top - $window.height() - 100;

    $window.on('scroll', function() {
      console.log(endZone);
      if ((endZone) < $window.scrollTop()) {
        $adSlide.animate({'right': '0'}, 250);
      } else {
        $adSlide.stop(true).animate({'right': '-300px'}, 250);
      }
    });
  }
//  ex20();

  function todolist21() {
    var $list, $newItemForm, $addButton;

    var item = '';
    $list = $('ul');
    $newItemForm = $('form.todolist__form');
    $addButton = $('button.todolist__btn');

    $('li').hide().each(function(index) {
      $(this).delay(450 * index).fadeIn(1600);
    });

    function updateCount() {
      var items = $('li:not(.todolist__item--complete)').length;
      $('.todolist__counter')
          .show()
          .css('display', 'inline-block')
          .text(items);
    }

    updateCount();
    $addButton.show();
    $newItemForm.hide();

    $addButton.on('click', function() {
      $(this).hide();
      $newItemForm.show();
    });

    $newItemForm.on('submit', function(e) {
      e.preventDefault();
      var text = $('input.todolist__newItemDescr').val();
      $list.append('<li class="todolist__item">' +
          text + '</li>');
      $('input.todolist__newItemDescr').val('');

      updateCount();

      $list.on('click', 'li', function() {
        var $this = $(this);
        var complete = $this.hasClass('todolist__item--complete');

        if (complete === true) {
          $this.animate({
            opacity: 0,
            paddingLeft: '+=180'
          }, 500, 'swing', function() {
            $this.remove();
          });
        } else {
          item = $this.text();
          $this.remove();

          $list
              .append('<li class="todolist__item todolist__item--complete">' +
              item + '</li>')
              .hide()
              .fadeIn(300);
          updateCount();
        }
      });
    });
  }
  todolist21();
});
