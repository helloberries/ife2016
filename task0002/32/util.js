/*------------------------------------*\
 #TOOLS
\*------------------------------------*/
/** $: 封装getElementById */
function $(id) {
	return document.getElementById(id);
}
/** addEvent: 绑定事件，兼容不同浏览器 */
function addEvent (elem, type, func) {
    if (elem.addEventListener) {
        elem.addEventListener(type, func, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on'+type, func);
    } else {
        elem['on'+type] = func;
    }
}
/** onetime: 绑定一次性事件 */
function onetime(node,type,callback) {
    // 创建事件
    node.addEventListenter(type,function(e) {
        // 移除事件
        e.target.removeEventListenter(e.type,arguments.callee);
        // 回调函数
        return callback(e);
    })
}
/** once: 令函数只执行一次*/
function once(fn, context) {
    var result;
    return function() {
        if(fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }
        return result;
    };
}
/** isParent: 判断某一元素是不是另一元素的子元素*/
function isParent(obj, parentObj) {
    while (obj != undefined && obj != null && obj.tagName.toUpperCase() != 'BODY') {
        if (obj === parentObj) {
            return true;
        }
        obj = obj.parentNode;
    }
    return false;
}
/** getStyle: 获得任意元素的样式*/
function getStyle (obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

/*------------------------------------*\
 #生成DOM的函数
\*------------------------------------*/
/** makeForm: 生成form */
function makeForm(method) {
    var body = document.getElementsByTagName('body')[0];
    var form = document.createElement('form');
    form.setAttribute('method', method);

    body.appendChild(form);

    return form;
}
/** makeLabel: 生成label */
function makeLabel (labClsName) {
    var newlabel = document.createElement('label');
    newlabel.className = labClsName;
    form.appendChild(newlabel);

    return newlabel;
}
/** makeInput: 生成input */
function makeInput (inputId) {
    var label = makeLabel('inputLab');
    var rules = makeRules(inputId);
    var newspan = document.createElement('span'),
        newinput = document.createElement('input'),
        newspanText = document.createTextNode(formList[inputId].label);

    newinput.className = 'input';

    newinput.id = inputId;
    newinput.type = formList[inputId].type;

    newspan.appendChild(newspanText);
    label.appendChild(newspan);
    label.appendChild(newinput);
    label.appendChild(rules);
    form.appendChild(label);
}
/** makeRules: 生成提示规则 */
function makeRules (id) {
    var rules = document.createElement('p'),
        rulesText = document.createTextNode(formList[id].rules);

    rules.className = 'rules';
    rules.appendChild(rulesText);
    return rules;
}
/** makeRadio: 生成radio */
function makeRadio (radioId) {
    var label = makeLabel('radioLab');
    var newradio = document.createElement('input'),
        newlabelText = document.createTextNode(formList[radioId].label);

    newradio.id = radioId;
    newradio.type = 'radio';
    newradio.name = formList[radioId].name;
    newradio.value = formList[radioId].value;

    if (arguments.length > 1) {
        newradio.setAttribute('checked', 'checked');
    }

    label.appendChild(newradio);
    label.appendChild(newlabelText);
    form.appendChild(label);
}
/** makeBtn: 生成button */
function makeBtn (btnId) {
    var label = makeLabel('btnLab');
    var newbtn = document.createElement('button');

    newbtn.id = btnId;
    newbtn.className = 'btn';

    newbtn.type = formList[btnId].type;
    newbtn.textContent = formList[btnId].value;

    label.appendChild(newbtn);
}
/** makeResult: 生成显示验证结果的div */
function makeResult() {
    var validDiv = document.createElement('div'),
        validul = document.createElement('ul');

    validDiv.className = 'valid';
    validDiv.id = 'valid';

    var inputs = document.querySelectorAll('.input');
    for (var i=0; i<inputs.length; i++) {
        var inputId = inputs[i].id;
        var validli = document.createElement('li'),
            validText = document.createTextNode(inputs[i].parentNode.firstChild.textContent + '：');

        validli.appendChild(validText);
        validul.appendChild(validli);
    }

    validDiv.appendChild(validul);
    form.appendChild(validDiv);
}

/* 执行函数 */
var form = makeForm('post');
makeInput('username');
makeInput('pw');
makeInput('repw');
makeInput('email');
makeInput('tel');
makeRadio('skin1', 'checked');
makeRadio('skin2');
makeBtn('submitBtn');
makeResult();