const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'spdvi.mysql.database.azure.com',
  user: 'spdvi',
  password: 'nG58pqT&',
  database: 'classicmodels',
  port: 3306,
  ssl: true
});

let sqlTop10 = 'SELECT p.productName, SUM(od.quantityOrdered) as quantityOrdered FROM products p JOIN orderdetails od ON p.productCode = od.productCode GROUP BY p.productName ORDER BY SUM(od.quantityOrdered) DESC LIMIT 10;';

let sqlAllProducts = 'SELECT p.productName, SUM(od.quantityOrdered) as quantityOrdered FROM products p JOIN orderdetails od ON p.productCode = od.productCode GROUP BY p.productName ORDER BY SUM(od.quantityOrdered) DESC;';

// función que devuelve los datos de la consulta
const getTop10QueryData = () => {
    return new Promise((resolve, reject) => {
      connection.query(sqlTop10, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      })
    });
  }

const getNumberOfUnitsSoldQueryData = () => {
  return new Promise((resolve, reject) => {
    connection.query(sqlAllProducts, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = { getTop10QueryData, getNumberOfUnitsSoldQueryData };
