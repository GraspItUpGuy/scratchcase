// alert( 'js is linked')

// adding attributes to html


const myNewPara = document.createElement('p')
// crete any tag


// add text for the tag to be added
myNewPara.textContent = 'I was added via java Script'

// firt select where we want to add , here body, then where in the body
// here at the last , hence append child for inside the child
document.querySelector('body').appendChild(myNewPara)