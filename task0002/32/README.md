#### JS文件分为三个
  - formlist.js: 用户可修改，增删表单，添加诸如表单名称、验证规则、验证方法等细节
    配置示例：
    ```javascript
        {
          label: '名称',                    // 表单标签
          type: 'input',                   // 表单类型
          validator: function () {...},    // 表单验证规
          rules: '必填，长度为4-16个字符',    // 填写规则提示
          success: '格式正确',              // 验证通过提示
          fail: '名称不能为空'               // 验证失败提示
         }
      ```
  
  - event.js: 包含focusCheck/blurCheck这类决定表单获得焦点、失去焦点时样式的事件句柄
  - util.js: 包含工具类函数、生成表单DOM的函数
