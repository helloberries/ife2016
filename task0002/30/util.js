var util = {
    nameCheck: function (input, tips) {
    	var inputLength = input.value.length;
    	if (inputLength === 0) {
    		this.errorInput(input, tips, '名称不能为空');
    	}else if (inputLength >= 4 && inputLength <= 16) {
    		this.correctInput(input, tips, '名称格式正确');
    	}else {
    		this.errorInput(input, tips, '长度为4~16字符');
    	}
    },
    pwCheck: function (input, tips) {
    	var inputLength = input.value.length,
    		repwInput = document.getElementById('repw'),
    		repwTips = repwInput.nextElementSibling;
    	if (inputLength < 6 || inputLength > 12) {
    		this.errorInput(input, tips, '密码格式错误');
    	}else if (inputLength >= 6 && inputLength <= 12) {
    		this.correctInput(input, tips, '密码格式正确');
    	}
    	this.repwCheck(repwInput, repwTips);
    },
    repwCheck: function (input, tips) {
    	var	pwValue = document.getElementById('pw').value;
    	if (input.value !== pwValue) {
    		this.errorInput(input, tips, '密码输入不一致');
    	} else if (input.value === pwValue && input.value !== '') {
    		this.correctInput(input, tips, '密码输入一致');
    	}
    },
    emailCheck: function (input, tips) {
    	var reg = /^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$/i;
    	if (reg.test(input.value)) {
    		this.correctInput(input, tips, '邮箱格式正确');
    	} else {
    		this.errorInput(input, tips, '邮箱格式错误');
    	}
    },
    telCheck: function (input, tips) {
    	var reg = /^\d{11}$/;
    	if (reg.test(input.value)) {
    		this.correctInput(input, tips, '手机格式正确');
    	} else {
    		this.errorInput(input, tips, '手机格式错误');
    	}
    },
    
    errorInput: function (input, tips, message) {
    	input.className = 'input error-input';
    	tips.className = 'tips error-tips';
    	tips.textContent = message;
    },
	correctInput: function (input, tips, message) {
		input.className = 'input correct-input';
		tips.className = 'tips correct-tips';
		tips.textContent = message;
	}
};