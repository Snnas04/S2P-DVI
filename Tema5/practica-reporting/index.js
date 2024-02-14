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

// Obtén el elemento select
let selectElement = document.getElementById('selectYear');

// Agrega un controlador de eventos change al elemento select
selectElement.addEventListener('change', function() {
  // Cuando el valor cambia, obtén el nuevo valor
  let selectedYear = this.value;
  // Actualiza las consultas y las gráficas
  updateQueriesAndCharts(selectedYear);
});

function updateQueriesAndCharts(year) {
  // Actualiza tus consultas con el nuevo año
  window.electron.getQueryDataByYear(year).then(data => {
    console.log(year, data);

    updateChart('top15Content', data);
    updateChart('top5MostContent', data);
    updateChart('top5LessContent', data);
  });
}

function updateChart(chartId, data) {
  // Obtén el gráfico existente
  let chart = Chart.getChart(chartId);

  // Actualiza los datos del gráfico
  chart.data.labels = data.map(item => item.label);
  chart.data.datasets[0].data = data.map(item => item.value);

  // Actualiza el gráfico
  chart.update();
}
