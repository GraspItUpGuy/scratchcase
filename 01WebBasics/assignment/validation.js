// alert('js is linked')

//calling of this function is not required as it is called  by the onclick
//attribute  of the button
// function myValidation(){
//   let myValue = document.getElementById('myform').value
//   if (isNaN(myValue) || myvalue < 1 || myValue > 20){
//       console.log('not a valid input')

//   } else {
//       console.log('this input is okay')
//   }
// }

// // using  queryslector 

// function myValidation(){
//     let myValue = document.querySelector('#myform').addEventListener('onclick',(e )=>{

//       console.log(e.target.value)
//      } )
//   }


const editById = document.querySelector('#idOne')

editById.forEach(function(p) {
     p.textContent = 'this is changed using querry as an assignment'
     
})