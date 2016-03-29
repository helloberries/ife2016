var inputs = document.querySelectorAll('.input');
	btn = document.querySelector('.btn');

for (var i=0; i<inputs.length; i++) {
	inputs[i].addEventListener('focus', eventOperation.inputFocus, false);
	inputs[i].addEventListener('blur', eventOperation.inputBlur, false);
}

btn.addEventListener('click', eventOperation.submit, false);