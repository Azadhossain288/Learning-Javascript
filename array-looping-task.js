
///Write a JavaScript code to reverse the array colors without using the reverse method.

const colors=['red', 'blue', 'green', 'yellow', 'orange'];

let sz=colors.length;

let res="";

for(let i=sz-1;i>=0;i--){
    // res+=colors[i]+" ";

     res += `'${colors[i]}'`;

     if(i!==0){
         res+=", ";
     }
}
console.log(res);


// output: 'orange', 'yellow', 'green', 'blue', 'red'



///  Use a for...of loop to concatenate all the elements of an array into a single string.

let numbers= ['Tom', 'Tim', 'Tin', 'Tik'];

let strg="";
for(let i=0;i<numbers.length;i++){
    //   strg+=numbers[i];

    //    strg+=`'${numbers[i]}'`;

    strg+=numbers[i];


}

console.log(`'${strg}'`);


// output: 'TomTimTinTik'


const statement = 'I am a hard working person';

const rev=statement.split(" ");

let reve=statement.split().reverse();


let reversestr=statement.split(" ").reverse().join(" ");




console.log(rev);
console.log(reve);

console.log(reversestr);


// Output:

// 'person working hard a am I'



// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

let a=[1,2,3];
console.log(a);

a[0]=99;
a[1]=2;
a[2]=3;

console.log(a);


const person={

   name: "Azad",
   age:23,
   isStudent:true

};

console.log(person.name);
console.log(person.age);
console.log(person.isStudent);


const obj={

      name:"John",
      marks:85
}

console.log(obj.name);
console.log(obj.marks);



/*

  Given an array of student objects, print each student’s name and marks.

[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]



*/



const students=[

   {name: "John",marks:85},
   {name: "Alice",marks:90}


];

for(let i=0;i<students.length;i++){

      const obj=students[i];
      console.log(`${obj.name} scored ${obj.marks}`);


}



const teachers=[

   {name: "Yusuf",age:35},
   {name: "Mahbub",age:30}


];

for(let i=0;i<teachers.length;i++){

    const sir=teachers[i];
    console.log(`${sir.name} scored ${sir.age}`);

}



/*

    Given a 2D array, update the value at second row first item to 99 and print the updated array.

input:

[
  [1, 2],
  [3, 4],
  [5, 6]
]
Expected Array:

[
  [1, 2],
  [99, 4],
  [5, 6]
]


*/




let matrix=[

  [1, 2],
  [3, 4],
  [5, 6]


];


matrix[1][0]=99;

for(let i=0;i<matrix.length;i++){

    for(let j=0;j<matrix[i].length;j++){

        console.log(matrix[i][j]);
    }
}





