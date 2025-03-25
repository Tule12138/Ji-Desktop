# Ji-Desktop

《九日》中姬的小玩偶形态。
完全是一窍不通的文科生自己跟 gpt 抄来的。技术力稍强一些都能做出更好的。

## 操作说明

启动命令：
`
npm start
`

终止：Control+C

## 文件说明

本质是一个始终在最上层的透明 html 窗口，其中几张图片反复重播。

### main.js

定义基础窗口位置大小等。

### index.html

定义小玩偶的具体动态，如哪几帧分别定格多长时间，是否可拖拽等。

### Frames

Frame 前缀的 文件是这个简陋的小玩具用到的几帧。技术力更高可做进一步加工。

## 安装说明

==需要 homebrew==

运行以下命令安装 Node.js 与 npm
`
brew install node
`
创建项目文件夹（可手动）并在项目文件夹中初始化
`
npm init -y
npm install electron
`
创建必要文件
- main.js // Electron 主程序
- package.json //配置文件
- index.html //前端界面

*这里应该可以用 tree 命令完成*

### troubleshooting

*因为我自己误操作了一次所以出现的部分*

如果误操作删除 electron 相关文，导致在 package.json 中存在依赖的情况下，即包含如下内容时：
```json
{
"dependencies": {
    "electron": "^xx.x.x"
    }
}
```
在项目根目录执行：
`
npm install
`
查询版本号确认是否安装成功（有输出即成果）：
`
npx electron -- version