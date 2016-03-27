/*
 * note: getRandomBlocks里默认值设定还没搞定 ㄟ( ▔, ▔ )ㄏ 
 */
window.onload = function () {

	// 获取4个按钮
	var leftinBtn = document.getElementById('leftin'),
		rightinBtn = document.getElementById('rightin'),
		leftoutBtn = document.getElementById('leftout'),
		rightoutBtn = document.getElementById('rightout'),
		randomBtn = document.getElementById('random'),
		sortBtn = document.getElementById('sort'),
		testBtn = document.getElementById('test');

	// 给4个按钮绑定事件
	leftinBtn.addEventListener('click', function(){
		letin('left');
	}, false);
	rightinBtn.addEventListener('click', function(){
		letin('right');
	}, false);
	leftoutBtn.addEventListener('click', function(){
		letout('left');
	}, false);
	rightoutBtn.addEventListener('click', function(){
		letout('right');
	}, false);

	// 绑定单击清除事件
	var ul = document.getElementsByTagName('ul')[0];
	ul.addEventListener('click', function(e){
		ul.removeChild(e.target);
	}, false);

	// 生成随机数事件
	onetime(randomBtn, 'click', getRandomBlocks);

	// 排序事件
	onetime(sortBtn, 'click', getSortedBlocks);

	// 重复次数
	testBtn.addEventListener('click', arrCheck,false);
};

var queue = [];

/**
 * onetime: 创建一次性事件
 * @param  {[object]}   node     [事件对象]
 * @param  {[string]}   type     [事件种类]
 * @param  {Function} callback [函数]
 * @return {Function}            [函数]
 */
function onetime (node, type, callback) {
	// 创建事件
	node.addEventListener(type, function (e) {
		// 移除事件
		e.target.removeEventListener(e.type, arguments.callee);
		// 回调函数
		return callback(e);
	})
}



/**
 * letin: 插入
 * @param  {[string]} direction ['left', 'right']
 */
function letin (direction) {
	// ul: 列表
	// currentFirstBlock: 当前第一个block
	// currentLastBlock: 当前最后一个block
	var ul = document.getElementsByTagName('ul')[0];
	var currentFirstBlock = ul.firstChild;

	// 获取输入值，创建新block
	var input = document.getElementById('input').value;
	if (/^\d+$/.test(input) && (input >= 10 && input <= 100)){
		queue.push(input);
		var inputNum = document.createTextNode(input);
		if (queue.length > 60) {
			alert('最多放置60个元素！');
		}
	} else {
		alert("请输入10-100的数字");
	}
	var newBlock = document.createElement('li');
	newBlock.appendChild(inputNum);
	// 给新block添加样式
	newBlock.className = "num";
	// block高度由输入的数字决定
	newBlock.style.height = input + 'px';
	// 隐藏输入的数字
	newBlock.textContent = '';

	// 在左边或者右边插入
	if (direction === 'left') {
		ul.insertBefore(newBlock, currentFirstBlock);
	} else if (direction === 'right') {
		ul.appendChild(newBlock);
	}	
}

/**
 * letout: 删除
 * @param  {[string]} direction ['left', 'right']
 */
function letout (direction) {
	var ul = document.getElementsByTagName('ul')[0];
	var currentFirstBlock = ul.firstChild,
		currentLastBlock = ul.lastChild;

	if (direction === 'left') {
		ul.removeChild(currentFirstBlock);
		alert(currentFirstBlock.textContent);
	} else if (direction === 'right') {
		ul.removeChild(currentLastBlock);
		alert(currentLastBlock.textContent);
	}
}

/**
 * getRandomInt: 生成限定范围内的随机数
 * @param  {[number]} min [最小值]
 * @param  {[number]} max [最大值]
 * @param {[number]} length [个数]
 * @return {[array]}     [随机数数组]
 */
function getRandomInt (min, max, length) {
	for (var i=0; i<length; i++) {
		queue.push(Math.floor(Math.random() * (max - min) + min)); 
	}
	return queue;
}
/**
 * getRandomBlocks: 根据queue随机生成block
 * @param  {[string]} parent         [父元素标签名]
 */
function getRandomBlocks (parent) {
	// 预设默认值（因为removeEventListener无法清除匿名函数）
	parent = 'ul';
	// 生成随机数组成的queue
	getRandomInt(10, 100, 60);
	// 获取父元素，遍历queue，添加子元素
	oParent = document.getElementsByTagName(parent)[0];
	for (var i=0; i<queue.length; i++) {
		oChild = document.createElement('li');
		oParent.appendChild(oChild);
		oChild.className = "num";
		oChild.style.height = queue[i] + 'px';
	}
	console.log(queue);
}

function getSortedBlocks (arr) {
	arr = queue;
	arr.sort(sortArr);
	
	var blocks = document.querySelectorAll('.num');
	for (var i=0; i<blocks.length; i++) {
		var oBlockH = blocks[i].offsetHeight;
		blocks[i].className = 'num-sorted';
		blocks[i].style.left = 17 * (arr.indexOf(oBlockH)) + 'px';
		console.log(arr.indexOf(oBlockH));
	}

}

function arrCheck (arr) {
	arr = queue;
	var newArr = [],
		temp = '';
	for (var i=0; i<arr.length; i++) {
		var count = 0;
		temp = arr[i];
		for (var j=0; j<arr.length; j++) {
			if (arr[j] === temp) {
				count ++;
				arr[j] = -1;
			}
		}
		if (temp !== -1) {
			newArr.push(temp+':'+count);
		}
		if (count > 1) {

		}
	}
	// return newArr;
	console.log(newArr);
}

/**
 * sortArr: 数组升序排序
 */
function sortArr (pre, next) {
	if (pre < next) {
		return -1; // 小于
	} else if (pre > next) {
		return 1; // 大于
	} else {
		return 0; //等于
	}
}