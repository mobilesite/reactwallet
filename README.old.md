初始化项目：

```bash
npm install -g create-react-app 
create-react-app reactwallet
cd reactwallet
npm start
npm run eject
```

添加对less的支持：

```bash
npm i less less-loader -D
```

然后在./config/webpack.config.dev.js 和 ./config/webpack.config.prod.js中添加less文件的loader配置，可以从对css文件的loader配置中拷贝一下，稍加修改即可。

然后把原有的css文件改成less文件，并把文件中对于css的引用都更新成对于less的引用。




