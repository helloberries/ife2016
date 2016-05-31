window.onload = function () {
  var table = document.getElementById('table').childNodes.item(1),
      input = document.getElementById('input'),
      direction = ['top', 'right', 'bottom', 'left'];

  var blocknow = {
    block: getBlock(5,5),
    dir: 3,
    x: 5,
    y: 5
  };

  setDirection(blocknow.block, 'left');
  setDiv(blocknow.block);
};

function cleanDiv(block) {
  block.innerHTML = '';
}
function getBlock(x, y) {
  return table.childNodes.item(y*2).childNodes.item(x*2+1);
}
function setDirection(block, d) {
  block.className = d;
}
function calDirection(x) {
  var d = (blocknow.dir + x >= 0 ? blocknow.dir+x : 3)%4;
  blocknow.dir = d;
  setDirection(blocknow.block, direction[d]);
}
function setter(block) {
  setDiv(block);
  setDirection(block, direction[blocknow.dir]);
  setDirection(blocknow.block, '');
  cleanDiv(blocknow.block);
}
function go() {
  switch (blocknow.block.className) {
    case 'left':
      if (blocknow.x > 1) {
        blocknow.x--;
        var block = getBlock(blocknow.x, blocknow.y);
        setter(block);
      }
      break;
    case 'top':
      if (blocknow.y > 1) {
        blocknow.y--;
        var block = getBlock(blocknow.x, blocknow.y);
        setter(block);
      }
      break;
    case 'right':
      if (blocknow.x < 10) {
        blocknow.x++;
        var block = getBlock(blocknow.x, blocknow.y);
        setter(block);
      }
      break;
    case 'bottom':
      if (blocknow.y < 10) {
        blocknow.y++;
        var block = getBlock(blocknow.x, blocknow.y);
        setter(block);
      }
      break;
    default:
      break;
  }
}
function run() {
  switch (input.value.trim()) {
    case 'GO':
      go();
      break;
    case 'TUN LEF':
      calDirection(-1);
      break;
    case "TUN RIG":
      calDirection(1);
      break;
    case "TUN BAC":
      calDirection(2);
      break;
    default:
      break;

  }
}
