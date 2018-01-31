import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import Logo from './js/components/Logo'
import Clock from './js/components/Clock'
import Main from './js/components/Router/Main'
import registerServiceWorker from './js/registerServiceWorker'


//组件
ReactDOM.render(
  <div className='container'>

    <div className='header-logo' className='word'>
      <Logo />FlyComic
    </div>

    <div className='header-clock'>
      <Clock />
    </div>

    <div className='main'>
      <Main />
    </div>
  </div >,
  document.getElementById('fly')
);

// 为用户在本地创建一个service worker 来缓存资源到本地，提升应用的访问速度
registerServiceWorker();




