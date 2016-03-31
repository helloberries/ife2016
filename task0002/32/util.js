// formSettings: 存放文本框表单配置的数组
var formSettings = [
	{'text': 'username',
		'attr': {
			label: '姓名',                    // 表单标签
	        type: 'text',                   // 表单类型
	        validator: function (input) {    // 验证规则
	        	var inputLength = input.value.length;
	        	if (inputLength >= 4 && inputLength <= 16) {
	        		return 'success';
	        	} else if (inputLength < 4 && inputLength > 16) {
	        		return 'incompatible';
	        	} else {
	        		return 'fail';
	        	}
	        },
	        rules: '必填，长度为4-16个字符',    // 填写规则提示
	        success: '格式正确',              // 验证通过提示
	        incompatible: '长度为4-16个字符', // 格式不符失败提示
	        fail: '名称不能为空'               // 输入值为空失败提示
		} },

	{'text': 'pw',
		'attr': {
			label: '密码',                    // 表单标签
	        type: 'password',                   // 表单类型
	        // validator: function () {...},    // 表单验证规
	        rules: '6~12位数字英文字母组合',   // 填写规则提示
	        success: '密码格式正确',              // 验证通过提示
	        incompatible: '密码格式错误', // 格式不符失败提示
	        fail: '密码不能为空'          // 输入值为空失败提示
		} },

	{'text': 'repw',
		'attr': {
			label: '密码确认',                    // 表单标签
	        type: 'password',                   // 表单类型
	        // validator: function () {...},    // 表单验证规
	        rules: '',   // 填写规则提示
	        success: '密码输入一致',              // 验证通过提示
	        incompatible: '密码输入不一致', // 格式不符失败提示
	        fail: '密码输入不一致'          // 输入值为空失败提示
		} },

	{'text': 'email',
		'attr': {
			label: '邮箱',                    // 表单标签
	        type: 'email',                   // 表单类型
	        // validator: function () {...},    // 表单验证规
	        rules: '请输入电子邮箱',   // 填写规则提示
	        success: '邮箱格式正确',              // 验证通过提示
	        incompatible: '邮箱格式错误', // 格式不符失败提示
	        fail: '邮箱不能为空'          // 输入值为空失败提示
		} },

	{'text': 'tel',
		'attr': {
			label: '手机',                    // 表单标签
	        type: 'tel',                   // 表单类型
	        // validator: function () {...},    // 表单验证规
	        rules: '请输入手机号码',   // 填写规则提示
	        success: '手机格式正确',              // 验证通过提示
	        incompatible: '手机格式错误', // 格式不符失败提示
	        fail: '手机不能为空'          // 输入值为空失败提示
		} }	
];
// radioSettings: 存放radio配置的数组
var radioSettings = [
    {'text': 'student',
        attr: {
            label: '在校生'
        } }
];
// makeConditionalInput: 生成文本框DOM树的函数
function makeConditionalInput (type, id, clsname) {
	var form = document.getElementsByTagName('form')[0],
		label = document.createElement('label'),
		span = document.createElement('span'),
		input = document.createElement('input'),
        rules = document.createElement('p');

    for (var i=0; i<formSettings.length; i++) {
        if (formSettings[i].text === id) {
            var spanText = document.createTextNode(formSettings[i].attr.label);
            span.appendChild(spanText);
            var rulesText = document.createTextNode(formSettings[i].attr.rules);
            rules.appendChild(rulesText);
        }
    }

	label.className = 'inputLab';
	label.appendChild(span);
	label.appendChild(input);
    label.appendChild(rules);

	span.appendChild(spanText);

	input.setAttribute('type', type);
	input.setAttribute('id', id);
	input.className = clsname;

    rules.className = 'rules';

	form.insertBefore(label, form.childNodes[1]);
}

makeConditionalInput('text', 'tel', 'input');
makeConditionalInput('email', 'email', 'input')
makeConditionalInput('password', 'repw', 'input');
makeConditionalInput('password','pw', 'input');
makeConditionalInput('text','username', 'input');

//makeRadio: 生成radio DOM的函数
function makeRadio () {

}

// inputChecks: 存放检查输入格式是否正确的函数的对象
var inputChecks = {
	nameCheck: function (input, rules) {
		var inputLength = input.value.length;
		if (inputLength >=4 && inputLength <= 16) {

		}
	},
	pwCheck: function () {

	},
	repwCheck: function () {

	},
	emailCheck: function () {

	},
	telCheck: function () {

	}
};