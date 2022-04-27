# vue-learn 3.0.0
此版本重新修改目录结构，优化组件封装，进一步强化学习，vue的组件式开发的特点！
### 1.其中请求封装在 /src/requests 文件夹
···
http.js  //get、post请求封装
interface.js //公共地址封装
request.js   //每个请求的数据获取函数封装
···
### 2.将视图转移至views文件夹，并将封装组件转移至compents 文件夹
两个文件夹相互对应


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
