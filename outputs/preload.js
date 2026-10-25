const { contextBridge } = require('electron');
contextBridge.exposeInMainWorld('classroomApp', Object.freeze({ platform: process.platform }));
