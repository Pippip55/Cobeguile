const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 300,
    height: 440,
    center: true,
    show: false,
    alwaysOnTop: true,
    resizable: false,
    autoHideMenuBar: true,
    title: 'Mini Calculator',
    backgroundColor: '#1e1e1e',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
  win.once('ready-to-show', () => {
    win.show();
    win.focus();
  });
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
