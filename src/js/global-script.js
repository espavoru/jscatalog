$(document).ready(function () {
  var message,
      login = prompt('Your name?', '');

  message = (login == 'John') ? 'Hello John' :
          (login == 'CEO') ? 'Whats up!' :
          (login == '') ? 'No login' :
          'I dont know you bro';

  console.log(message);
  alert(message);
});
