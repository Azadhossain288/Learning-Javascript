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

//Declare array
let num=new Array();
for(let i=0;i<5;i++){
    //  num[i]=parseInt(prompt('Enter a number: '));

     document.write(num[i]);
}

document.write('<br>');

//shift->Removine first element of an array

let userName=['Machine Learning','Web development','Software Engineering'];
document.write(userName + '<br>');

userName.shift();
 document.write(userName+ '<br>');

 //unshift->Adding first element of an array

 userName.unshift('Data Scientist');
 document.write(userName + '<br>');


 // splice() method -> splice(indexNumber,NoOfRemoveElement or for replcing,addingElement);

 let teacherNames=['Rafi','Limon','Sakib'];

  document.write(teacherNames + '<br>');

//  teacherNames.splice(2, 1, 'Jakaria','Najrul','Mahdi','Mahfuj');
// document.write(teacherNames + '<br>');

// Removing elements of index

// teacherNames.splice(3,4);
// document.write(teacherNames);



// slice ->removing element using slice but after if i print main array then it was unchanged.

 let newArry= teacherNames.slice(1);
 document.write(newArry + '<br>');

 document.write(teacherNames + '<br>');


 // sort->sorting element ,type:ascending,descending,onle works with alphabet but not works numbers
 // For numberSort -> if difference is positive so,in front of this value  ,if negetive,unchanged,or 0 ->unchanged

 let sortedName=teacherNames.sort();
 document.write('Sorted Name: '  +sortedName + '<br>');

 let numbers=[20,5,25,45,1];
//  let sortNumbers=numbers.sort(); //it`s not possible because it can see unsorted

//Ascending Order
 numbers.sort(function(a,b){

        return a-b;
 });

document.write('Sorted Number: ' +numbers + '<br>');
 //Descending Order
 numbers.sort(function(a,b){

        return b-a;
 });


document.write('Sorted Number: ' +numbers + '<br>');


// 1D Array

// Find max score

function highestScor(scores){
     
       // document.write(scores);

       // console.log(scores);

       let max=scores[0];
       for(let i=1;i<scores.length;i++){
                if(max<scores[i]){
                      max=scores[i];
                }
       }

       return max;
     
}

let scores=[21,28,1,88,15];
let res=highestScor(scores);
document.write(res);
// console.log(res);





 


 



