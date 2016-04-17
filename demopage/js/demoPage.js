// 获取DOM
function $$(selector, context) {
  context = context || document;
  var elements = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
}

// 在新窗口中打开链接
var links = $$('a[rel="external"]');
links.forEach(function (item) {
  item.setAttribute('target', '_blank');
});
