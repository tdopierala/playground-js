// * document.getElementById
const byid = document.getElementById('task-title');
console.log(byid);
byid.style.textDecoration = "underline";

// * document.querySelector
const byquery = document.querySelector('ul li:nth-child(2) span');
console.log(byquery);
byquery.style.color = "green";
byquery.style.textDecoration = "overline";

// * document.getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items);

items[0].style.color = "red";
items[1].textContent = "World";
//items[3].textContent = "Hello";

// * document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);

// cnverting HTML collection in to array
lis = Array.from(lis);
console.log(lis);
lis.reverse();

lis.forEach((li, idx) => {
    let text = li.textContent;
    console.log(text.trim());
    //li.textContent = `${idx}: ${text}`;
});

// * document.getElementsByName
const named = document.getElementsByName('task');
console.log(named);

// * document.querySelectorAll
const nodes = document.querySelectorAll('ul li.collection-item');
console.log(nodes);

nodes.forEach((node, idx) => {
    let html = node.innerHTML;
    node.innerHTML = `<span style="font-weight:bold">${idx}</span> ${html}`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach(li => {
    li.style.background = '#ccc'; 
});

const liEven = document.querySelectorAll('li:nth-child(even)');

for(let i=0; i<liEven.length; i++){
    liEven[i].style.background = '#f4f4f4';
}