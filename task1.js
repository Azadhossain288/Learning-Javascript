//Ask for user input dynamically

const userName=prompt("Enter your name: ");
const income=parseFloat(prompt("Enter your total income: "));

 


//Ask how many expenses the user has
const numberOfExpenses=parseInt(prompt("How many expenses do you have?"));

//validate inputes to ensures they are numbers.

if(isNaN(income) || isNaN(numberOfExpenses) || income<0 || numberOfExpenses<0){

      console.log("Invalid input. Please enter valid numbers.");
}else{

    let totalExpenses=0;

    //collect expenses dynamically

    //(` `)->template string 

    for(let i=1;i<=numberOfExpenses;i++){
          let expense=parseFloat(prompt(`Enter expense ${i}: `));
           
          if(isNaN(expense) || expense<0){
                console.log(`Invalid input for expense ${i}. Setting it $0.`);
                expense=0;

          }

         totalExpenses+=expense;
          


    }

     
    // const balance=income-totalExpenses;

    // document.write(`<h2>Expense Summary</h2>`);
    // document.write(`Name: ${userName}<br>`);
    // document.write(`Total Income: ${income}<br>`);
    // document.write(`Total Expenses: ${totalExpenses}<br>`);
    // document.write(`Remaining Balance: ${balance}<br>`);
    // document.write('Total Expenses: '+totalExpenses);


    ///Tax deduction (10% of income)
    const tax=income*0.1;

    ///Net income after the tax
    const netIncome=income-tax;

    ///Calculate remaining balance
    const ReBalance=netIncome-totalExpenses;

    //Saving (20% of remaining balance)
    const savings=ReBalance*0.2;

    //Determine the finantial health status

    let finalStatus="";
    if(savings>=1000){
         finalStatus='Excellent you are saving well!';
    }else if(savings>=500){
          finalStatus='Good! You have a decent savings amount.';
    }else if(savings>=100){
          finalStatus='Needs Improvement.Consider reducing expenses.';
    }else{

        finalStatus='Critical! Your savings are too low!';
    }



    ///Check if expenses exceed income

    let overspendingMessege= '';
    if(totalExpenses>income){
          overspendingMessege='Warning: You are spending more than your income!';
    }


     const balance=income-totalExpenses;

     document.write(`<h2>Personal Budget Tracker App</h2>`);
     document.write(`Name: ${userName}<br>`);
     document.write(`Total Income: ${income}<br>`);
     document.write(`Total Expenses: ${totalExpenses}<br>`);
     document.write(`Tax Deducted(10%): ${tax}<br>`);
     document.write(`Net income after tax: ${netIncome}<br>`);
     document.write(`Remaining Balance: ${ReBalance}<br>`);
    //  document.write('Total Expenses: '+totalExpenses);

    // Document.write('Personal Budget Tracker App<br>');
    // Document.write(`User: ${userName}<br>`);
    // Document.write(`Total Income: ${income}<br>`);
    // Document.write(`Total Expense: ${totalExpenses}<br>`);
    // Document.write(`Tax Deducted(10%): ${tax}<br>`);
    // Document.write(`Net income after tax: ${netIncome}<br>`);
    // Document.write(`Remaining Balance: ${ReBalance}<br>`);
    // Document.write(finalStatus);


    
    if(overspendingMessege){
           
         console.log(overspendingMessege);

    }

 

   

}
