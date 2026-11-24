console.log("js testing");
var x=10;
var x=20;//redeclaration
console.log(x);


let a=30;
a=50;//reassign


const b=40;
console.log(b);

//let-->block of scope

let c=22
{
    let c=30
}
console.log(c);

let obj={
    name:"test",
    age:40
}
let obj2=obj
obj2.age=33
console.log(obj.age);
console.log(obj.name);

console.log(5=='5');  //true
console.log(5==='5');   //false


function add(a,b){
	return a+b;
}
console.log(add(99,1))

function sub(a,b){
    return a-b;
}
function mul(a,b){  
    return a*b;
}

//arrow function
const add2=(a,b,c)=>{
    return a+b+c; 
}
console.log(add2(9,1,1))


let arr=[11,'new',0,true]
console.log(arr);


const cal=(a, b,callback)=>{
    return callback(a, b);
}
console.log(cal(9,9,add));
console.log(cal(9,9,sub));
console.log(cal(9,9,mul));


let arr2=[1,2,3,4,5]
const reduceArr=arr2.reduce((total,n)=>{
    return total+n
},0)                                                                                 

const doubleNumbers=(num)=>num*2
const doubleArr=arr2.map(doubleNumbers)
console.log(doubleArr);

const evenNumbers=(num)=>num%2==0
const evenArr=arr2.filter(evenNumbers)
console.log(evenArr);


let marks=[
    {name:'A',age:30,marks:90},
    {name:'B',age:20,marks:80},
    {name:'C',age:10,marks:70},
    {name:'D',age:40,marks:60}
]
const nameList=marks.map((student)=>student.name)
console.log(nameList)   

const failedStudents=marks.filter((student)=>student.marks<70)
console.log(failedStudents)  



	let name="prabhu"
	let mark=60
	console.log(`my name is ${name} and my mark is ${mark}`)