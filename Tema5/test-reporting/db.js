const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'spdvi.mysql.database.azure.com',
  user: 'spdvi',
  password: 'nG58pqT&',
  database: 'classicmodels',
  port: 3306,
  ssl: true
});

// funcion que realiza la query para el top 10 de productos
const getTopProducts = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT p.productName, SUM(od.quantityOrdered) as quantityOrdered FROM products p JOIN orderdetails od ON p.productCode = od.productCode GROUP BY p.productName ORDER BY SUM(od.quantityOrdered) DESC LIMIT 10;', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// funcion que realiza la query para el numero de unidades vendidas de todos los productos
const getNumberOfUnitsSold = () => {
  return new Promise((resolve, reject) => {
    connection.query('select p.productName, sum(od.quantityOrdered) as quantityOrdered from products p join orderdetails od on p.productCode = od.productCode group by p.productName order by sum(od.quantityOrdered) desc;', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// función que devuelve los datos de la consulta
const getTop10QueryData = () => {
  return new Promise((resolve, reject) => {
    getTopProducts()
      .then(results => {
        resolve(results);
      })
      .catch(err => {
        reject(err);
      })
  });
}

const getNumberOfUnitsSoldQueryData = () => {
  return new Promise((resolve, reject) => {
    getNumberOfUnitsSold()
      .then(results => {
        resolve(results);
      })
      .catch(err => {
        reject(err);
      })
  });
}

module.exports = { getTop10QueryData, getNumberOfUnitsSoldQueryData };
