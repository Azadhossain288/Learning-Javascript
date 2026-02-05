function add(num1,num2){
       return num1+num2;
}

function subtract(num1,num2){
       return num1-num2;
}

function multiply(num1,num2){
       return num1*num2;
}

function division(num1,num2){
       return num1/num2;
}


function calculator(a,b,operation){

    if(operation=== 'add'){
         const result= add(a,b);
         return result;
    }
    else if(operation=== 'subtract'){
         const result= subtract(a,b);
         return result;
    }

    else if(operation=== 'multiply'){
         const result= multiply(a,b);
         return result;
    }
    else if(operation=== 'division'){
         return division(a,b);
         
    }else{

        return "Only 'add','subtract','multiply','divide' operation is allowed."
    }
}


let res=calculator(5,7,'add');
console.log(res);

 res=calculator(5,7,'subtract');
console.log(res);

 res=calculator(5,7,'multiply');
console.log(res);

 res=calculator(5,7,'division');
console.log(res);

