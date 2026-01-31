/*

const cars=["Saab","Volvo","BMW"];
console.log(cars);

const cs=new Array("Sb","Vovo","BMW");
console.log(cs);

let car=cars[0];
let ce=cs[1];

cars[0]="mama";
cs[1]="busra";

console.log(car);
console.log(ce);

console.log(cars);
console.log(cs);

///converting an array to a string

const fruits=["Banana","Orange","Apple","Mango"];
console.log(fruits);

console.log(fruits.toString());


///using objects

const person = {firstName:"John", lastName:"Doe", age:46};


*/


let name1,name2,name3,name4,name5;
name1='Azad';
name2='Asif';
name3='Monjurul';
name4='Abdur Rahman';

document.write(name1+ '<br>');
document.write(name2 + '<br>');
document.write(name3 + '<br>');
document.write(name4 + '<br>');

let names=['Azad','Asif','Monjurul','Abdur Rahman'];

document.write(names + '<br>');

// Using push

names.push('Khaled');
document.write(names+ '<br>');

// Using pop
names.pop('Khaled');
document.write(names + '<br>');

document.write(names.length +'<br>');

let cnt1=['Bangladesh','Pakistan'];
let cnt2=[' Srilanka','Afganistan'];

let total=cnt1+cnt2;

document.write(total + '<br>');

let country=cnt1.concat(cnt2);
document.write(country + '<br>');


