import { contextBridge, ipcRenderer } from 'electron'
import fs from 'fs'

var filePath = null

contextBridge.exposeInMainWorld('electron', {
  ping: () => {
    ipcRenderer.invoke('ping')
  }
})

contextBridge.exposeInMainWorld('api', {
  printTestNum: () => {
    ipcRenderer.send('printTestNum')
  },
  selectFolder: async () => {
    //ipcRenderer.send('selectFolder');
    filePath = await ipcRenderer.invoke('selectFolder')
    console.log('Path:' + filePath)
    
    let files = fs.readdirSync(filePath)
    console.log('files:', files)

    return {filePath, files}
  }
})