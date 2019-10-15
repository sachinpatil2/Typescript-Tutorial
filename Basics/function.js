function areYouHuman(answer) {
    if (answer === void 0) { answer = true; }
    if (answer)
        console.log("answer is true");
    else
        console.log("answer is false");
}
areYouHuman(); // this is by default true
areYouHuman(false); //  parameter is passed as false..so answer is false.   
function getNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (element) {
        console.log("Number:    " + element);
    });
}
getNumbers(1, 2, 3, 4, 5);
// anonymous functions and lambda functions
var fullNames = function (fname, lname) {
    if (fname === void 0) { fname = "sachin"; }
    if (lname === void 0) { lname = "patil"; }
    console.log("First Name:" + fname + "   last Name:" + lname);
};
fullNames("Kiran", "Patil");
//arrow functions or lambda functions
var arrowfn = function (fname, lname) {
    if (fname === void 0) { fname = "sachin"; }
    if (lname === void 0) { lname = "patil"; }
    console.log("First Name:" + fname + "   last Name:" + lname);
};
arrowfn("Vasudha", "Patil");
