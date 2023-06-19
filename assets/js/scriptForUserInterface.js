document.addEventListener("DOMContentLoaded", function() {
    const viewTable = document.getElementById('viewTable');

    // Загрузка данных из локального хранилища
    const savedData = localStorage.getItem('tableData');
    if (savedData) {
      viewTable.innerHTML = savedData;
    }
  });