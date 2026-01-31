let num=5;
let result=num*num;
document.write("Result = " +result+ "<br>");


 num=6;
 result=num*num;
 document.write("Result= "+result+"<br>");


 num=6;
 result=num*num;
 document.write("Result= "+result+"<br>");

/*
   Declare in funtion

   function function_name(parameter){
   
        main body

   }

   calling function:

   function_name(argument);


*/




function square(num){
  
  let result=num*num;
  document.write("Result = " +result+ "<br>");
       
}

square(2);
square(4);


//Addition//

function addition(num1,num2){

       let add=num1+num2;
       document.write('Addition of two values: '+add + "<br>");

}

addition(6,6);


//using return

function additionReturn(num1,num2){

       let add=num1+num2;
       return add;

}

let res=additionReturn(3,4);
document.write("Addition of two values: "+res +"<br>");



// IIFEs(Immediately Invokeable Function Expressions) ,dont need calling outside of function

(function display(){

    document.write("hello");
})();

// display();

//Summation of two values
(function sum(num1,num2){
    let summation=num1+num2;
    document.write("Addition is : " +summation);
})(5,6);


document.write('<br>');
// Function Expressions ->function put in a variable

const display2=function displayMessege(){

    document.write('Hi i am Azad Hossain');
}

display2();


document.write('<br>');
let display3=function displayMessege(msg){

    document.write(msg);
}

display3('I want to be a full stack web developer');




