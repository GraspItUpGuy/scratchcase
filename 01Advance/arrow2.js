const cameras = {
    price : 600,
    weight : 2000,
    myDes : function (){
        return `This Canon camera is of $ ${this.price} and  weighs around ${this.weight} `
    },
}

// don't use arow functions  in methods and constructors 
// because "this" keyword cretes a problem
// avoid them in such areas 

description = cameras.myDes()
console.log(description)