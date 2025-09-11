// console.log("hello world"); ---single line comment
/* console.log("hello
world"); ---multi line comment*/

let a = 4;
let b = 12;

console.log("a = ", a, " &  b = ", b);
console.log("a + b", a + b);
console.log("a - b", a - b);
console.log("a * b", a * b);
console.log("b / a", b / a);

console.log("a % b", a % b)
console.log("a ** b", a ** b) //4*4*4*4*4*4*4*4*4*4*4*4 = 16777216

a++;
console.log("a = ", a);

a = a + 1;
console.log("a = ", a)

a--;
console.log("a = ", a);

a = a - 1;
console.log("a = ", a);

//asignment operator

let c = 4;
let d = 12;

c += 4;// c=c+4
console.log("c =", c);

c -= 6;// c=c-6
console.log("c = ", c);


// if

let age = 15;

if (age >= 18) {
    console.log("you can vote");
}

if (age < 18) {
    console.log("you cannot vote");
}

if (new Date().getHours() < 20) {
    document.getElementById("if_one").innerHTML = "good day";
}

// if else 

let age_1 = 30;

if (age_1 >= 18) {
    console.log("vote");
} else {
    console.log("no result");
}

// let i = 48;
// if (!(i <= 58 && i > 38 && i < 22 || i < 50 && i >= 48)) {
//     console.log("vote01");
// } else {
//     console.log("no result");
// }

let v = 267;
let w = 373;
let z = -189;

if (v <= 158 && w < 328 && z < 122 || w <= 538 && v >= 480 || z <= v && v < z && v < 186 || v <= 380 && z >= 245) {
    console.log("vote01");
}
else {
    console.log("vote02");
}


console.log(2 + 2 ** -4);

console.log(2 + 2 * 4 ** 5 / 3);


console.log(38 + 26 - 5 * 3 / 15 + 9 - 18 + 30 - 2 + 20 / 8 * 2);


console.log(78 + 32 - 100 % 4 / 2 * 4 + 24 - 5);


let age_2 = 31;

if (age_2 <= 18) {
    console.log("12th passed");
} else {
    console.log("allready 12th pass");
} if (age_2 < 30) {
    console.log("no result");
}

// odd even num 

let num = 0;

if (num % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

// if, else if 

let theme = "yellow";
let color;

if (theme === "dark") {
    color = "black";
} else if (theme === "yellow") {
    color = "light yellow";
} else {
    color = "white";
}

console.log(color)


const foo = 2;

switch (foo) {
    case 1:
        console.log(2);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log("1");
        break;
    default:
        console.log("default");
}

let score = -101000;
let grade;

if (score >= 90 && score <= 100) {
    grade = "A"
} else if (score >= 70 && score <= 89) {
    grade = "B"
} else if (score >= 69 && score <= 55) {
    grade = "C"
} else if (score >= 54 && score <= 45) {
    grade = "D"
} else if (score >= 44 && score < 33) {
    grade = "E"
} else if (score > 100) {
    grade = "no result"
} else if (score < 0) { 
    grade = "pleas number check"
}


// else{
// console.log("fail")
// }

console.log(grade);
