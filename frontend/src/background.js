"use strict";

const { app, BrowserWindow, globalShortcut, protocol } = require("electron");
const path = require("path");
const url = require("url");

function createWindow() {
  const win = new BrowserWindow({
    width: 1080,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Ajuste o caminho para o preload.js
      nodeIntegration: false, // Boa prática: mantenha false para maior segurança
      contextIsolation: true, // Isolamento do contexto
    },
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }
  
  win.maximize();
}

app.on("ready", () => {
  // Registra o protocolo app:// para os recursos estáticos
  protocol.registerFileProtocol("app", (request, callback) => {
    const url = request.url.replace("app://./", "");
    const filePath = path.join(__dirname, url);
    callback({ path: filePath });
  });

  createWindow();

  // Atalho para abrir DevTools com Ctrl+Shift+I ou Command+Shift+I (macOS)
  globalShortcut.register("CommandOrControl+Shift+I", () => {
    const win = BrowserWindow.getFocusedWindow();
    if (win) win.webContents.toggleDevTools();
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("will-quit", () => {
  globalShortcut.unregisterAll();
});