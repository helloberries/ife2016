function Student(name, art, math, english) {
  this.name = name;
  this.art = art;
  this.math = math;
  this.english = english;
  this.total = art + math + english;
}

var table = document.getElementById('table'),
    title = document.getElementById('title');

var data = [];
data[0] = new Student('Tom', 75, 89, 73);
data[1] = new Student('Kitty', 60, 93, 84);
data[2] = new Student('Jerry', 96, 65, 85);
data[3] = new Student('Sara', 63, 85, 96);

// 事件绑定兼容
function addEvent(elem, type, func) {
  if (elem.addEventListener) {
    elem.addEventListener(type, func, false);
  } else if (elem.attachEvent) {
    elem.attachEvent('on'+type, func);
  } else {
    elem['on'+type] = func;
  }
}

// 渲染表格
function renderTable(data) {
  for(var i=0,len=data.length; i<len; i++) {
    var row = '<tr><td>' + data[i].name + '</td><td>' + data[i].art + '</td><td>' + data[i].math + '</td><td>' + data[i].english + '</td><td>' + data[i].total + '</td></tr>';
    table.innerHTML += row;
    console.log(data[i].art);
  }
}

// 清空表格
function deleteTable(table) {
  var len = table.rows.length;
  for (var i=1; i<len; i++) {
    table.deleteRow(1);
  }
}

// 按照某科成绩从小到大排列
function upSort(data, tip) {
  data.sort(function(a, b) {
    return a[tip]-b[tip];
  });
  return data;
}

// 按照某科成绩从大到小排列
function downSort(data, tip) {
  data.sort(function(a, b) {
    return b[tip]-a[tip];
  });
  return data;
}

// 事件委托
function delClick() {
  var flag = {
    'art': true,
    'math': true,
    'english': true,
    'total': true
  };
  addEvent(table, 'click', function(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.tagName.toLowerCase() === 'th') {
      if (flag[target.id] !== true) {
        upSort(data, target.id);
      } else {
        downSort(data, target.id);
      }
      deleteTable(table);
      renderTable(data);
      flag[target.id] = !flag[target.id];
    }
  });
}

renderTable(data);
delClick();
