// Function Constructor

/* const Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
};

const john = new Person("John", 1989, "teacher");
dima.yearOfBirth = 1945;

dima.calculateAge();
console.log(john); */

// Passing function as argument
// callback function

/* let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  let arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}
function calculateAge(yearOfBirth) {
  return 2018 - yearOfBirth;
}
function isFullAge(age) {
  return age >= 18;
}

let ages = arrayCalc(years, calculateAge);
console.log(ages);

let fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges); */

// Bind, call and apply

/* var dima = {
  name: "Дмитрий",
  age: 26,
  job: "учитель",
  presentation: function(style, timeOfDay) {
    let firstHello = "";
    let secondHello = "";
    let hello = "";

    switch (timeOfDay) {
      case "day":
        secondHello = "Добрый день";
        break;
      case "morning":
        secondHello = "Доброе утро";
        break;
      case "night":
        secondHello = "Добрый вечер";
    }

    if (style === "formal") {
      // формальное приветствие
      firstHello = "Здравствуйте! ";

      hello =
        firstHello +
        secondHello +
        ", дамы и господа! Меня зовут " +
        this.name +
        ", я " +
        this.job +
        ", мне " +
        this.age +
        " лет.";

      console.log(hello);
    } else if (style === "friendly") {
      // дружеское приветствие
      firstHello = "Привет! ";

      hello =
        firstHello +
        secondHello +
        ", дорогие друзья! Меня зовут " +
        this.name +
        ", я " +
        this.job +
        ", мне " +
        this.age +
        " лет.";

      console.log(hello);
    }
  }
};

// dima.presentation("formal", "night");
// dima.presentation("friendly", "morning");

let maria = {
  name: "Мария",
  job: "дизайнер",
  age: "28"
};

// dima.presentation.call(maria, "formal", "night");

// dima.presentation.apply(maria, ["formal", "morning"]);

let dimaFriendly = dima.presentation.bind(dima, 'friendly');

dimaFriendly('morning');

let mariaFormal = dima.presentation.bind(maria, 'formal');

mariaFormal('night'); */




let years = [1990, 1965, 1937, 2005, 2000];

function arrayCalc(arr, fn) {
  let arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}
function calculateAge(yearOfBirth) {
  return 2018 - yearOfBirth;
}
function isFullAge(limit, age) {
  return age >= limit;
}

let ages = arrayCalc(years, calculateAge);
console.log(ages);

let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan);