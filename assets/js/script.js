createSchedule.getElementById("createSchedule");

function createScheduleTables() {
    var daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
    var container = document.getElementById('scheduleTablesContainer');
    
    for (var i = 0; i < daysOfWeek.length; i++) {
      var table = document.createElement('table');
      table.id = 'scheduleTable_' + i;
      table.innerHTML = '<tr><th colspan="3">' + daysOfWeek[i] + '</th></tr><tr><th>Время</th><th>Предмет</th><th>Преподаватель</th></tr><tr><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td></tr>';
      
      container.appendChild(table);
      createSchedule.disabled = true;
    }
  }