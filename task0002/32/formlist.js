/*------------------------------------*\
 ** 说明
 *  formList.js
 *  input的格式：
 *      {
             id: '',
             label: '',
             type: '',
             rules: '',
             success: '',
             fail: '',
             empty: '',
             validator: function(){}
        }
 *  radio的格式：
 *       {
             id: '',
             label: '',
             name: '',
             value: ''
        }
 * select的格式：
 *     {
 *          id: '',
 *          secondaryId: '', //二级菜单的id
 *          opt:[
 *              {firstOpt: '',
 *                  secondOpt: [
 *                  ]}
 *          ]
 *     }
\*------------------------------------*/

var formList = [];
formList.username = {
    label: '姓名',
    type: 'text',
    rules: '必填，长度为4-16个字符',
    success: '格式正确',
    fail: '格式错误',
    empty: '名称不能为空',
    validator: function(){}
};
formList.pw = {
    label: '密码',
    type: 'password',
    rules: '6-12位数字字母组合',
    success: '密码格式正确',
    fail: '密码格式错误',
    empty: '密码不能为空',
    validator: function(){}
};
formList.repw = {
    label: '密码确认',
    type: 'password',
    rules: '请再输入一次密码',
    success: '密码输入一致',
    fail: '密码输入不一致',
    empty: '不要忘记确认密码哦',
    validator: function(){}
};
formList.email = {
    label: '邮箱',
    type: 'email',
    rules: '请输入邮箱地址',
    success: '邮箱地址格式正确',
    fail: '邮箱地址格式错误',
    empty: '邮箱地址不能为空',
    validator: function(){}
};
formList.tel = {
    label: '手机',
    type: 'text',
    rules: '请输入手机号码',
    success: '手机号码格式正确',
    fail: '手机号码格式错误',
    empty: '手机号码不能为空',
    validator: function(){}
}
formList.ungrad = {
    label: '在校生',
    name: 'status',
    value: 'ungrad'
};
formList.grad = {
    label: '非在校生',
    name: 'status',
    value: 'grad'
};
formList.employment = {
    label: '就业单位',
    type: 'text'
}
formList.citySelect = {
    label: '学校',
    opts: [
        {city: '北京',
            uni: [
                '北京大学',
                '清华大学',
                '北京外国语大学',
                '北京理工大学'
            ]},
        {city: '天津',
            uni: [
                '南开大学',
                '天津大学',
                '天津师范大学'
            ]},
        {city: '上海',
            uni: [
                '复旦大学',
                '同济大学',
                '上海交通大学'
            ]},
        {city: '南京',
            uni: [
                '南京大学',
                '南京师范大学'
            ]}
    ]
};
console.log(formList);
