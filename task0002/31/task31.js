/**
 * unis: 存放城市和学校
 * @type 数组
 */
var list = [
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

/**
 * switchSel: 切换表单
 * @param  {object} e event
 */
function switchSel (e) {
	e = e || window.event;
	var target = e.target || e.srcElement;

	var uniLab = document.getElementById('uniLab'),
		emplLab = document.getElementById('emplLab');

	if (target.id === 'student' && target.checked) {
		uniLab.style.display = 'block';
		emplLab.style.display = 'none';
	} else if (target.id === 'graduate' && target.checked) {
		emplLab.style.display = 'block';
		uniLab.style.display = 'none';
	}
}
/** citySel: 一级联动，创建城市 */
function citySel () {
	var uniLab = document.getElementById('uniLab'),
		citySelect = document.getElementById('citySelect');
	for (var i=0; i<list.length; i++) {
		var city = document.createElement('option');
		city.textContent = list[i].text;
		city.value = list[i].text;
		citySelect.appendChild(city);
	} 
}
/** uniSel: 二级联动，根据城市创建学校 */
function uniSel () {
	 var uniLab = document.getElementById('uniLab'),
		uniSelect = document.getElementById('uniSelect');
	uniSelect.textContent = ''; // 清空HTML
	for (var i=0; i<list.length; i++) {
		if (citySelect.childNodes[i+1].selected) { // i+1是因为childNodes是从1开始的
			for (var j=0; j<list[i].val.length; j++) {
				var uni = document.createElement('option');
				uni.textContent = list[i].val[j];
				uni.value = list[i].val[j];
				uniSelect.appendChild(uni);
			}
		}
	}
}

var form = document.getElementsByTagName('form')[0],
	citySelect = document.getElementById('citySelect');

form.addEventListener('click', switchSel, false);

citySel();
uniSel();
// 点击城市时，根据所选城市，再运行一次uniSel
citySelect.addEventListener('click', uniSel, false);
