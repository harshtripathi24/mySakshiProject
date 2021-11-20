    /* content slider*/ 
const floating_btn = document.querySelector('.float');
const close_btn = document.querySelector('.close-btn');
const content_container = document.querySelector('.slider');

floating_btn.addEventListener('click', () => {
	content_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	content_container.classList.remove('visible')
});


/*calendar slider*/
const cal_btn = document.querySelector('.cal');
const cls_btn = document.querySelector('.cls-btn');
const calen_container = document.querySelector('.container');

cal_btn.addEventListener('click', () => {
	calen_container.classList.toggle('visible')
});

cls_btn.addEventListener('click', () => {
	calen_container.classList.remove('visible')
});