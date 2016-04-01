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
	        validator: function (input) {          // 验证规则
                var inputLength = input.value.length;
                if (inputLength >= 6 && inputLength <= 12) {
                    return 'success';
                } else if (inputLength < 6 || inputLength > 12) {
                    return 'incompatible';
                } else {
                    return 'fail';
                }
            },
	        rules: '6~12位数字英文字母组合',   // 填写规则提示
	        success: '密码格式正确',              // 验证通过提示
	        incompatible: '密码格式错误', // 格式不符失败提示
	        fail: '密码不能为空'          // 输入值为空失败提示
		} },

	{'text': 'repw',
		'attr': {
			label: '密码确认',                    // 表单标签
	        type: 'password',                   // 表单类型
	        validator: function (input) {        // 验证规则
                var inputLength = input.value.length,
                    pwValue = document.querySelectorAll('input[type="password"]')[0].value;
                if (input.value === pwValue && input.value !== '') {
                    return 'success';
                } else if (input.value !== pwValue) {
                    return 'fail';
                }
            },
	        rules: '',   // 填写规则提示
	        success: '密码输入一致',              // 验证通过提示
	        incompatible: '', // 格式不符失败提示
	        fail: '密码输入不一致'          // 输入值为空失败提示
		} },

	{'text': 'email',
		'attr': {
			label: '邮箱',                    // 表单标签
	        type: 'email',                   // 表单类型
	        validator: function (input) {    // 验证规则
                var reg = /^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$/i;
                if (reg.test(input.value)) {
                    return 'success'
                } else if (!reg.test(input.value)) {
                    return 'incompatible';
                } else {
                    return 'fail';
                }
            },
	        rules: '请输入电子邮箱',   // 填写规则提示
	        success: '邮箱格式正确',              // 验证通过提示
	        incompatible: '邮箱格式错误', // 格式不符失败提示
	        fail: '邮箱不能为空'          // 输入值为空失败提示
		} },

	{'text': 'tel',
		'attr': {
			label: '手机',                    // 表单标签
	        type: 'text',                   // 表单类型
	        validator: function (input) {         // 验证规则
                var reg = /^\d{11}$/;
                if (reg.test(input.value)) {
                    return 'success';
                } else if (!reg.test(input.value)) {
                    return 'incompatible';
                } else {
                    return 'fail';
                }
            },
	        rules: '请输入手机号码',   // 填写规则提示
	        success: '手机格式正确',              // 验证通过提示
	        incompatible: '手机格式错误', // 格式不符失败提示
	        fail: '手机不能为空'          // 输入值为空失败提示
		} },

    {'text': 'student',
        'attr': {
            label: '在校生',
            type: 'radio',
            name: 'status',
            value: 'student'
        } },

    {'text': 'graduate',
        'attr': {
            label: '非在校生',
            type: 'radio',
            name: 'status',
            value: 'graduate'
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

// 因为在函数中里用的是把子元素insertBefore进form，
// 所以倒序执行函数才有正序显示的文本框 ╮(╯-╰)╭
makeConditionalInput('text', 'tel', 'input');
makeConditionalInput('email', 'email', 'input')
makeConditionalInput('password', 'repw', 'input');
makeConditionalInput('password','pw', 'input');
makeConditionalInput('text','username', 'input');

// makeRadio: 生成radio DOM的函数
function makeRadio (id) {
    var form = document.getElementsByTagName('form')[0],
        label = document.createElement('label'),
        input = document.createElement('input');

    for (var i=0; i<formSettings.length; i++) {
        if (formSettings[i].attr.type === 'radio' && formSettings[i].text === id) {
            input.setAttribute('type', 'radio');
            input.setAttribute('id', id);
            input.setAttribute('name', formSettings[i].attr.name);
            input.setAttribute('value', formSettings[i].attr.value);

            // 如果执行时给定第2个参数'checked'，则radio呈选中状态
            if (arguments[1] === 'checked') {
                input.setAttribute('checked', 'checked');
            }

            label.appendChild(input);
            var labelText = document.createTextNode(formSettings[i].attr.label);
            label.appendChild(labelText);
        }
    }

    label.className = 'radioLab';
    form.appendChild(label);

}

makeRadio('student', 'checked');
makeRadio('graduate');

// selectContent: 存放下拉菜单数据的数组
var selectContent = [
    {'text':'北京',
        val: [
            '北京大学',
            '清华大学',
            '北京外国语大学',
            '北京理工大学'
        ]},
    {'text': '天津',
        val: [
            '天津大学',
            '南开大学',
            '天津师范大学'
        ]},
    {'text': '上海',
        val: [
            '复旦大学',
            '同济大学',
            '上海交通大学',
            '华东师范大学'
        ]},
    {'text': '南京',
        val: [
            '南京大学',
            '南京师范大学'
        ]}
];
// makeLinkageSelect: 生成联动表单DOM的函数
// firstid: 一级表单id
// secondid: 二级表单id
function makeLinkageSelect (labelName, firstid, secondid, firstClsName, secondClsName) {
    var form = document.getElementsByTagName('form')[0],
        label = document.createElement('label'),
        firstSelect = document.createElement('select'),
        secondSelect = document.createElement('select'),
        firstSelectOptions = [],
        secondSelectOptions = [];

    label.className = 'selectLab';
    label.textContent = labelName;
    firstSelect.id = firstid;
    firstSelect.className = firstClsName;
    secondSelect.id = secondid;

    // 创建一级菜单的option们
    do {
        var firstSelectOpt = document.createElement('option');
        firstSelectOptions.push(firstSelectOpt);
        firstSelect.appendChild(firstSelectOpt);
    } while (firstSelect.childNodes.length < selectContent.length)
    // 给一级菜单里的option添加内容
    for (var i=0; i<selectContent.length; i++) {
        //var firstSelectOptText = document.createTextNode(selectContent[i].text);
        //firstSelectOptions[i].appendChild(firstSelectOptText);
        firstSelectOpt.textContent = selectContent[i].text;
        firstSelectOpt.value = selectContent[i].text;
        firstSelect.appendChild(firstSelectOpt);
    }

    //console.log(firstSelectOptions);

    //secondSelect.textContent = '';
    //for (var j=0; i<selectContent.length; i++) {
    //    if (firstSelect.childNodes[i+1].selected) {
    //        for (var j=0; j<selectContent[i].val.length; j++) {
    //            var secondSelectOpt = document.createElement('option');
    //            secondSelectOptions.push(secondSelectOpt);
    //            secondSelect.appendChild(secondSelectOpt);
    //        }
    //    }
    //}
       //while (secondSelect.childNodes.length < selectContent[i].val.length)
    //console.log(secondSelectOptions);

    label.appendChild(firstSelect);
    label.appendChild(secondSelect);

    form.appendChild(label);
}

makeLinkageSelect('学校', 'citySelect', 'uniSelect', 'citySelect', 'uniSelect');