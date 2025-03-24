const { app, BrowserWindow, Menu } = require('electron/main')
const path = require('node:path');

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    //frame: false,
    //titleBarStyle: 'hidden',
    icon: path.join(__dirname,'appLgo.jpg'),
    webPreferences: {
      nodeIntegration: false, 
      contextIsolation: true,  
      enableRemoteModule: false,  
      preload: path.join(__dirname, 'preload.js')  //secure communication
    },
  })
  win.loadFile(path.join(app.getAppPath(), 'dist/index.html'))
  Menu.setApplicationMenu(null);
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () =>{
    if (BrowserWindow.getAllWindows().length === 0)
        createWindow()
  })
})

//Close app when any window is present
app.on('window-all-closed', ()=> process.platform !== 'darwin' && app.quit())