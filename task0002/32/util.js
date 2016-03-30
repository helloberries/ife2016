var formSettings = [
	{'text': 'name',
		'attr': {
			label: '姓名',                    // 表单标签
	        type: 'input',                   // 表单类型
	        // validator: function () {...},    // 表单验证规
	        rules: '必填，长度为4-16个字符',    // 填写规则提示
	        success: '格式正确',              // 验证通过提示
	        inconformity: '长度为4-16个字符', // 格式不符失败提示
	        fail: '名称不能为空'               // 输入值为空失败提示
		} },

	{'text': 'pw',
		'attr': {
			label: '密码',                    // 表单标签
	        type: 'input',                   // 表单类型
	        // validator: function () {...},    // 表单验证规
	        rules: '6~12位数字英文字母组合',   // 填写规则提示
	        success: '密码格式正确',              // 验证通过提示
	        inconformity: '密码格式错误', // 格式不符失败提示
	        fail: '密码不能为空'          // 输入值为空失败提示
		} },

	{'text': 'repw',
		'attr': {
			label: '密码确认',                    // 表单标签
	        type: 'input',                   // 表单类型
	        // validator: function () {...},    // 表单验证规
	        rules: '',   // 填写规则提示
	        success: '密码输入一致',              // 验证通过提示
	        inconformity: '密码输入不一致', // 格式不符失败提示
	        fail: '密码输入不一致'          // 输入值为空失败提示
		} },

	{'text': 'email',
		'attr': {
			label: '邮箱',                    // 表单标签
	        type: 'input',                   // 表单类型
	        // validator: function () {...},    // 表单验证规
	        rules: '请输入电子邮箱',   // 填写规则提示
	        success: '邮箱格式正确',              // 验证通过提示
	        inconformity: '邮箱格式错误', // 格式不符失败提示
	        fail: '邮箱不能为空'          // 输入值为空失败提示
		} },

	{'text': 'tel',
		'attr': {
			label: '手机',                    // 表单标签
	        type: 'input',                   // 表单类型
	        // validator: function () {...},    // 表单验证规
	        rules: '请输入手机号码',   // 填写规则提示
	        success: '手机格式正确',              // 验证通过提示
	        inconformity: '手机格式错误', // 格式不符失败提示
	        fail: '手机不能为空'          // 输入值为空失败提示
		} }	
];

console.log(formSettings[0].attr);