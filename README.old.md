### 初始化项目：

```bash
npm install -g create-react-app 
create-react-app reactwallet
cd reactwallet
npm start
npm run eject
```

### 添加对less的支持：

```bash
npm i less less-loader -D
```

然后在./config/webpack.config.dev.js 和 ./config/webpack.config.prod.js中添加less文件的loader配置，可以从对css文件的loader配置中拷贝一下，稍加修改即可。

然后把原有的css文件改成less文件，并把文件中对于css的引用都更新成对于less的引用。

### 添加对antd-mobile的支持：

这里，需要改造对于babel-loader的配置，以适应对于antd-mobile的支持。

```bash
npm i antd-mobile --save
npm i babel-preset-env babel-preset-stage-2 babel-plugin-import -D
```

在根目录下新建.babelrc文件，内容为：

```
{
    "presets": [
        ["env", { "modules": false }], 
        "react",
        "stage-2"
    ],
    "plugins": [
        [
            "import",
            {
                "libraryName": "antd-mobile",
                "style": "css"
            }
        ]
    ]
}
```

在package.json中删除：

```
"babel": {
    "presets": [
        "react-app"
    ]
},
```

### 添加对typescript的支持

npm i classnames --save
npm i typescript ts-loader -D

在./config/webpack.config.dev.js中添加：

```
{
    test: /\.(tsx)$/,
    include: paths.appSrc,
    use: [
        {
            loader: require.resolve('babel-loader'),
            options: {
                // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true,
            },
        },
        {
            loader: require.resolve('ts-loader'),
        }
    ]
},
```

在./config/webpack.config.prod.js中添加：

```
{
    test: /\.(tsx)$/,
    include: paths.appSrc,
    use: [
        {
            loader: require.resolve('babel-loader'),
            options: {
                compact: true,
            }
        },
        {
            loader: require.resolve('ts-loader'),
        }
    ],
},
```

在根目录下添加tsconfig.json，内容如下：

```
{
    "compilerOptions": {
        "strictNullChecks": true,
        "moduleResolution": "node",
        "jsx": "preserve",
        "noUnusedParameters": true,
        "noUnusedLocals": true,
        "allowSyntheticDefaultImports": true,
        "target": "es6",
        "types": [
            "classnames", 
            "react", 
            "react-dom", 
            "react-native"
        ]
    },
    "exclude": [
        "node_modules", 
        "lib",
        "es"
    ],
    "compileOnSave": false
}
```

安装上面配置到的一些types：

```bash
npm i @types/classnames  @types/react @types/react-dom @types/react-native --save
```











