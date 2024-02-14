const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'spdvi.mysql.database.azure.com',
  user: 'spdvi',
  password: 'nG58pqT&',
  database: 'classicmodels',
  port: 3306,
  ssl: true
})

let sqlTop15BestSellers = 'SELECT p.productName, SUM(od.quantityOrdered) as quantityOrdered FROM products p JOIN orderdetails od ON p.productCode = od.productCode JOIN orders o ON od.orderNumber = o.orderNumber WHERE YEAR(o.orderDate) = ? GROUP BY p.productName ORDER BY SUM(od.quantityOrdered) DESC LIMIT 15;'

let sqlTop5MostValuable = 'SELECT p.productName, SUM(od.quantityOrdered * od.priceEach) as totalValue FROM products p JOIN orderdetails od ON p.productCode = od.productCode JOIN orders o ON od.orderNumber = o.orderNumber WHERE YEAR(o.orderDate) = ? GROUP BY p.productName ORDER BY SUM(od.quantityOrdered * od.priceEach) DESC LIMIT 5;'

let sqlTop5LessValuable = 'SELECT p.productName, SUM(od.quantityOrdered * od.priceEach) as totalValue FROM products p JOIN orderdetails od ON p.productCode = od.productCode JOIN orders o ON od.orderNumber = o.orderNumber WHERE YEAR(o.orderDate) = ? GROUP BY p.productName ORDER BY SUM(od.quantityOrdered * od.priceEach) ASC LIMIT 5;'

// función que devuelve los datos de la consulta
const getTop15QueryData = () => {
    return new Promise((resolve, reject) => {
      connection.query(sqlTop15BestSellers, (err, results) => {
        if (err) {
          reject(err)
        } else {
          resolve(results)
        }
      })
    })
  }

const getTop5MostValuableQueryData = () => {
    return new Promise((resolve, reject) => {
      connection.query(sqlTop5MostValuable, (err, results) => {
        if (err) {
          reject(err)
        } else {
          resolve(results)
        }
      })
    })
  }

const getTop5LessValuableQueryData = () => {
    return new Promise((resolve, reject) => {
      connection.query(sqlTop5LessValuable, (err, results) => {
        if (err) {
          reject(err)
        } else {
          resolve(results)
        }
      })
    })
  }

async function getQueryDataByYear(year) {
  let data1 = await performQuery(sqlTop15BestSellers, year);
  let data2 = await performQuery(sqlTop5MostValuable, year);
  let data3 = await performQuery(sqlTop5LessValuable, year);

  return { data1, data2, data3 };
}

function performQuery(sql, year) {
  return new Promise((resolve, reject) => {
      connection.query(sql, [year], (error, results) => {
          if (error) {
              reject(error);
          } else {
              resolve(results);
          }
      });
  });
}

module.exports = { getTop15QueryData, getTop5MostValuableQueryData, getTop5LessValuableQueryData, getQueryDataByYear }
