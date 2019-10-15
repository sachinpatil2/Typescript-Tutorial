"use strict";
exports.__esModule = true;
function greeter(person) {
    return "Hello, " + person;
}
var user1 = "Sachin Patil";
var str = 'SachinString';
console.log(str);
console.log("from greeter1 function:" + greeter(user1));
function greeterSecond(person) {
    return "Hello   " + person.firstName + "" + person.lastName;
}
var user2 = { firstName: "Sachin", lastName: "Patil" };
console.error("This is Error...");
console.log("from greeter2 function:" + greeterSecond(user2));
var language;
(function (language) {
    language[language["Hindi"] = 0] = "Hindi";
    language[language["English"] = 1] = "English";
    language[language["Tamil"] = 2] = "Tamil";
})(language || (language = {}));
exports.language = language;
console.log("Hello Typescript..." + JSON.stringify(language));
