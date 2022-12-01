console.clear();
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// * Get child nodes
val = list.childNodes;
console.log(val.length);

val = list.childNodes[0];
val = list.childNodes[1].nodeName;
val = list.childNodes[5].nodeType;
//val = list.childNodes[3].nodeValue;

/** Node elemnt types
 * 1 - Element
 * 2 - Attribute (deprecated)
 * 3 - Text node
 * 8 - Comment
 * 9 - Document itself
 * 10 - Doctype
 */

val = list.children;
console.log(val.length);

val = list.children[1];
val = list.children[3].children[2].className;

val = list.firstChild; // first child node
val = list.firstElementChild; // first child element node

val = list.lastChild; // last child node
val = list.lastElementChild; // last child element node

val = list.childElementCount; // count child elements

console.log(val);

// * Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

val = listItem.nextSibling; // next node
val = listItem.nextElementSibling; // next element node
val = listItem.nextElementSibling.nextElementSibling;

val = listItem.previousSibling; // previous node
val = listItem.previousElementSibling; // previous element node

console.log(val);
