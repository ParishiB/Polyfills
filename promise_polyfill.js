// Implement promise

Promise.prototype.myPromise = function (cb) {
  this.then(
    function (result) {
      console.log("Promise is resolved");
      cb(null, result);
    },
    function (err) {
      console.log("Promise is rejected");
      cb(err, null);
    }
  );
};


// Polyfill for Promise.all





// Polyfill for Promise.race
