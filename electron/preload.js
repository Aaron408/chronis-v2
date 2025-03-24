const { contextBridge, ipcRenderer } = require('electron');

// Exponer APIs seguras a la aplicación de React
contextBridge.exposeInMainWorld('electron', {
  sendMessage: (channel, data) => {
    // Lista blanca de canales permitidos
    let validChannels = ['toMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receiveMessage: (channel, func) => {
    let validChannels = ['fromMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  }
});