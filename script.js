for (i = 0; i < 5; i++) {
    console.log("javaScript");
}

for (j = 1; j <= 5; j++) {
    console.log("j =", j)
}

// calculate 1 to 5 

let sum = 0;
let n = 11;

for (i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log("1 to n sum value = ", sum);
console.log(typeof sum);

console.log("loop is ended");

// while loop

let p = 1;
while (p <= 5) {
    console.log("p =", p);
    p++;
}

let k = 1;
while (k <= 5) {
    console.log("k =", k);
    k++;
}

// do while loop
let o = 1;
do {
    console.log("Myname");
    o++;
} while (o <= 10);

let l = 1;

do {
    console.log("l =", l);
    l++;
} while (l <= 5);

// for-of loop & for-in loop

// for-of loop

let name = "Transcodezy IT Soultion PVT. LTD.";
let u = 0;
for (let compunayName of name) {
    console.log("compunayName = ", compunayName);
    u++;
}
console.log("namelength =", u);

// for-in loop

let student = {
    Fname: "pritesh",
    sarName: "lakkad",
    age: 20,
    isPass: true
};

for (let key in student) {
    console.log("key =", key, "value =", student[key]);
    console.log(key, "=", student[key]);
}

// prectish que - 1
// odd num print in 1 to 100
// even num print in 1 to 100

for (let m = 1; m <= 100; m++) {
    if (m % 2 === 0) {
        console.log("m =", m);
    } else { }
}

// prectish que - 2

// let gameNum = 25;
// let userGuess = prompt("guess the game number : ");

// while (userGuess != gameNum) {
//     userGuess = prompt("uess the game number ,try again : ");
// }

// console.log(gameNum ,"you are win this game");
// document.getElementById("demo").innerHTML ="25 ,you are win this game";

// String

let str = "transcode";
let str2 = 'TRANSCODE';

console.log(str2[1]); //lindex check 

//templet leterals

let obj = {
    firstname: "Vraj",
    age_main: 20
};

// let sentence = "my name is " + obj.firstname + " nd my age is " + obj.age_main;
let sentence = `my name is ${obj.firstname} & my age ${obj.age_main}`
console.log(sentence);



let othreName= "vraj amipara";
let size = 0;

for (let number_1 of othreName) {
    console.log ("othreName =", number_1);
    size++;
}

console.log("size =",size);


// Object print

// let obj_one = {
//     othreName: "vraj",
//     age:20,
//     isPass : true
// };

// for (let value in obj_one) {
//     console.log("obj_one.name =", obj_one[value]);
//     console.log("obj_one.age =", obj_one[value]);
//     console.log("obj_one.isPass =", obj_one[value]);
// }

let obj_one = {
    othreName: "eef",
    size: 0
};

for (let number_1 in obj_one) {
    console.log("othreName =", obj_one[number_1]);
}