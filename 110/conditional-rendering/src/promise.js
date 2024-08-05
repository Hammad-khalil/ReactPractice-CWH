let con = true;
let error = "Failed"
let promise = new Promise(function (resolve, reject) {
    if (con) {
        resolve(true);
    } else {
        reject(error);
    }
});
promise.then(function (result) {
    console.log(result);
}).catch(function (reject) {
    console.log(reject);
});