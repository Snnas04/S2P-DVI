const { BrowserWindow, Menu, ipcMain } = require("electron");
const appMenu = require("./menu.js");

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    show: false,
    minWidth: 1024,
    minHeight: 500,
    webPreferences: {
      // THIS IS NOT A GOOD PRACTICE
      contextIsolation: false,
      nodeIntegration: true,
      //
    },
  });
  // Loads initial page-content into mainWindow, showing it when ready
  mainWindow.maximize();
  mainWindow.focus();
  mainWindow.loadFile("./indexMainWindow.html");
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  // Adding message listeners
  // Opens a second window
  ipcMain.on("open-child-window", (e) => {
    console.log(
      "MainProcess: received message from channel 'open-child-window'"
    );
    console.log("Opening child window");
    //console.log(e)
    createSecondaryWindow(mainWindow);
  });

  // We need to return the new object created
  return mainWindow;
};

const createSecondaryWindow = (parent) => {
  const secondaryWindow = new BrowserWindow({
    parent: parent,
    show: false,
    modal: true,
  });
  secondaryWindow.loadFile("./form.html");
  // Once method only will be fired once
  secondaryWindow.once("ready-to-show", () => {
    secondaryWindow.show();
  });

  return secondaryWindow;
};

// Sets main menu
const createMenu = (mainWindow) => {
  let menu = Menu.buildFromTemplate(appMenu(mainWindow.webContents));
  // Defines click function for homeMenuItem
  homeMenuItem = menu.getMenuItemById("go-home");
  homeMenuItem.click = () => {
    console.log("Clicked Home");
    mainWindow.loadFile("./indexMainWindow.html");
  };

  // Defines click function for listElementsMenuItem
  listElementsMenuItem = menu.getMenuItemById("list-elements");
  listElementsMenuItem.click = () => {
    console.log("Clicked List Elements");
    mainWindow.loadURL("https://www.google.es");
  };

  // Defines click function for dashboardMenuItem
  dashboardMenuItem = menu.getMenuItemById("dashboard");
  dashboardMenuItem.click = () => {
    console.log("Clicked Dashboard");
    mainWindow.loadURL("https://www.google.es");
  };
  Menu.setApplicationMenu(menu);
};

const requestExample = () => {
  const axios = require("axios");

  axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((response) => {
      console.log(response.data.url);
      console.log(response.data.explanation);
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports.createMainWindow = createMainWindow;
module.exports.createMenu = createMenu;
