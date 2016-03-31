var eventOperation = {
	// 改变获得焦点时的样式
	inputFocus: function (e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		eventOperation.focusCheck(target);
	},
	focusCheck: function (input) {
		var rules = input.nextElementSibling;
		rules.style.display = 'block';
		input.className = 'input focus-input';
	},
	// 改变失焦时的样式
	inputBlur: function (e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		eventOperation.blurCheck(target);
	},
	blurCheck: function (input) {
		var rules = input.nextElementSibling;
		// if (true /* 检验输入的函数 return true*/) {
		// 	target.className = 'input correct-input';
		// } else {
		// 	target.className = 'input error-input';
		// }
		for (var i=0; i<formSettings.length; i++) {
			switch (formSettings[i].text) {
				case 'name':
					formSettings[i].attr.validator;
					break;
				default:
					break;
			}
		}
	}
};