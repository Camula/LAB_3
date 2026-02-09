window.onload = () => {
if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('sw.js');
}

const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const render = () => {
list.innerHTML = '';
tasks.forEach((task, index) => {
const li = document.createElement('li');
li.textContent = task;

const btn = document.createElement('button');
btn.textContent = 'Usuń';
btn.onclick = () => {
tasks.splice(index, 1);
save();
};

li.appendChild(btn);
list.appendChild(li);
});
};

const save = () => {
localStorage.setItem('tasks', JSON.stringify(tasks));
render();
};

form.onsubmit = e => {
e.preventDefault();
tasks.push(input.value);
input.value = '';
save();
};

render();
};
