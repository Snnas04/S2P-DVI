// Importa los módulos necesarios de Electron y Node.js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Variable para almacenar la ventana modal
let modalWindow = null;

// Función para crear la ventana principal
function createWindow() {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      width: 800,
      height: 600,
    }
  });

  // Carga el archivo HTML principal en la ventana principal
  mainWindow.loadFile('index.html');

  // Escucha el evento 'open-modal' para abrir la ventana modal
  ipcMain.on('open-modal', () => {
    // Crea la ventana modal si aún no existe
    if (!modalWindow) {
      modalWindow = new BrowserWindow({
        parent: mainWindow,
        width: 800,
        height: 685,
        modal: true,
        show: false,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js'),
        }
      });

      // Carga el archivo HTML de la ventana modal
      modalWindow.loadFile('modal.html');

      // Escucha el evento 'form-data' para recibir datos del formulario en la ventana modal
      ipcMain.on('form-data', (event, formData) => {
        // Muestra los datos en la consola y cierra la ventana modal
        console.log(formData);
        modalWindow.close();
        modalWindow = null;
      });

      // Muestra la ventana modal cuando esté lista para ser visualizada
      modalWindow.once('ready-to-show', () => {
        modalWindow.show();
        console.log('Form opened');
      });
    }
  });
}

// Espera a que la aplicación esté lista para crear la ventana principal
app.whenReady().then(() => {
  createWindow();

  // Maneja el evento 'activate' para crear una ventana si no hay ninguna ventana abierta
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Maneja el evento 'window-all-closed' para salir de la aplicación en sistemas no macOS
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
