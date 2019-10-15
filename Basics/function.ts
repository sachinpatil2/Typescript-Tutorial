function areYouHuman(answer: boolean = true){
    if(answer)
        console.log("answer is true");
    else
        console.log("answer is false");
}
areYouHuman();  // this is by default true
areYouHuman(false); //  parameter is passed as false..so answer is false.   

function getNumbers(...nums : Number[]){
    nums.forEach(element => {
        console.log("Number:    "+element); 
    });
}
getNumbers(1,2,3,4,5);

// anonymous functions and lambda functions
let fullNames = function(fname: string="sachin", lname:string="patil"){
    console.log("First Name:"+fname+"   last Name:"+lname);
}
fullNames("Kiran","Patil");

//arrow functions or lambda functions
let arrowfn = (fname: string="sachin", lname:string="patil") => {
    console.log("First Name:"+fname+"   last Name:"+lname);
}
arrowfn("Vasudha","Patil");