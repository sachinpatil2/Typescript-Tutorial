class Student {
    private fname: string;
    private lname:string;
    
    constructor(fname:string = "Sachin", lname:string = "Patil"){
        this.fname = fname;
        this.lname = lname;
        // console.log("inside the constructor:"+fname+lname);
    }

    getFullName() : string{
        return this.fname+" "+this.lname;
    }
}
let studentOb : Student = new Student();
console.log(studentOb);
console.log(studentOb.getFullName());

//  working with generics

console.log("=========working with generics=============");
interface StudentInfo {
    Name    : string,
    Age : number
}
let studentListG : Array<StudentInfo>= [{
    Name    : "Kiran Patil",
    Age : 36
}];
function getStudentListGenerics (students:Array<StudentInfo>){
    //console.log(students);
    students.forEach(element => {
        console.log(element);
    });
}
getStudentListGenerics(studentListG);

// export {Student};
export {studentOb};

