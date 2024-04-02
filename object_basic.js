In javascript almost everything is object

// Javascript properties
objectName.property      // person.age
  OR
objectName["property"] 
  OR
objectName[expression] 

// The JavaScript for...in statement loops through the properties of an object.

const person = {
  fname:" John",
  lname:" Doe",
  age: 25
};

for (let x in person) {
  txt += person[x];
}

// Adding New Properties
person.nationality = "English";

// The delete keyword deletes a property from an object:
delete person.age;


// Netsed Object
myObj = {
  name:"John",
  age:30,
  cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

myObj.cars.car2

// Object.values()
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const myArray = Object.values(person);

// JSON.stringify
// JSON will not stringify function
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let myString = JSON.stringify(person);

// Convert object into JSON
JSON.stringify

// To convert JSON to object
JSON.parse()
