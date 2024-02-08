const { app, BrowserWindow, ipcMain } = require('electron');
const { getTop10QueryData, getNumberOfUnitsSoldQueryData } = require('./db');
const db = require('./db');

const path = require('path');

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    ipcMain.handle('get-top10', async () => {
        try {
            const data = await getTop10QueryData();
            return data;
        } catch (err) {
            console.error(err);
        }
    });

    db.getTop10QueryData()
    .then(data => {
    createChart(data);
    })
    .catch(err => {
    console.error(err);
    });

    ipcMain.handle('get-number-of-units-sold', async () => {
        try {
            const data = await getNumberOfUnitsSoldQueryData();
            return data;
        } catch (err) {
            console.error(err);
        }
    });
});

function createChart(data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar', // Cambia esto al tipo de gráfico que quieras
      data: {
        labels: data.map(item => item.productName), // Asume que 'data' es un array de objetos con una propiedad 'productName'
        datasets: [{
          label: 'Top 10 Products',
          data: data.map(item => item.quantityOrdered), // Asume que 'data' es un array de objetos con una propiedad 'quantityOrdered'
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cambia esto al color que quieras
          borderColor: 'rgba(75, 192, 192, 1)', // Cambia esto al color que quieras
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
  