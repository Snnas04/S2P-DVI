getQueryData().then(data => {
  new Grid({
    columns: ['Product Name', 'Quantity Ordered'],
    data: data.map(item => [item.productName, item.quantityOrdered])
  }).render(document.getElementById('myTable'));
}).catch(err => console.error(err));