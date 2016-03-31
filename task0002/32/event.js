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
		for (var i=0; i<formSettings.length; i++) {
			if (input.id === formSettings[i].text) {
                switch (formSettings[i].attr.validator(input)) {
                    case 'success':
                        input.className = 'input correct-input';
                        rules.textContent = formSettings[i].attr.success;
                        rules.className = 'rules correct-rules';
                        break;
                    case 'incompatible':
                        input.className = 'input error-input';
                        rules.textContent = formSettings[i].attr.incompatible;
                        rules.className = 'rules error-rules';
                        break;
                    case 'fail':
                        input.className = 'input error-input';
                        rules.textContent = formSettings[i].attr.fail;
                        rules.className = 'rules error-rules';
                        break;
                    default:
                        break;
                }
            }
		}
	}
};