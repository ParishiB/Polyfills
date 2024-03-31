// *********************************************************************

// Array foreach
const arr = [1, 2, 3, 4];

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

function cb(index) {
  console.log(index);
}

arr.myForEach(cb);

// *********************************************************************

// Array Map

const arr1 = [1, 2, 3, 4, 5];

const res = arr.map((i) => i * 2);
console.log(res);

Array.prototype.myMap = function (cb) {
  let res = [];
  for (let index = 0; index < this.length; index++) {
    res.push(cb(this[index]));
  }
  return res;
};

const ans = arr.myMap((el) => el * 3);
console.log(ans);

// *********************************************************************

// Array Filter

const arr2 = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i]) == true) {
      res.push(this[i]);
    }
  }
  return res;
};

function callback(num) {
  return num > 2;
}

const a = arr.myFilter(callback);
console.log(a);
