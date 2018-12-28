let grader = function (marksgot = 0, totalMarks = 100){
    let perc = (marksgot / totalMarks ) * 100
      let grade = ''
    if(perc >=85 ){
           grade = 'A'
    } else if((perc >=70) && (perc <85) ){
        grade = 'B'
          } else if((perc >=55) && (perc <75) ){
            grade = 'c'
              } else if((perc >=40) && (perc <55) ){
                grade = 'D'
                  } else {
                    grade = 'F'
                      } 

     return  `  your percentage  is ${perc} and grade is ${grade}`           
}


console.log(grader(98,100))