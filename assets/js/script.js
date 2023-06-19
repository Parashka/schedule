document.addEventListener("DOMContentLoaded", function() {
    createScheduleTables();
  });
  
  function createScheduleTables() {
    var daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
    var container = document.getElementById('scheduleTablesContainer');
  
    for (var i = 0; i < daysOfWeek.length; i++) {
      var table = document.createElement('table');
      table.id = 'scheduleTable_' + i;
      var tableContent = '<tr><th colspan="3">' + daysOfWeek[i] + '</th></tr><tr><th>Время</th><th>Предмет</th><th>Преподаватель</th></tr>';
  
      for (var j = 0; j < 5; j++) {
        tableContent += '<tr><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td></tr>';
      }
  
      table.innerHTML = tableContent;
      container.appendChild(table);
    }
}