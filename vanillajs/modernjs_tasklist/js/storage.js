const form = document.querySelector('form');
const storage = 'tasks';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const input = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem(storage) === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem(storage));
    }

    tasks.push(input);

    localStorage.setItem(storage, JSON.stringify(tasks));

    console.log(input);
});

const tasks = JSON.parse(localStorage.getItem(storage));
tasks.forEach(task => console.log(task));