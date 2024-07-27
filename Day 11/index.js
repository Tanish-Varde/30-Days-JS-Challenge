//! Activity 1 => Understanding Promises

console.log("\n Understanding Promises \n");


//? Task 1

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1 is resolved!");
    }, 2000);
});

promise1
    .then((res) => console.log(res));


//? Task 2

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise2 is rejected!");
    }, 2000);
});

promise2
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.error(err)
    });





//! Activity 2 => Chaining Promises

console.log("\n Chaining Promises \n");


//? Task 3


const promise3 = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 2);
    setTimeout(() => {
        if (num === 0) {
            resolve("Promise3 is resolved!");
        } else {
            reject("Promise3 is rejected!");
        }
    }, 2000);
});

promise3
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("Promise3 is fulfilled!"));





//! Activity 3 => Using Async/Await

console.log("\n Using Async/Await \n");


//? Task 4


const promise4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise4 is resolved!");
        }, 2000);
    })
};


; (async () => {
    try {
        const res = await promise4();
        console.log("Resolved => ", res);
    } catch (err) {
        console.log("Rejected => ", err);
    }
})();


//? Task 5

const promise5 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promise5 is rejected!");
        }, 2000);
    })
};


; (async () => {
    try {
        let res = await promise5();
        console.log("Resolved => ", res);
    } catch (error) {
        console.log("Rejected => ", error);
    }
})();





//! Activity 4 => Fetching Data from an API

console.log("\n Fetching Data from an API \n");


//? Task 6

const promise6 = new Promise((res, rej) => {
    fetch("https://api.github.com/users/Tanish-Varde")
        .then((response) => response.json())
        .then((data) => res(data))
        .catch((err) => rej(err));
});

promise6
    .then((data) => console.log("Data1 => ", data.login))
    .catch((err) => console.error("Error => ", err));


//? Task 7

const asyncAwait = async () => {
    try {
        let response = await fetch("https://api.github.com/users/Tanish-Varde");
        let data = await response.json();
        console.log("Data2 => ", data.login);
    } catch (error) {
        console.log("Error => ", error);
    }
};

asyncAwait();





//! Activity 5 => Concurrent Promises

console.log("\n Concurrent Promises \n");


//? Task 8


let p1 = Promise.reject(3);
let p2 = Promise.resolve("Request Passed");
let p3 = new Promise((res, rej) => {
    setTimeout(res, 100, "foo");
});

Promise.all([p1, p2, p3])
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.error("Error => ", error);
    });



//? Task 9


const promise7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise7 is resolved!");
    }, 500)
});

const promise8 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise8 is rejected!");
    }, 100)
});


Promise.race([promise7, promise8])
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.error("Error3 => ", error);
    });