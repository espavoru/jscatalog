$(document).ready(function () {
  // Перетворення данних

  var task1 = '' + 1 + 0, // 10
      task2 = '' - 1 + 0, // -1
      task3 = true + false, // 1
      task4 = 6 / '3', // 2
      task5 = '2' * '3', // 6
      task6 = 4 + 5 + 'px' // 6
  ;

  console.log('task1 ' + task1);
  console.log('task2 ' + task2);
  console.log('task3 ' + task3);
  console.log('task4 ' + task4);
  console.log('task5 ' + task5);
  console.log('task6 ' + task6);
});
