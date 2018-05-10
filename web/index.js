require.config({
  paths: {
    jquery: '../lib/jquery-1.12.2'
    // show: './show'
  }
});

// 如果依赖的模块不在当前目录下，那么需要进行require的config配置路径的映射。
define(['jquery', './show.js'], function($, show) {
  'use strict';
  $(function() {
    $('#box').html('<h1>我们的第一个rj的应用</h1>');
    show.do();
  });
});
