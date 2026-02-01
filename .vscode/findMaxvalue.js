// function highestScore(scores){
   
//     for(let i=1;i<scores.length;i++){

//          let max=scores[0];
//            if(max<scores[i]){
//               max=scores[i];
//            }
//     }

//     return max;
      
// }

// let scores=[12,4,23,11];
// let res=highestScore(scores);
// console.log(res);


function highestScore(scores) {
    let max = scores[0];

    for (let score of scores) {
        if (score > max) {
            max = score;
        }
    }

    return max;
}

let scores = [21, 28, 1, 88, 15];
console.log(highestScore(scores));
