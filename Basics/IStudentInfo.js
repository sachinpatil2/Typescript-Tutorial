"use strict";
exports.__esModule = true;
var student = {
    Name: "Sachin Patil",
    Age: 36
};
var studentinsert = {
    Name: "Kiran Patil",
    Age: 36
};
console.log("Student: " + JSON.stringify(student));
var studentList = [];
//  after push
studentList.push(studentinsert);
studentList.push(student);
console.log(studentList);
