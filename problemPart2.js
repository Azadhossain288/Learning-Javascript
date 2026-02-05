//Give two number and find max value within number?

function maxValue(num1,num2){
     if(num1<num2){
          return num2;
     }
     return num1;
}

// find minimum value within this number?

function minValue(num1,num2){
      if(num1<num2){
         return num1;
      }

      return num2;
}

let res1=maxValue(10,5);
console.log(res1);

let res2=minValue(10,5);
console.log(res2);


// Given 3 numbers ,find max and min value?

function maxValueOfThreeNumber(num1,num2,num3){

      if(num1>num2 && num1>num3){
          return num1;
      }else if(num2>num1 && num2>num3){
          return num2;
      }else{

           return num3;
      }

           
}


let result=maxValueOfThreeNumber(5,15,10);
console.log(result);


/// Shortcut technique

const max=Math.max(12,1,56,5,65,8,1,99,2);
console.log(max);


const min=Math.min(12,1,56,5,65,8,1,99,2);
console.log(min);


/// Find max and min value using loop

const heights= [65,66,68,72,78,60];


 function getMax(numbers){

    

        //using for of loop

        let mx=numbers[0];
     for(const num of numbers){
          
           if(mx<num){
              mx=num;
           }

          
     }

     return mx;


    
     

     /*
     
     let mx=numbers[0];
    for(let i=1;i<numbers.length;i++){
          
        
          if(mx<numbers[i]){
               mx=numbers[i];
          }

       
    }

    return mx;

    */

 }

 let mxValue=getMax(heights);

 console.log(mxValue);





 // find minimum value using loop 

 
 function getMin(numbers){

    

        //using for of loop

        let mn=numbers[0];
     for(const num of numbers){
          
           if(mn>num){
              mn=num;
           }

          
     }

     return mn;


    
     

     /*
     
     let mn=numbers[0];
    for(let i=1;i<numbers.length;i++){
          
        
          if(mn>numbers[i]){
               mn=numbers[i];
          }

       
    }

    return mn;

    */

 }

 let mnValue=getMin(heights);

 console.log(mnValue);



 /*

    If shirt price=500TK,pant price=600TK,shoe price=900TK,find total cost of 2shirt,3pant and 1show?
    
    
 */


function totalShopingPrice(shirtQuantity,pantQuntity,shoeQuantity){

   let shirtPrice=500;
   let pantPrice=600;
   let showPrice=900;

   let totalShirtPrice=shirtPrice*shirtQuantity;
   let totalPantPrice=pantPrice*pantQuntity;
   let totalShowPrice=showPrice*shoeQuantity;

   let total=totalShirtPrice+totalPantPrice+totalShowPrice;


   return total;


}

let answer=totalShopingPrice(2,3,1);

console.log(answer);




const mobiles=[

    {name:'Samsung',price:20000,camera:'24mp',color:'black'},
    {name:'Realme',price:25000,camera:'34mp',color:'black'},
    {name:'Redmi',price:30000,camera:'48mp',color:'black'},
    {name:'Iphone',price:100000,camera:'56mp',color:'black'},
    {name:'Oppo',price:22000,camera:'32mp',color:'black'}




];


// find minimum price of mobiles

function getPhones(phones){
   //   console.log(phones);
   let min=phones[0];
   for(const phone of phones){
      //   console.log(phone);
      if(phone.price<min.price){
            min=phone;
      }

   }

   return min;


}

let resultPhone=getPhones(mobiles);
console.log(resultPhone);




// find max price



function getPhonesMax(phones){
   //   console.log(phones);
   let max=phones[0];
   for(const phone of phones){
      //   console.log(phone);
      if(phone.price>max.price){
            max=phone;
      }

   }

   return max;


}

let resultPhoneMax=getPhonesMax(mobiles);
console.log(resultPhoneMax);





// fine sum and total product cost

const products=[

     {name:'shampu',price:200,quantity:2},
     {name:'chiruni',price:100,quantity:3},
     {name:'shirt',price:700,quantity:5},
     {name:'pant',price:1200,quantity:1}


]

function getShopingTool(shops){

      let sum=0;
      for(const shop of shops){
            // console.log(shop);
            //  sum=sum+shop.price;

            const thisProductCost=shop.price*shop.quantity;
            sum=sum+thisProductCost;

      }

      return sum;

}

let resultShop=getShopingTool(products);
// console.log('Total sum: ' +resultShop);
console.log('Total productCost is: '+resultShop);




/*

  first100 product ->you have to give 100tk
  101to200 product ->you have to give 90tk
  above 200product ->you have to give 70tk 




*/






