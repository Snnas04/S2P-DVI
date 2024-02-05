const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'spdvi.mysql.database.azure.com',
  user: 'spdvi',
  password: 'nG58pqT&',
  database: 'classicmodels',
  port: 3306
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');

  const sql = `
    SELECT p.productName, SUM(od.quantityOrdered) 
    FROM products p
    JOIN orderdetails od ON p.productCode = od.productCode
    GROUP BY p.productName
    ORDER BY SUM(od.quantityOrdered) DESC
    LIMIT 10;
  `;

  connection.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    connection.end();
  });
});

getQueryData().then(data => {
  new Grid({
    columns: ['Product Name', 'Quantity Ordered'],
    data: data.map(item => [item.productName, item.quantityOrdered])
  }).render(document.getElementById('myTable'));
}).catch(err => console.error(err));
