var John = { 
    name : 'I am John',
    age : 24,
    isActive : true,
}

var Marry = { 
    name : 'I am Marry',
    age : 23,
    isActive : true,
}

var Sam = { 
    name : 'I am Sam',
    age : 29,
    isActive : false,
}

let users = new Map ()
// used to send key value pair so that we may retieve the data in the key value pair


// here 'John'  is made up , we make it  and 
// john is the variable refrencing to the object that we made earlier
users.set('John', John)
users.set('marry', Marry)
users.set('sam', Sam)
// we get a map of object on console,log
console.log(users)

// as  soon as we use the set() then it converts users into a map
// map always returns an itretable itretator , something we can loop over, to be studies later


//  using map we can find out how many objects or entities are inside this map,
// we can not do this using objects, we have to loops ar ttricks to do that

console.log(users.size)

console.log(users.get ('sam')) // get takes the key that we give to an object


console.log(users.keys())
console.log(users.values())


// for of loop

for (const value of users.values()) {
    console.log(value.name)
}
for (const [key, value] of users.entries()) {
    console.log(key + '=' + value.name)
    
}

// using for each


users.forEach( (value,key )=> console.log(key + '=' + value.name))

// map autaomatically sets the note for the  array of arrays if wepass the array insise 
// the map

var arrayOfArrays = [['one','1'],['two', '2'],['three', '3']]

var newMap = new Map(arrayOfArrays)
console.log(newMap)

for (const value of newMap.values() ){ 
    console.log(newMap.values)
    
}