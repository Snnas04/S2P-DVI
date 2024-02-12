window.electron.getTop15QueryData().then(data => {
  let ctx = document.getElementById('top15Content').getContext('2d');

  let labels = data.map(item => item.productName);
  let quantities = data.map(item => item.quantityOrdered);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Quantity Ordered',
        data: quantities,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
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

window.electron.getTop5MostValuableQueryData().then(data => {
  let ctx = document.getElementById('top5MostContent').getContext('2d');

  let labels = data.map(item => item.productName);
  let quantities = data.map(item => item.quantityOrdered);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Quantity Ordered',
        data: quantities,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
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
  let quantities = data.map(item => item.quantityOrdered);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Quantity Ordered',
        data: quantities,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
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
