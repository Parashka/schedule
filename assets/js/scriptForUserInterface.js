document.addEventListener("DOMContentLoaded", function() {
    var sourceTable = document.getElementById('scheduleTable_0'); 
    var outputTable = document.getElementById('outputTable'); 
  
    if (sourceTable && outputTable) {
      var sourceRows = sourceTable.getElementsByTagName('tr');
  
      for (var i = 1; i < sourceRows.length; i++) {
        var sourceCells = sourceRows[i].getElementsByTagName('td');
  
        var newRow = document.createElement('tr');
  
        for (var j = 0; j < sourceCells.length; j++) {
          var newCell = document.createElement('td');
          newCell.textContent = sourceCells[j].textContent;
          newRow.appendChild(newCell);
        }
  
        outputTable.appendChild(newRow);
      }
    }
  });