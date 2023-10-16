const { app, BrowserWindow, Menu } = require('electron')
const {teplate} = require('./menu')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1290,
    height: 920
  })

  const menu = Menu.buildFromTemplate(teplate)

  win.loadFile('index.html')

  Menu.setApplicationMenu(menu)

  win.setMenu(menu)

  const wc = win.webContents;
  console.log(wc)
  wc.on('before-input-event', (e, k) => {
      console.log(k.key)
  })
}

app.whenReady().then(() => {
  createWindow()
})