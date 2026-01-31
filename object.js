///Object->Characteristics

//premitive

const age=23;
const university='Metropolitan University';
const isPassed='True';


//non-premitive
const bottle={

     brand: 'pusti',
     price: 45,
     color:'white',
     isClean: true


}

let bottleName=bottle.brand;
console.log(bottleName);

const subject={

    name:'CSE',
    teacher: 'Jhakaria',
    examDate: '30 April',
    chapter: ['First','Second','Third'],
    exams: {
         
        name:'Final Exam',
        marks:40

    }
}


const car={

    model: "BMW",
    color: 'Black',
    price: 2500000,
    accelerate:function(){

           console.log("The spreed of car is increasing!");
    }
};


const person={

    name:'Azad Hossain',
    age: 24,
    Department:'CSE',
    salary:30000,
    'fav Places': ['Sainmartin','Bandorbon','Kuakata']
}

console.log(person['fav places']);

person.salary=35000;

console.log(car);
car.accelerate();

//dot notation
console.log(car.color);
let carName=car.model;
console.log(carName);

//bracket notation

console.log(car['model']);
console.log(person['fav Places']);
console.log(person.salary);
person['salary']=40000;

console.log(person);
console.log(person['salary']);

//Within object entry another name
const propName='profession';
person[propName]='devops';
console.log(person);



const computer={

    brand:'hp',
    price:85000,
    processor:'intel',
    hdd:'512GB'

}

//Only print topic

// const keys= Object.keys(computer);
// console.log(keys);

//Only print values

const values=Object.values(computer);
console.log(values);


const college={

    name:'vnc',
    class:['10','11','12'],
    events:['science fair','16 Decembar','21 February'],
    unique:{

        color:'blue',
        result:{
          gpa:5,
          merit:'top'
            
        }

    }


}

college.unique.result.merit='top top top most';

console.log(college);
console.log(college.name);
console.log(college.unique);
console.log(college.unique.color);
console.log(college.unique.result);

console.log(college.unique.result.merit);


console.log(college);

console.log(college['unique']);
college.events[1]='Bijoy Divos';
console.log(college.events[1]);
console.log(college);
//If i want to delete class section


delete college.class;
console.log(college);



///using loop 

const mobile={

    brand:'samsung',
    price:25000,
    color:'black',
    camera:'12mp',
    isNew:true
}


/*

    //for of:array
    //for in:object

*/
//using for in loop ,prop->properties

// using for...in loop (prop = property)


for(const prop in mobile){

    console.log(prop);
    console.log(mobile[prop]);
}


const keys=Object.keys(mobile);
console.log(keys);

///using for of loop

for(const key of keys){
    console.log(key);
}