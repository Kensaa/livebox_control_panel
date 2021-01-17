const { app, BrowserWindow, ipcMain } = require('electron')
const url = require('url');

let loginData;

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({width: 1250, height: 800,webPreferences:{nodeIntegration: true}});
    mainWindow.loadURL('http://localhost:3000');
    //mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});

ipcMain.on('login', function (event, arg) {
    console.log('data sent :'+arg);
    loginData = arg;
    event.returnValue = 'done';
  });

ipcMain.on('getLoginData', function (event, arg) {
    event.returnValue = loginData;
    console.log('login data requested');
  });