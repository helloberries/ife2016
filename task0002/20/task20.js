// 1. 基础工具函数
var util = {
  $$: function (selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
  },
  addEvent: function (elem, type, func) {
    if (elem.addEventListener) {
      elem.addEventListener(type, func, false);
    } else if (elem.attachEvent) {
      elem.attachEvent('on'+type, func);
    } else {
      elem['on'+type] = func;
    }
  }
};

// 2. 获取DOM元素
var textarea = util.$$('.textarea')[0],
    addBtn = util.$$('.addBtn')[0],
    searchBtn = util.$$('.searchBtn')[0],
    tagBox = util.$$('.tagBox')[0],
    searchBox = util.$$('.searchBox')[0];

// 3. 绑定事件
// 文本框获得焦点、失焦时的边框变化
util.addEvent(textarea, 'focus', function () {
  textarea.style.border = '1px solid #E7504D';
});
util.addEvent(searchBox, 'focus', function () {
  searchBox.style.border = '1px solid #E7504D';
});
util.addEvent(textarea, 'blur', function () {
  textarea.style.border = 'none';
});
util.addEvent(searchBox, 'blur', function () {
  searchBox.style.border = 'none';
});
// 添加tag
util.addEvent(addBtn, 'click', function () {
  var seperator = ' ' || ',';
  var tags = textarea.value.split(seperator);
  for (var i=0,len=tags.length; i<len; i++) {
    var tagSpan = document.createElement('span');
    tagSpan.textContent = tags[i];
    tagSpan.className = 'tag';
    tagBox.appendChild(tagSpan);
  }
});
// 查询tag
util.addEvent(searchBtn, 'click', function () {
  var searchValue = searchBox.value,
      tagSpans = Array.prototype.slice.call(util.$$('.tag')),
      tags = tagSpans.map(function (item) {
        return item.textContent;
      });
  if (!searchValue) {
    alert('请输入查询值');
  } else {
    var reg = new RegExp(searchValue);
    tagSpans.forEach(function (item) {
      item.style.backgroundColor = '#E7504D';
      if (reg.test(item.textContent)) {
        item.style.backgroundColor = '#bb81f4';
      }
    });
  }
});
