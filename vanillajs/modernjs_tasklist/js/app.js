const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

const storage = 'tasks';

loadEventListners();

function loadEventListners() {
	document.addEventListener('DOMContentLoaded', () => {
		let tasks = loadTaskFromStorage();

		tasks.forEach((task) => {
			taskList.appendChild(createTaskItem(task));
		});
	});

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		if (taskInput.value === '') {
			alert('Add a task');
		} else {
			storeTaskInStorage(taskInput.value);

			taskList.appendChild(createTaskItem(taskInput.value));
			taskInput.value = '';

			console.log('Add new task to list.');
		}
	});

	taskList.addEventListener('click', (e) => {
		e.preventDefault();

		if (e.target.parentElement.classList.contains('delete-item')) {
			if (confirm('Are You Sure?')) {
				const item = e.target.parentElement.parentElement;

				removeTaskFromStorage(item);
				item.remove();

				console.log('One task removed.');
			}
		}
	});

	clearBtn.addEventListener('click', (e) => {
		e.preventDefault();

		while (taskList.firstChild) {
			removeTaskFromStorage(taskList.firstChild);
			taskList.removeChild(taskList.firstChild);
		}

		console.log('Removed all tasks.');
	});

	filter.addEventListener('keyup', (e) => {
		const text = e.target.value.toLowerCase();

		document.querySelectorAll('.collection-item').forEach((task) => {
			const item = task.firstChild.textContent;

			if (item.toLowerCase().indexOf(text) != -1) {
				task.style.display = 'block';
			} else {
				task.style.display = 'none';
			}
		});
	});
}

function createTaskItem(task) {
	const li = document.createElement('li');
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(task));

	const link = document.createElement('a');
	link.className = 'delete-item secondary-content';
	//link.innerHTML = '<i class="fa fa-remove"></i>';

	const icon = document.createElement('i');
	icon.className = 'fa fa-remove';
	link.appendChild(icon);

	link.setAttribute('href', '');

	li.appendChild(link);

	return li;
}

function loadTaskFromStorage() {
	let tasks;

	if (localStorage.getItem(storage) === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem(storage));
	}

	return tasks;
}

function storeTaskInStorage(task) {
	let tasks = loadTaskFromStorage();
	tasks.push(task);

	localStorage.setItem(storage, JSON.stringify(tasks));
}

function removeTaskFromStorage(taskItem) {
	let tasks = loadTaskFromStorage();

	tasks.forEach((task, index) => {
		if (taskItem.textContent === task) {
			tasks.splice(index, 1);
		}
	});

	localStorage.setItem(storage, JSON.stringify(tasks));
}
