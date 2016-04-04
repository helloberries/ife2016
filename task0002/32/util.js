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
        elem.addEventListener(type, func);
    } else if (elem.attachEvent) {
        elem.attachEvent('on'+type, func);
    } else {
        elem['on'+type] = func;
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
    var newspan = document.createElement('span'),
        newinput = document.createElement('input'),
        newspanText = document.createTextNode(formList[inputId].label);

    newinput.className = 'input';

    newinput.id = inputId;
    newinput.type = formList[inputId].type;

    newspan.appendChild(newspanText);
    label.appendChild(newspan);
    label.appendChild(newinput);
    form.appendChild(label);
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

/* 执行函数 */
var form = makeForm('post');
makeInput('username');
makeInput('pw');
makeInput('repw');
makeInput('email');
makeInput('tel');
makeRadio('ungrad', 'checked');
makeRadio('grad');