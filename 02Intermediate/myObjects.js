// let myArray = ['name ', 33, true] 



 // creation of an  object 
let myYoutubeVideo = {
    title : 'loops in JavaScript', // dont forget colon :   , dont use =
    videoLength : 15,      // never miss the comma
    videoCreator : 'Puneet' ,  
    videoDescription : 'this is a video description and a long one'
}

console.log(myYoutubeVideo)

console.log (`Hey, new video on the ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}
              is live on the channel right now. It is ${myYoutubeVideo.videoLength} 
              minutes long. Description says "${myYoutubeVideo.videoDescription}" `)



 // name , prise , description,  teacher
 
 

 let onlineCourse = {
     teacher: 'Arnav Gupta',
     title: 'Full Stack Website Development using node.js in backend',
     price: 25000 , 
     description: 'I this course you will learn FUll Stack website development using node.js in the backend'
                    
 }
 console.log(onlineCourse)


 console.log( `The courses  ${onlineCourse.title} under the guidence of 
              ${onlineCourse.teacher}. It will cover ${onlineCourse.description}  
              and costs ${onlineCourse.price}` )