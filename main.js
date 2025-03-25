// 主进程入口文件 (main.js)
// 用于创建透明窗口

// 引入 Electron 模块
const { app, BrowserWindow, screen } = require('electron');

// 创建主窗口的函数
function createWindow() {
    // 获取主显示器的工作区尺寸（不包括任务栏、Dock 等区域）
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    // 设置窗口的宽度和高度
    const windowWidth = 400; // 假设窗口宽度为 400
    const windowHeight = 400; // 假设窗口高度为 400

    // 创建窗口
    const mainWindow = new BrowserWindow({
      width: windowWidth, // 设置窗口宽度
      height: windowHeight, // 设置窗口高度
      frame: false, // 隐藏窗口边框，适合桌宠
      transparent: true, // 使窗口背景透明
      alwaysOnTop: true, // 窗口始终置顶
      webPreferences: {
        nodeIntegration: true, // 允许使用 Node.js 模块
      },
    });

    // 设置窗口的位置 (右下角)
    mainWindow.setBounds({
      x: width - windowWidth, // X 坐标为屏幕宽度减去窗口宽度
      y: height - windowHeight, // Y 坐标为屏幕高度减去窗口高度
      width: windowWidth, // 窗口宽度
      height: windowHeight, // 窗口高度
    });

    // 加载前端页面 (index.html)
    mainWindow.loadFile('index.html');

    // 打开开发者工具 (调试用，可注释)
    // mainWindow.webContents.openDevTools();
}

// 当 Electron 初始化完成时调用
app.whenReady().then(createWindow);

// 所有窗口关闭时退出应用 (仅 macOS 除外)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// 在 macOS 中激活应用 (如点击 Dock 图标重新打开窗口)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
