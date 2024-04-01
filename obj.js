// ***********************************************************

/*
    1. Create an object called "myPet" with the following properties:
        - name -> "Sudo"
        - type -> "Dog"
        - breed -> "Poodle"
        - age -> 7
        - friends -> ["Bit", "Byte", "Data"]

    2. Print out "myPet" to the terminal

    3. Add a new property: colour -> "Black"

    4. Change "breed" to be "Beagle"

    5. Remove "Data" from the list of friends for "myPet"
    
    6. Print out "myPet" to the terminal again

    7. Add "Chip" to the list of friends for "myPet"

    8. Print out "myPet" to the terminal again
*/

const myPet = {
  name: "Sudo",
  type: "Dog",
  breed: "Doodle",
  age: 7,
  friends: ["Bit", "Byte", "Data"],
};

console.log(myPet);

myPet.color = "Black";

myPet.breed = "Beagle";

myPet.friends = myPet.friends.slice(0, 2);
myPet.friends.push("Chip");
console.log(myPet);

// ***********************************************************

const banana = { name: "banana", quantity: 1, price: 1.95 };
const apple = { name: "apple", quantity: 1, price: 1.45 };
const candy = { name: "candy", quantity: 1, price: 3.5 };

const store = {
  storeNumber: 5,
  locationCity: "Milan",
  locationCountry: "Italy",
  products: [banana, apple, candy],
};

console.log(store);

console.log(store.products);
console.log(store.products[2]);

store.products[0].price = 1.75;

console.log(store);
console.log(banana);

candy.price = 4.99;

console.log(store);
console.log(candy);

// ***********************************************************

/*
    1. Create the following 3 objects:
        - const banana = {name: "banana", quantity: 1, price: 1.95}
        - const apple = {name: "apple", quantity: 1, price: 1.45}
        - const candy = {name: "candy", quantity: 1, price: 3.50}

    2. Create an object called "store" with the following properties:
        - storeNumber -> 5
        - locationCity -> "Milan"
        - locationCountry -> "Italy"
        - products: [banana, apple, candy]

    3. Print out "store" to the terminal

    4. Only print out all the product objects in "store"

    5. Only print out the 3rd product object in "store"

    6. Change the price of the banana object through the store object
       to be 1.75..

    7. Print out both "store" and "banana"

    8. Change the price of the candy object directly to be 4.99

    9. Print out both "store" and "candy"
*/

const houseForSale = {
  area: 940,
  value: 320000,
  streetName: "Fifth Street",
  built: 2012,
  owner: {
    name: "Blake",
    age: 29,
  },
  offers: [290000, 295000, 315000, 312000],
};

console.log(houseForSale);

delete houseForSale[3];

houseForSale.owner.age = 30;

houseForSale.sale_price = 312000;

// ***********************************************************

/*
    1. Create an object called "houseForSale" with the following properties:
        - area -> 940
        - value -> 320000
        - streetName -> "Fifth Street"
        - built -> "2012"
        - owner -> {name: "Blake", age: 29}
        - offers -> [290000, 295000, 315000, 312000]

    2. Print out "houseForSale" to the terminal

    3. Delete the property with the key "built"

    4. Change the age of the owner to be 30 inside "houseForSale"

    5. Print out the maximum offerPrice (use reduce)

    6. Add a new property: "sale price" -> 312000

    7. Print out "houseForSale" to the terminal

    *This is a challenging exercise - take it slow and step by step
*/

const myConsole = {
  log: (message) => {
    console.log(message);
  },
};

myConsole.log("Hello world");


/* Flatten a multi nested object for eg 

let obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
      },
    },
  },
};
*/

function flatten(obj) {
  const res = {};
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      for (let subKey in obj[key]) {
        res[key + "." + subKey] = obj[key][subKey];
      }
    } else {
      res[key] = obj[key];
    }
  }
  return res;
}

flatten(obj);
