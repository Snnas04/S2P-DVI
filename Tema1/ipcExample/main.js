const { app, BrowserWindow, ipcMain } = require("electron");
const { createMainWindow, createMenu } = require("./myModules.js");

// Keeps a global reference of the window object, if you don't, the window could
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// APP section
// Main window creation
app.whenReady().then(() => {
  mainWindow = createMainWindow(mainWindow);
  createMenu(mainWindow);
});

// Open a window if none are open (macOS)
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
});

// Quit the app when all windows are closed (Windows)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on("activate", () => {
  if (mainWindow === null) createMainWindow();
});
