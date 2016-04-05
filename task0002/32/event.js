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
			inputId = input.id;

		switch (formList[inputId].validator(input)) {
			case 'success':
				input.className = 'input correct-input';
				rules.textContent = formList[inputId].success;
				rules.className = 'rules correct-rules';
				return 'success';
			case 'fail':
				input.className = 'input error-input';
				rules.textContent = formList[inputId].fail;
				rules.className = 'rules error-rules';
				return 'fail';
			case 'empty':
				input.className = 'input error-input';
				rules.textContent = formList[inputId].empty;
				rules.className = 'rules error-rules';
				return 'empty';
			default:
				break;
		}
	},
	// 点击提交按钮弹出验证结果
	validCheck: function(e){
		e = e || window.event;
		var target = e.target || e.srcElement;

        var validResult = document.createElement('div'),
            validul = document.createElement('ul');

        validResult.className = 'valid';

        for (var i=0; i<inputs.length; i++){
            var validli = document.createElement('li'),
                validText = document.createTextNode(inputs[i].parentNode.firstChild.textContent + '：');

            var inputId = inputs[i].id;
            var result = eventOperation.blurCheck(inputs[i]);
            switch (result) {
                case 'success':
                    validText.textContent += '√;';
                    break;
                case 'fail':
                    validText.textContent += '×'
                    break;
                case 'empty':
                    validText.textContent += '请填入信息';
                    break;
                default:
                    break;
            }

            validli.appendChild(validText);
            validul.appendChild(validli);
        }

        validResult.appendChild(validul);
        form.appendChild(validResult);

		e.stopPropagation();
		e.preventDefault();

	}
};

var form = document.querySelectorAll('form')[0],
	inputs = document.querySelectorAll('.input'),
	submitBtn = $('submitBtn');

for (var i=0; i<inputs.length; i++) {
	addEvent(inputs[i], 'focus', eventOperation.inputFocus);
	addEvent(inputs[i], 'blur', eventOperation.inputBlur);
}

addEvent(submitBtn, 'click', eventOperation.validCheck);
