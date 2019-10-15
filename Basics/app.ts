function greeter(person: string) {
    return "Hello, " + person;
}

var user1 = "Sachin Patil";
let str: string  = 'SachinString';
console.log(str);
console.log("from greeter1 function:"+greeter(user1));
// console.log('Sachin Patil Dhotri ');
interface Person{
    firstName: string;
    lastName: string;
}

function greeterSecond(person: Person){
  return "Hello   "+person.firstName+""+person.lastName;
}
var user2 =  { firstName:"Sachin", lastName:"Patil"};
console.error("This is Error...");
console.log("from greeter2 function:"+greeterSecond(user2));
enum language{
    Hindi,  English, Tamil
}
console.log("Hello Typescript..."+JSON.stringify(language));
export {language};
