"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Arrow functions
/* 
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el){
  return 2018 - el;
});

console.log(ages5);


// ES6
let ages6 = years.map(el => 2018 - el);

console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Element ${index}: ${age}`;
});
console.log(ages6);
 */

//  ES5
/* var box5 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    var self = this;
    document.querySelector('.green').addEventListener('click', function () {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  }
}

box5.clickMe();
 */

//  ES6
/* var box6 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}
box6.clickMe();




function Person(name) {
  this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(function(el){
    return this.name + ' is friend with ' + el;
  }.bind(this));

  console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends5(friends);


// ES6
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(el => `${this.name} is friend with ${el}`);

  console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends5(friends); */

// Rest parameters

// ES5
/* function isFullAge5() {
  //console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function (cur) {
    console.log((2016 - cur) >= 18);
  })
}

isFullAge5(1990, 1999, 1965, 2014);
 */

// ES6
/* function isFullAge6(limit, ...years) {
  years.forEach(cur => console.log(2018 - cur >= limit));
}

isFullAge6(21, 1990, 1999, 1965, 2001); */

// Classes

// ES5
/* var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};

var john5 = new Person5("John", 1989, "teacher");
john5.calculateAge(); */

// ES6
/*
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }

  //  not inherited
  static greeting() {
    console.log("Hey!");
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals + " medals");
  }
}

// const john6 = new Person6("John", 1999, "teacher");
// john6.calculateAge();
// Person6.greeting();

const johnAthlete6 = new Athlete6("John", 1990, "swimmer", 3, 10);

johnAthlete6.wonMedal();

console.log(johnAthlete6); */

// CHALLENGE

var Element = function Element(name, buildYear) {
  _classCallCheck(this, Element);

  this.name = name;
  this.buildYear = buildYear;
};

var Park = function (_Element) {
  _inherits(Park, _Element);

  function Park(name, buildYear, area, numTrees) {
    _classCallCheck(this, Park);

    var _this = _possibleConstructorReturn(this, (Park.__proto__ || Object.getPrototypeOf(Park)).call(this, name, buildYear));

    _this.area = area; //km2
    _this.numTrees = numTrees;
    return _this;
  }

  _createClass(Park, [{
    key: "treeDensity",
    value: function treeDensity() {
      var density = this.numTrees / this.area;
      console.log(this.name + " has a tree density of " + density + " trees per square km.");
    }
  }]);

  return Park;
}(Element);

var Street = function (_Element2) {
  _inherits(Street, _Element2);

  function Street(name, buildYear, length, size) {
    _classCallCheck(this, Street);

    var _this2 = _possibleConstructorReturn(this, (Street.__proto__ || Object.getPrototypeOf(Street)).call(this, name, buildYear));

    _this2.length = length; //km
    _this2.size = size;
    return _this2;
  }

  _createClass(Street, [{
    key: "classifyStreet",
    value: function classifyStreet() {
      var classification = new Map();
      classification.set(1, "tiny");
      classification.set(2, "small");
      classification.set(3, "normal");
      classification.set(4, "big");
      classification.set(5, "huge");
      console.log(this.name + ", build in " + this.buildYear + ", is a " + classification.get(this.size) + " street.");
    }
  }]);

  return Street;
}(Element);

var allParks = [new Park("Green Park", 1987, 0.2, 215), new Park("National Park", 1894, 2.9, 3541), new Park("Oak Park", 1953, 0.4, 949)];

var allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergreen Street', 2008, 2.7, 2), new Street('4th Street', 2015, 0.8), new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc(arr) {

  var sum = arr.reduce(function (prev, cur) {
    return prev + cur;
  }, 0);

  return [sum, sum / arr.length];
}

function reportParks(p) {

  console.log('-----PARKS REPORT-----');

  // Density
  p.forEach(function (el) {
    return el.treeDensity();
  });

  // Average age
  var ages = p.map(function (el) {
    return new Date().getFullYear() - el.buildYear;
  });

  var _calc = calc(ages),
      _calc2 = _slicedToArray(_calc, 2),
      totalAge = _calc2[0],
      avgAge = _calc2[1];

  console.log("Our " + p.length + " parks have an average of " + avgAge + " years.");

  // Which park has more than 1000 trees.
  var i = p.map(function (el) {
    return el.numTrees;
  }).findIndex(function (el) {
    return el >= 1000;
  });
  console.log(p[i].name + " has more than 1000 trees.");
}

function reportStreets(s) {
  console.log('-----STREETS REPORT-----');

  var _calc3 = calc(s.map(function (el) {
    return el.length;
  })),
      _calc4 = _slicedToArray(_calc3, 2),
      totalLength = _calc4[0],
      avgLength = _calc4[1];

  console.log("Our " + s.length + " streets have a total length of " + totalLength + " km, with an average of " + avgLength + " km.");

  s.forEach(function (el) {
    return el.classifyStreet();
  });
}

reportParks(allParks);
reportStreets(allStreets);
