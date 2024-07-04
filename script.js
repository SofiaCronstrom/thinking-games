////STEGE
// let goal = 1;
// let numOfThrows = 0;

// while (goal < 7){
//     let dice = Math.floor(Math.random() * 6 + 1);
//     numOfThrows++;
//     console.log(dice)
//     if (dice === goal){
//         goal++;
//         console.log('Wohoo');
//     }
// }
// console.log(`Grattis du fick stege på ${numOfThrows} kast`)


////KNOCK OUT
// let knockOutNr = 9;
// let goal = 0;
// let throwCount = 0;

// while(goal <= 50){
//     let dice1 = Math.floor(Math.random() * 6 + 1);
//     let dice2 = Math.floor(Math.random() * 6 + 1);
//     let throwSum = dice1 + dice2;
//     throwCount++;

//     console.log(dice1, dice2)

//     if(throwSum === knockOutNr){
//         goal --;
//         console.log(`You threw the ${knockOutNr}, that is -1 point`)
//     } else{
//         goal += throwSum;
//     }
//     console.log(goal)
// }
// console.log(`You threw two dice ${throwCount} times and got ${goal} points `)



////GOING TO BOSTON
// let maxNum = 0;
// for (let i = 0; i < 3; i++) {
//     let roll = Math.floor(Math.random() * 6) + 1;
//     if (roll > maxNum) {
//         maxNum = roll;
//     }
// }
// console.log(`Higest score, first round: ${maxNum}`);


// let maxNum2 = 0;
// for (let i = 0; i < 2; i++) {
//     let roll = Math.floor(Math.random() * 6) + 1;
//     if (roll > maxNum2) {
//         maxNum2 = roll;
//     }
// }
// console.log(`Higest score, second round: ${maxNum2}`);

// let finalThrow = Math.floor(Math.random() * 6) + 1;
// console.log(`Higest score, third round: ${finalThrow}`);


// let totalScore = maxNum + maxNum2 + finalThrow;
// console.log(`Good job! Total points: ${totalScore}`);


