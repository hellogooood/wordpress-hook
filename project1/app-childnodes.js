// Select the element or gropu of elements that we wwant
// decide the effect we want to apply to the selection

//childNodes - returns all childNOdes including whitespace which is treate as a text node

//children
// firstChild
//lastChild


const result = document.querySelector('#result');
const allChildren = result.childNodes;
//console.log(allChildren);
// returns everything including whitespace and li items

const children = result.children;
console.log(children);

console.log(result.firstChild);
//returns whitespace
console.log(result.lastChild);