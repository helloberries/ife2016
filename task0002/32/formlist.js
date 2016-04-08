/*------------------------------------*\
 ** 说明
 *  formList.js
 *  input的格式：
 *  formlist.id = {
         label: '',
         type: '',
         rules: '',
         success: '',
         fail: '',
         empty: '',
         validator: function(){}
    }
 *  radio的格式：
 *  formlist.id = {
         label: '',
         name: '',
         value: ''
    }
\*------------------------------------*/

var formList = [];
formList.username = {
    label: '姓名',
    type: 'text',
    rules: '必填，长度为4-16个字符',
    success: '姓名格式正确',
    fail: '姓名格式错误',
    empty: '姓名不能为空',
    validator: function(input){
        var inputValue = input.value,
            inputLength = inputValue.length,
            count = 0;

            for(var i=0; i<inputLength; i++){
                if(/[a-z0-9]/i.test(inputValue[i])) {
                    count ++;
                } else {
                    count += 2;
                }
            }

            if (count >= 4 && count <= 16 && !/[^0-9a-z\u4e00-\u9fa5]/i.test(inputValue)) {
                return 'success';
            } else if (count <= 4 || count >=16 || /[^0-9a-z\u4e00-\u9fa5]/i.test(inputValue)) {
                return 'fail';
            } else if (!inputValue) {
                return 'empty';
            }
    }
};
formList.pw = {
    label: '密码',
    type: 'password',
    rules: '6-12位数字字母组合',
    success: '密码格式正确',
    fail: '密码格式错误',
    empty: '密码不能为空',
    validator: function(input){
        var inputValue = input.value,
            inputLength = inputValue.length;
        if (inputLength >= 6 && inputLength <= 12 && !/[^0-9a-z]/gi.test(inputValue)) {
            return 'success';
        } else if ((inputLength < 6 || inputLength > 12) && /[^0-9a-z]/gi.test(inputValue)) {
            return 'fail';
        } else if (!inputValue) {
            return 'empty';
        }
    }
};
formList.repw = {
    label: '密码确认',
    type: 'password',
    rules: '请再输入一次密码',
    success: '密码输入一致',
    fail: '密码输入不一致',
    empty: '不要忘记确认密码哦',
    validator: function(input){
        var inputValue = input.value,
            pwValue = document.querySelectorAll('input[type="password"]')[0].value;
        if (inputValue === pwValue && inputValue !== '') {
            return 'success';
        } else if (inputValue !== pwValue && inputValue) {
            return 'fail';
        } else if (!inputValue) {
            return 'empty';
        }
    }
};
formList.email = {
    label: '邮箱',
    type: 'email',
    rules: '请输入邮箱地址',
    success: '邮箱地址格式正确',
    fail: '邮箱地址格式错误',
    empty: '邮箱地址不能为空',
    validator: function(input){
        var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/i,
            inputValue = input.value;
        if (reg.test(inputValue)) {
            return 'success'
        } else if (!reg.test(inputValue) && inputValue) {
            return 'fail';
        } else if (!inputValue) {
            return 'empty';
        }
    }
};
formList.tel = {
    label: '手机',
    type: 'text',
    rules: '请输入手机号码',
    success: '手机号码格式正确',
    fail: '手机号码格式错误',
    empty: '手机号码不能为空',
    validator: function(input){
        var reg = /^\d{11}$/,
            inputValue = input.value;
        if (reg.test(inputValue)) {
            return 'success';
        } else if (!reg.test(inputValue) && inputValue) {
            return 'fail';
        } else if (!inputValue) {
            return 'empty';
        }
    }
};
formList.submitBtn = {
    type: 'submit',
    value: '提交',
    validator: function(){}
};
formList.skin1 = {
    label: '样式一',
    name: 'skin',
    value: 'skin1'
};
formList.skin2 = {
    label: '样式二',
    name: 'skin',
    value: 'skin2'
};