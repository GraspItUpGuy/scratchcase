let myToDos = {
    day: 'Monday',
    meetings : 0 , 
    meetDone: 0 ,    // function within an object
    addMeeting : function(num = 0){
    //console.log(this) //  this refers to all the prperties that are defined within the 
                      // the object

// if we use this.---- then only it is refering to the elemnts of the array
//  else it is completely different thing

     this.meetings = this.meetings + num // this bcoz it  reverts back the scope 
                                        // as it has tha access to all elements
},

  meetingDone : function(num){
           this.meetDone =num
        this.meetings = this.meetings -  this.meetDone
  },
  resetDay : function () {
       this.meetings = 0
       this.meetDone = 0
  },
   summary : function(){
       return  `you have ${this.meetings}  number of meetings today ! and ${this.meetDone}
                   number of meetings have been done     `
   },
}



myToDos.addMeeting(4)
myToDos.meetingDone(2)
console.log(myToDos.summary())
myToDos.resetDay()

// handle meeting done
//  reset function