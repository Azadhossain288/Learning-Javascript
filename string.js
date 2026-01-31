const subject='Chemistry';
const book='chemistry';

console.log(subject);
console.log(subject.toLowerCase());

console.log(book.toLowerCase());

console.log(subject.toUpperCase());

if(subject.toLowerCase() === book.toLowerCase()){
      console.log('I am reading book');
}else{

     console.log('I am not reading book');
}


///Using (trim) remove space problem

const drink='water ';
const liquid='water';

if(drink.trim===liquid.trim){
      console.log("Water is called life");
}else{


    console.log("Water is not called life");
}



///Using slice() for substring

const address='Students';
const part=address.slice(2,5);
console.log(part);

///Using split() for devide

const sentence='I am a good and hardworking person';
console.log(sentence.split(' '));

console.log(sentence.split('a'));

const friends='Rahim,karim,Mumin';
const friend=friends.split(',');

console.log(friends);
console.log(friend);


///Using join
const realFriend=['Abdur Rahman','Khaled'];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('*'));
console.log(realFriend.join('-'));


///Using concat

const first='Azad';
const last='Hossain';

console.log(first+' '+last);
const fullName=first.concat(last);
const fullNam=first.concat(' ').concat(last);
console.log(fullName);
console.log(fullNam);


///Using includes -> return true or false

console.log(last.includes('d'));
console.log(last.includes('s'));
console.log(first.includes('a'));


///Reverse


const sentences="I am  a web developer";

///reverse of sentences: repoleved bew a ma i

//using for of loop

//web
//w
//ew
//bew

let reverse='';
for(const letter of sentences){

    // console.log(letter);
    reverse=letter+reverse;
    
}

console.log(reverse);


let rev='';
for(let i=0;i<sentences.length;i++){

    //    console.log(i);
       console.log(sentences[i]);
       rev=sentences[i]+rev;

}

console.log(rev);


///shortcut technique using split,join

const reversed =sentences.split('');
 console.log(reversed);

let rever =sentences.split('').reverse();
console.log(rever);

let joinReverse=sentences.split('').reverse().join();
console.log(joinReverse);

let finalReverse=sentences.split('').reverse().join('');
console.log(finalReverse);








