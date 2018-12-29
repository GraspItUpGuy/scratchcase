// alert('js has been linked')

// const myPElements = document.querySelector('p')
// myPElements.textContent = 'I am being changed using javascript'

const myPElements = document.querySelectorAll('p')

myPElements.forEach(function(p){
    p.textContent = 'I am changed using Java Script loops'
})

// myPElements.forEach(function(p){
//     p.remove() 
// })

// remove using arrow function


myPElements.forEach( (p) =>  p.remove())