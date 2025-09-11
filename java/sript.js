function header_one() {
    document.getElementById("header_one").style.width = "200px";
    document.getElementById("ul_one").style.flexDirection = "column";
    // document.getElementById("ul_one").style.display="flex";

}

function header_one_remove() {
    document.getElementById("header_one").style.width = "100%";
    document.getElementById("ul_one").style.flexDirection = "row";
}

function header_one_clear() {
    document.getElementById("header_one").style.width = "0";

}


// let winingNumber = 19;
// let guessNumber = +prompt("Guess your number");

// if (winingNumber === guessNumber) {
//     console.log("You are win!!!");
// } else {
//     if (winingNumber < guessNumber) {
//         console.log("You are too high!!");
//         console.log("You are too low!!!");
//     }
// }


let marks = 93;
let grade;

if (marks >= 90 && marks <= 100) {
    console.log("A");
} else if (marks <= 89 && marks >= 80) {
    console.log("B")
}
else if (marks <= 79 && marks >= 70) {
    console.log("C")
}
else if (marks <= 70 && marks >= 60) {
    console.log("D")
}
else if (marks <= 60 && marks >= 50) {
    console.log("E")
}
else if (marks <= 49 && marks >= 34) {
    console.log("F*")
}

else if (marks >= 0 && marks <= 33) {
    console.log("FAIL")
}
else {
    console.log("velid number")
}