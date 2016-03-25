window.onload = function () {
	// 获取4个按钮
	var leftinBtn = document.getElementById('leftin'),
		rightinBtn = document.getElementById('rightin'),
		leftoutBtn = document.getElementById('leftout'),
		rightoutBtn = document.getElementById('rightout');

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

	// 给ul绑定事件，点击其子元素则清除该子元素
	
};

/**
 * letin: 插入
 * @param  {[string]} direction ['left', 'right']
 */
function letin (direction) {
	// ul: 列表
	// currentFirstBlock: 当前第一个block
	// currentLastBlock: 当前最后一个block
	var ul = document.getElementsByTagName('ul')[0];
	var currentFirstBlock = ul.firstChild,
		currentLastBlock = ul.lastChild;

	// 获取输入值，创建新block
	var input = document.getElementById('input').value;
	var inputNum = document.createTextNode(input);
	var newBlock = document.createElement('li');
	newBlock.appendChild(inputNum);
	// 给新block添加样式
	newBlock.className = "num";

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
 * clearBlock: 清除点击的block
 * @param  {[variable]} block [点击的block]
 */
function clearBlock (block) {
	var ul = document.getElementsByTagName('ul')[0];
	ul.removeChild(block);
}