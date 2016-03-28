function check (e, input) {
	var inputBox = document.getElementById('input');
	var input = inputBox.value;
	var message = document.getElementById('message');

	if (input.length < 4 || input.length > 16) {
		message.textContent = '请输入长度为4~16个字符的名称，英文字母占1个字符，汉字占2个字符';
		message.style.color = 'red';
		inputBox.style.borderColor = 'red';
	} else {
		message.textContent = '名称格式正确';
		message.style.color = 'green';
		inputBox.style.borderColor = 'green';
	}
	e.preventDefault();
	e.stopPropagation();
}

function focusMsg (e) {
	var inputBox = document.getElementById('input');
	var input = inputBox.value;
	if (input.length === 0) {
		message.textContent = '必填，长度为4~16个字符';
		message.style.color = '#A9A9A9';
		inputBox.style.borderColor = '#eee';
	}
	 e.preventDefault();
	 e.stopPropagation();
}

// 绑定事件
var submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', check, false);

var inputBox = document.getElementById('input');
inputBox.addEventListener('focus', focusMsg, false);