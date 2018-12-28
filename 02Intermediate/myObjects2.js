// changing the objects etc .... continued after myobjects.js




let myYoutubeVideo = {
    title : 'loops in JavaScript', // dont forget colon :   , dont use =
    videoLength : 15,      // never miss the comma
    videoCreator : 'Puneet' ,  
    videoDescription : 'this is a video description and a long one'
}
let myYoutubeVideo2 = {
    title : 'functions in JavaScript', // dont forget colon :   , dont use =
    videoLength : 10,      // never miss the comma
    videoCreator : 'Puneet' ,  
    videoDescription : 'this is a video description and a long one'
}

console.log(myYoutubeVideo)

console.log (`Hey, new video on the ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}
              is live on the channel right now. It is ${myYoutubeVideo.videoLength} 
              minutes long. Description says "${myYoutubeVideo.videoDescription}" `)


 myYoutubeVideo.title = 'For each loop is JS'
 console.log(myYoutubeVideo.title)
 // entire object is changed
 console.log (`Hey, new video on the ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}
              is live on the channel right now. It is ${myYoutubeVideo.videoLength} 
              minutes long. Description says "${myYoutubeVideo.videoDescription}" `)




              // functions 


 let changeVideoLength = function (myObject){ 
     // adds 2 minutes for promotional content
       return (`time of this video is : ${myObject.videoLength  + 2}`)

 }             
 console.log(changeVideoLength(myYoutubeVideo))
 

 // returning objects

 // function thattaks an object and returns and object

 
 let changeVideoLength2 = function (myObject){ 
     // adds 2 minutes for promotional content
       return {
           formatOne : `the time of video is  : ${myObject.videoLength  + 2}` ,
           formatOne : `the time of video is  : ${myObject.videoLength  + 15}`
           
       }

    }       

    console.log(changeVideoLength2(myYoutubeVideo))

let addtime = changeVideoLength2(myYoutubeVideo2)
console.log(addtime)

    console.log(changeVideoLength2(myYoutubeVideo2))

