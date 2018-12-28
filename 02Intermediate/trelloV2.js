// verson 2 of trello....trelloV2.js

// day, how many meetings I have for today,  how many meetings I have done

let myToDos = {
    day: 'MOnday',
    meetings : 0 , 
    meetDone: 0 ,   // coma in last emelmet is not necessary but its a good practice
                  // in case we want to add other elements
 }


 let addMeeting = function (todo, meet = 0){
         todo.meetings = todo.meetings + meet;

 }

 // when we pass an object in a functon we are not passings a copy of the object, we
 // are passing an actual object

 let addMeetingDone = function(todo, meet = 0){
      todo.meetDone= todo.meetDone + meet
 }


 let resetday = function (todo){
     todo.meetings = 0;
     todo.meetDone = 0;
     
 }
 

 let getSummaryOfDay = function(todo){
     let meetLeft = todo.addMeeting - todo.meetDone
     return `you have ${meetLeft} numbers of meetings today !`
 }



 addMeeting(myToDos, 4)
 addMeeting(myToDos,2)
 addMeetingDone(myToDos, 5)
 console.log(getSummaryOfDay(myToDos))