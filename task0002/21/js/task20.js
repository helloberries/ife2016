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

// 2. 事件
var events = {
  /**
   * addTag: 添加tag
   */
  addTag: function (e) {
    e = e || window.event;
    var key = e.keyCode || e.which;

    var tagValue = util.$$('addTag').value;
    if (key === 13) {
      console.log(tagValue);
    }

    // for (var i=0,len=tags.length; i<len; i++) {
    //   var tagSpan = document.createElement('span');
    //   tagSpan.textContent = tags[i];
    //   tagSpan.className = 'tag';
    //   hobbybox.appendChild(tagSpan);
    // }
  },
  /**
   * deleteTag: 点击删除tag
   */
  deleteTag: function (e) {
    e = e || window.event;
		var target = e.target || e.srcElement;

    target.parentNode.removeChild(target);
  }
};

// 3. 获取DOM元素
var textarea = util.$$('textarea')[0],
    addBtn = util.$$('.addBtn')[0],
    searchBtn = util.$$('.searchBtn')[0],
    hobbybox = util.$$('.hobbies .tagBox')[0],
    searchBox = util.$$('.searchBox')[0],
    inputs = util.$$('input'),
    tags = Array.prototype.slice.call(util.$$('.tag'));

var inputsArr = Array.prototype.slice.call(inputs);
inputsArr.push(textarea);

// 4. 绑定事件
// 文本框获得焦点、失焦时的边框变化
inputsArr.forEach(function(item){
  util.addEvent(item, 'focus', function () {
    item.style.border = '1px solid #E7504D';
  });
});
inputsArr.forEach(function(item){
  util.addEvent(item, 'blur', function () {
    item.style.border = 'none';
  });
});
// 提示+点击清除tag
// util.addEvent(hobbybox, 'mouseover', events.hoverTag);
util.addEvent(hobbybox, 'click', events.deleteTag);
// 添加tag
util.addEvent(inputs, 'keydown', events.addTags);
// util.addEvent(addBtn, 'click', function () {
//   var seperator = ' ' || ',';
//   var tags = textarea.value.split(seperator);
//   for (var i=0,len=tags.length; i<len; i++) {
//     var tagSpan = document.createElement('span');
//     tagSpan.textContent = tags[i];
//     tagSpan.className = 'tag';
//     hobbybox.appendChild(tagSpan);
//   }
// });
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
