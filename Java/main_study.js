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


