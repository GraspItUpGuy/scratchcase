const toDos = [{
    title : 'meditate',
    isDone : false,
},{
    title : 'watch youtube videos',
    isDone : false,
},{
    title : ' Breakfast',
    isDone : false,
},{
    title : 'online lectures',
    isDone : true,
},{
    title : 'Coding Blocks',
    isDone : true,
},{
    title : 'walk home',
    isDone : false,
},{
    title : 'book',
    isDone : true,
}]

const tracker = toDos.filter((toDos)=>{ if ( toDos.isDone == true ) 
    {   
        return toDos.title 
 } })
console.log(tracker)
