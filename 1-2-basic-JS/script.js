/* const john = {
  name: 'John',
  lastName: 'Smith',
  job: 'teacher',
  yearOfBirth: 1989,
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    this.age = 2018 - this.yearOfBirth;
  }
};

john.calculateAge();


console.log(john); */

/* 

let years = [1989, 1990, 2001, 1995];
let ages = [];

for (let i = 0; i < years.length; i++) {
  ages[i] = 2018 - years[i];
}

console.log(ages);

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    console.log('Person is ' + ages[i] + ' is of full age.')
  } else {
    console.log('Person is ' + ages[i] + ' is NOT of full age.')
  } 
}

 */



// let vs var

var callbacks = []

// console.log(i);

for(let i = 0; i < 3; i++) {
  callbacks[i] = function() {
    console.log(i)
  }
}

callbacks.forEach(function(cb){
  cb();
})

// console.log(i);

