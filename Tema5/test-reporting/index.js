window.electron.getTop10Data()
  .then(data => {
    new gridjs.Grid({
      columns: ['Product Name', 'Quantity Ordered'],
      pagination: {
        limit: 5
      },
      data: data.map(item => [item.productName, item.quantityOrdered])
    }).render(document.getElementById('top10'));
  })
  .catch(err => console.error(err));

window.electron.getNumberOfUnitsSoldData()
  .then(data => {
    new gridjs.Grid({
      columns: ['Product Name', 'Quantity Ordered'],
      pagination: {
        limit: 5
      },
      data: data.map(item => [item.productName, item.quantityOrdered])
    }).render(document.getElementById('allProducts'));
  })
  .catch(err => console.error(err));
