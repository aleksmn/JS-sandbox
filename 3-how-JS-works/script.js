/********** Hoisting **********/
/* 
calculateAge(1989);

// Function declaration - hoisting works 
function calculateAge(yearOfBirth) {
  console.log(2018 - yearOfBirth); 
}

// will not work:
// retirement(1989); 

// Function Expression - hoisting does NOT work 
let retirement = function (yearOfBirth) {
  console.log(65 - (2018 - yearOfBirth));
}

retirement(1989);

 */

// variables

/* 
console.log(age);
var age = 45;

function foo() {
  var age = 23;
  console.log(age);
}

foo();
console.log(age);
 */

/********** Scope **********/

let a = "Hello";

first();

function first() {
  let b = "Hey";
  second();

  function second() {
    let c = "Hi";
    third();
  }
}

function third() {
  let d = "John";
  //console.log(c); // 'c is not defined'
  // console.log(a+ ' ' + d); // OK
  // console.log(a+ ' ' + b); // 'b is not defined'
}

/********** this keyword **********/

let john = {
  name: "John",
  yearOfBirth: 1989,
  calculateAge: function() {
    console.log(this);
    console.log(2018 - this.yearOfBirth);
  /* 
    function innerFunction() { // regular function
      console.log(this); // logs window object
    }

    innerFunction(); 
  */
  }
};

john.calculateAge(); // 29

let mike = {
  name: "Mike",
  yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge;

mike.calculateAge(); // 34