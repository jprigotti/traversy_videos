// let, const



// Strink, number, boolean, null, undefined
const name = 'John';
const age = 30;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
let z;

console.log(typeof x);


//Concatenation
console.log('My name is ' + name + 'and I am ' + age);
//Template string
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

const s = 'Hello to my World';

let sl = s.length;
console.log('The leng of the string is ' + sl);
console.log('The string in upper case ' + s.toUpperCase());

//Working with Substrings

console.log ('Taking the first 5 characters ' + s.substring(0,8));

//Split a sting into a array
console.log(s.split(''));
//It may not look useful, but in a string like this, it will!
let s_tag = 'html, java, ccs'
console.log(s_tag.split(', '));

// Working with Arrays
//Arrays are variables that hold multiple values

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);
console.log(fruits[0]);
fruits.push('strawberries');
console.log(fruits);
fruits.unshift('grapes');
console.log(fruits);

//Use this line to check if something is an Array
console.log(Array.isArray(fruits));

//Looking for index
console.log('The index of apples is ' + fruits.indexOf('apples'));

//Object Literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA',
    }
}

const {firstName, lastName, address: { city }} = person;
console.log(firstName);

//adding properties as well

person.email = 'john.doe@gmail.com'
console.log(person);

//Objects

const todos = [
    {
        id:1,
        text:'Study HTML',
        isCompleted: true
    },
    {
        id:2,
        text:'Understand CSS',
        isCompleted: true
    },
    {
        id:3,
        text:'Start learning JavaScript',
        isCompleted: false
    }
];

//To print out a specific entry
console.log(todos[0].isCompleted);

//Lets convert this Object into Json in case we need to send it to an API

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//LOOPS

//FOR LOOPS
for (let i = 0; i < 10; i++){
    console.log('The count is : ' + i);
}


let i = 0;
while (i<10){
    console.log('The count is : ' + i);
    i++;
}

/*
//Array Loop
for (let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

//Or you can achive the same using this code
for (let to_do of todos){
    console.log(to_do.text);
}

//forEach, map, filter
todos.forEach(function(to_do){
console.log(to_do.text);
});

const todoText = todos.map(function(to_do){
    return to_do.text;
});
console.log(todoText);


const todoCompleted = todos.filter (function(todo){
    return todo.isCompleted ===true;
});

console.log(todoCompleted);

*/
//We can even combine map with filter to achive something like this
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompleted);

/* Simple condition */
const x1 = 9;

if (x1===10){
    console.log('x is 10');
    }else if(x1 > 10){
        console.log('x is greater than 10');
    }else{
        console.log('x is less than 10');
    }

/* Multiple condition */
const x2 =6;
const y2 = 11;

if (x2 > 5 && y2 > 10){
    console.log('x is more than 5 and y is more than 10');
}

/* The Ternary Operator */
const x3 = 11;
 const color = x3 > 10 ? 'red' : 'blue';
 console.log(color);


 /* Switches */

 switch (color){
    case 'red' :
        console.log ('color is red');
        break;
    case 'blue':
        console.log ('color is blue');
        break;
    default:
        console.log ('colos it neither red nor blue');
        break;
     }

/* Functions */

function addNums (num1=1, num2=1){
    console.log(num1+num2);
}

addNums (4,6);

/* if we call the funtion and passed no values, it will return NaN "not a number"
so, we can define the function with num1=1, num2=1, so if we passed no number
it will use 1, but if we do pass a number, it will work as expected.
*/

/* usually we use return in the functions */

function addNums1 (num1=1, num2=1){
    return num1+num2;
}

console.log(addNums1(5,7));

/* Arrow functions 
They are very handy and clean things up quite a bit */

const addNums2 = (num1 =1, num2 =1) => {
    return num1 + num2;
}
console.log(addNums2(5,5));

/* If it is only one line, it can be summarized as follows
const addNums2 = (num3 =1, num4 =1) => num3 + num4;
*/

/* We can also use the Arrow Functions in Objects */
todos.forEach((todo)=>console.log(todo));


/* Constructor function */
function Person (firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

const person1 = new Person ('John', 'Doe', '4-3-1980');
const person2= new Person ('Mary', 'Smith', '5-3-1990');

console.log(person);
console.log(person2.firstName);


function showtime(){
    var now = new Date();
    alert(now.getHours)
}