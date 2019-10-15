"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(fname, lname) {
        if (fname === void 0) { fname = "Sachin"; }
        if (lname === void 0) { lname = "Patil"; }
        this.fname = fname;
        this.lname = lname;
        // console.log("inside the constructor:"+fname+lname);
    }
    Student.prototype.getFullName = function () {
        return this.fname + " " + this.lname;
    };
    return Student;
}());
var studentOb = new Student();
exports.studentOb = studentOb;
console.log(studentOb);
console.log(studentOb.getFullName());
//  working with generics
console.log("=========working with generics=============");
var studentListG = [{
        Name: "Kiran Patil",
        Age: 36
    }];
function getStudentListGenerics(students) {
    //console.log(students);
    students.forEach(function (element) {
        console.log(element);
    });
}
getStudentListGenerics(studentListG);
