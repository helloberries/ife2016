var eventOperation = {
	// 改变获得焦点时的样式
	inputFocus: function (e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		eventOperation.focusCheck(target);
	},
	focusCheck: function (input) {
		var rules = input.nextElementSibling;
		// 遍历formSettings数组，如果获得焦点的input的id等于被遍历到的对象的'text'的值，
		// 则用该对象的'attr'里rules的值，创建文本节点
		for (var i=0; i<formSettings.length; i++) {
			if (input.id === formSettings[i].text) {
				var rulesText = document.createTextNode(formSettings[i].attr.rules);
				rules.appendChild(rulesText);
			}
		}
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