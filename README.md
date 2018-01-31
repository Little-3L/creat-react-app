# creat-react-app
## 安装必备工具Node.js
下载安装: 考虑到外网下载太慢, 可从http://npm.taobao.org/ 中的 https://npm.taobao.org/mirrors 下载

设定: 安装完毕后, 必须进行如下设定, 否则后续步骤会巨慢:

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
npm config set registry https://registry.npm.taobao.org  
```

## 准备React
安装create-react-app命令
```bash
cnpm install -g create-react-app
```
使用create-react-app命令可快速构建 React 开发环境, 此项目是基于Webpack+ES6的
```bash
create-react-app my-app
cd my-app/
npm start
```
## 创建目录
在src目录下创建子目录js, css, images, 以及相应目录下的components

## 修改入口文件
修改index.html中的div的id属性为id="fly"(id名自取), 以匹配应用的名称.

修改index.js：
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'; // 修改路径
import registerServiceWorker from './js/registerServiceWorker'; // 修改路径
import Logo from './js/components/Logo'; // 导入组件

ReactDOM.render(
  <div>
    <h1>
      <Logo />FlyComic
    </h1>
  </div>,
  document.getElementById('fly')
); // 修改id属性

// 为用户在本地创建一个service worker 来缓存资源到本地，提升应用的访问速度
registerServiceWorker(); 
```

## 开始创建组件

### 创建Logo组件
copy图片Logo.jpg到images目录下

创建Logo.css文件:
```jsx
.Logo {
  background: url('../../images/Logo.jpg');
  font-style:oblique;
  background-size: cover;
  display: inline-block;
  height: 70px;
  vertical-align: middle;
  width: 70px;
}
```
创建Logo.js文件：
```jsx
import React from 'react';
import '../../css/components/Logo.css'

class Logo extends React.Component {
  render() {
    return <div className="Logo" />;
  }
}

export default Logo
```
### Clock实时显示时间组件
### react-router
### Slider轮播组件
### Filter Table搜索筛选组件
### Comment点赞评论组件
### Table的简单应用
