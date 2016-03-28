function check (e, input) {
	var inputBox = document.getElementById('input');
	var input = inputBox.value;
	var message = document.getElementById('message');
	console.log(typeof(input));
	if (input.length <= 4 || input.length >= 16) {
		message.textContent = '姓名不能为空';
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

// 绑定事件
var submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', check, false);