var eventOperation = {
	// 改变获得焦点时的样式
	inputFocus: function (e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		eventOperation.focusCheck(target);
	},
	focusCheck: function (input) {
		var rules = input.nextElementSibling,
			inputId = input.id;

		rules.style.display = 'block';
		input.className = input.classList[0] + ' focus-input';
	},
	// 改变失焦时的样式
	inputBlur: function (e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		eventOperation.blurCheck(target);
	},
	blurCheck: function (input) {
		var rules = input.nextElementSibling;
			inputId = input.id;

		switch (formList[inputId].validator(input)) {
			case 'success':
				input.className = input.classList[0] + ' correct-input';
				rules.textContent = formList[inputId].success;
				rules.className = 'rules correct-rules';
				return 'success';
			case 'fail':
				input.className = input.classList[0] + ' error-input';
				rules.textContent = formList[inputId].fail;
				rules.className = 'rules error-rules';
				return 'fail';
			case 'empty':
				input.className = input.classList[0] + ' error-input';
				rules.textContent = formList[inputId].empty;
				rules.className = 'rules error-rules';
				return 'empty';
			default:
				break;
		}
	},
	// 点击提交按钮弹出验证结果
	validCheck: function (e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		var validDiv = $('valid');
		for (var i=0; i<inputs.length; i++) {
			var validSpan = validDiv.childNodes[0].childNodes[i].childNodes[1];
			validSpan.textContent = '';
			var inputId = inputs[i].id;
			var result = eventOperation.blurCheck(inputs[i]);
			switch (result) {
				case 'success':
					validSpan.textContent += '√';
					break;
				case 'fail':
					validSpan.textContent += '×';
					break;
				case 'empty':
					validSpan.textContent += '请填入信息';
					break;
				default:
					break;
			}
		}

		e.stopPropagation();
		e.preventDefault();

	},
	// 切换皮肤
	changeSkin: function (e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		for (var i=0; i<inputs.length; i++) {
			if (target.id === 'skin2') {
				inputs[i].className = 'input-skin2';
				submitBtn.className = 'btn-skin2';
				var oFontSize = parseInt(getStyle(inputs[i].parentNode, 'fontSize'));
				inputs[i].parentNode.style.fontSize = oFontSize * .5 + 'px';
			} else if (target.id === 'skin1') {
				inputs[i].className = 'input';
				submitBtn.className = 'btn';
				inputs[i].parentNode.style.fontSize = '16px';
			}
		}
	}
};

var form = document.querySelectorAll('form')[0],
	inputs = document.querySelectorAll('.input'),
	submitBtn = $('submitBtn'),
	radios = document.querySelectorAll('input[type="radio"]');

for (var i=0; i<inputs.length; i++) {
	addEvent(inputs[i], 'focus', eventOperation.inputFocus);
	addEvent(inputs[i], 'blur', eventOperation.inputBlur);
}

addEvent(submitBtn, 'click', eventOperation.validCheck);

for (var j=0; j<radios.length; j++) {
	addEvent(radios[j], 'click', eventOperation.changeSkin);
}
