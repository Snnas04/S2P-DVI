window.electron.getTop15QueryData().then(data => {
  let ctx = document.getElementById('top15Content').getContext('2d');

  let labels = data.map(item => item.productName);
  let quantities = data.map(item => item.quantityOrdered);

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        label: 'Top 15 Best Sellers',
        data: quantities,
        borderWidth: 1
      }]
    },
    options: {
      legend: {
        position: 'left'  // Mueve las etiquetas a la derecha
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});

window.electron.getTop5MostValuableQueryData().then(data => {
  let ctx = document.getElementById('top5MostContent').getContext('2d');

  let labels = data.map(item => item.productName);
  let quantities = data.map(item => item.totalValue);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Top 5 Most Valuable Products',
        data: quantities,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});

window.electron.getTop5LessValuableQueryData().then(data => {
  let ctx = document.getElementById('top5LessContent').getContext('2d');

  let labels = data.map(item => item.productName);
  let quantities = data.map(item => item.totalValue);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Top 5 Less Valuable Products',
        data: quantities,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});

// Obtén el elemento segun el id
let selectElement = document.getElementById('selectYear');
let buttonElement = document.getElementById('getPDF');

// Agrega un controlador de eventos click al elemento button
buttonElement.addEventListener('click', function() {
  // Cuando el botón es presionado, exporta el contenido a un archivo PDF
  window.electron.exportToPdf();
});

// Agrega un controlador de eventos change al elemento select
selectElement.addEventListener('change', function() {
  // Cuando el valor cambia, obtén el nuevo valor
  let selectedYear = this.value;
  // Actualiza las consultas y las gráficas
  updateQueriesAndCharts(selectedYear);
});

// Agrega un controlador de eventos click al elemento button


function updateQueriesAndCharts(year) {
  // Actualiza tus consultas con el nuevo año
  window.electron.getTop15QueryDataYear(year).then(data => {
    updateChartDoughnut('top15Content', data);
  });

  window.electron.getTop5MostValuableQueryDataYear(year).then(data => {
    updateChartBar('top5MostContent', data);
  });

  window.electron.getTop5LessValuableQueryDataYear(year).then(data => {
    updateChartLine('top5LessContent', data);
  });
}

function updateChartDoughnut(id, data) {
  let chart = Chart.getChart(id);
  if (chart) {
    chart.destroy();
  }

  let ctx = document.getElementById(id).getContext('2d');

  let labels = data.map(item => item.productName);
  let quantities = data.map(item => item.quantityOrdered);

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        label: 'Top 15 Best Sellers',
        data: quantities,
        borderWidth: 1
      }]
    },
    options: {
      legend: {
        position: 'left'  // Mueve las etiquetas a la derecha
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function updateChartBar(id, data) {
  let chart = Chart.getChart(id);
  if (chart) {
    chart.destroy();
  }
  
  let ctx = document.getElementById(id).getContext('2d');

  let labels = data.map(item => item.productName);
  let quantities = data.map(item => item.totalValue);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Top 5 Most Valuable Products',
        data: quantities,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function updateChartLine(id, data) {
  let chart = Chart.getChart(id);
  if (chart) {
    chart.destroy();
  }

  let ctx = document.getElementById(id).getContext('2d');

  let labels = data.map(item => item.productName);
  let quantities = data.map(item => item.totalValue);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Top 5 Less Valuable Products',
        data: quantities,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
