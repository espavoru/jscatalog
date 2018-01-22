$(document).ready(function() {
  var msg = '<p><b>Page title: </b>' + document.title + '</br>';
  msg += '<b>Page adress: </b>' + document.location + '</br>';
  msg += '<b>Date change: </b>' + document.lastModified + '</p>';

  var main = document.querySelector('main');
  main.innerHTML = msg;

  var date = new Date();
  var year = date.getFullYear();
  var msg = 'Copyright ' + year;
  var footer = document.createElement('div');
  footer.className = 'footer-js';
  footer.textContent = msg;
  main.appendChild(footer);
});