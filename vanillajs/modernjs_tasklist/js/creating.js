console.clear();

// * Create element
const li = document.createElement('li');

li.className = 'collection-item'; // add class attribute
li.id = 'special-li'; // add id attribute
li.setAttribute('title', 'Special List Item'); // add custom attribute

const textNode = document.createTextNode("I'm a Special Item"); // create text node
li.appendChild(textNode); // add text node to element

const link = document.createElement('a'); // create link element
link.setAttribute('href', '#');
link.className = 'delete-item secondary-content'; // add link class names
link.innerHTML = '<i class="fa fa-remove"></i>'; // add html with icon

li.appendChild(link); // append li with link

document.querySelector('ul.collection').appendChild(li); // add new element to the DOM

console.log(li);

// * Replace element
const newHeading = document.createElement('h3'); // create new element to replace
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('New Task List'));

const oldHeading = document.getElementById('task-title'); // old element to be replaced
const cardAction = document.querySelector('.card-action'); // parent element

cardAction.replaceChild(newHeading, oldHeading);

// * Remove element
const _lis = document.querySelectorAll('ul.collection li');
_lis[0].remove(); // remove element directly

const _list = document.querySelector('ul.collection');
_list.removeChild(_lis[3]); // remove element by child node

// * Adding and removing class
const firstLink = document.querySelector('ul.collection li:nth-child(2)').children[2];

let val2;
val2 = firstLink.className;
val2 = firstLink.classList;
//val2 = firstLink.classList[0];
console.log(val2);

firstLink.classList.add('test-class');
firstLink.classList.remove('secondary-content');
console.log(firstLink.classList);

// * Adding and remove attributes
const lastLink = document.querySelector('ul.collection li:last-child').children[0];
val2 = lastLink;

val2 = lastLink.getAttribute('href');
lastLink.setAttribute('href', 'http://duckduckgo.com');
val2 = lastLink.hasAttribute('title');
lastLink.removeAttribute('href');

console.log(val2);
console.log(lastLink);
