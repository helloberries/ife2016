var eventOperation = {
	/** 文本框获得焦点时，获得文本提示 */
	inputFocus: function (e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		eventOperation.focusCheck(target);			
	},
	focusCheck: function (input) {
		var tips = input.nextElementSibling;
		input.className = 'input focus-input';
		tips.style.display = 'block';
	},

	/** 文本框失去焦点时，显示验证结果 */
	inputBlur: function (e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		eventOperation.blurCheck(target);
	},
	blurCheck: function (input) {
		var tips = input.nextElementSibling;
		switch (input.id) {
			case 'name':
				util.nameCheck(input, tips);
				break;
			case 'pw':
				util.pwCheck(input, tips);
				break;
			case 'repw':
				util.repwCheck(input, tips);
				break;
			case 'email':
				util.emailCheck(input, tips);
				break;
			case 'tel':
				util.telCheck(input, tips);
				break;
			default:
				break;
		}
	},

	/** 提交 */
	submit: function (e) {
		var inputs = document.querySelectorAll('input'),
			inputArr = [].slice.call(inputs, 0),
			isAllPass = inputArr.every(function (input) {
				return input.className === 'correctInput';
			});
		console.log(isAllPass);
		e.preventDefault();
		e.stopPropagation();
		isAllPass ? alert('提交成功') : alert('提交失败');
	}
};