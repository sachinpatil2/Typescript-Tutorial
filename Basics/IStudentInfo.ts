interface StudentInfo {
    Name    : string,
    Age : number
}

let student : StudentInfo = {
    Name    : "Sachin Patil",
    Age : 36

};
let studentinsert : StudentInfo = {
    Name    : "Kiran Patil",
    Age : 36

};
console.log("Student: "+JSON.stringify(student));
let studentList = [];
//  after push
studentList.push(studentinsert);
studentList.push(student);
console.log(studentList);
export { StudentInfo as Student};
