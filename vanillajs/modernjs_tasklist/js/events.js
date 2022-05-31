console.clear();

// * Mouse events

let showType = (e) => console.log(`event type: ${e.type}`);

const btnClear = document.querySelector('.clear-tasks');
btnClear.addEventListener('click', (e) => {
	e.preventDefault();
	console.log('Tasks cleard');
});

document.querySelector('ul.collection li:nth-child(1)').addEventListener('click', showType);
document.querySelector('ul.collection li:nth-child(2)').addEventListener('dblclick', showType);
/* 
document.querySelector('ul.collection li:nth-child(3)').addEventListener('mousedown', showType);
document.querySelector('ul.collection li:nth-child(4)').addEventListener('mouseup', showType);

document.querySelector('ul.collection li:nth-child(5)').addEventListener('mouseover', showType);
document.querySelector('ul.collection li:nth-child(5)').addEventListener('mouseout', showType);

document.querySelector('.card').addEventListener('mouseenter', showType);
document.querySelector('.card').addEventListener('mouseleave', showType);

document.querySelector('.card').addEventListener('mousemove', showType);
 */
document.querySelector('body').addEventListener('mousemove', (e) => {
	document.querySelector('#task-title').textContent = `mx: ${e.offsetX} my: ${e.offsetY}`;
});

// * Input events and keyboard

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log(`event type: ${e.type}`);

	//let input = document.getElementsByName('task');
	let input = document.getElementById('task');
	console.log(input.value);
});

const input = document.getElementById('task');
const outputTask = (e) => (document.querySelector('.output-task').textContent = e.target.value);

//input.addEventListener('keydown', outputTask);
//input.addEventListener('keyup', outputTask);
input.addEventListener('keypress', outputTask);

input.addEventListener('focus', showType);
input.addEventListener('blur', showType);
input.addEventListener('cut', showType);
input.addEventListener('paste', showType);

input.addEventListener('input', showType);

//input.addEventListener('change', showType); // event for selector tag
