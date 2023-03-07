function findGrade(score) {
    if (score >= 80) {
        return 'A';
    } else if (score >= 60) {
        return 'B';
    } else if (score >= 50) {
        return 'C';
    } else if (score >= 40) {
        return 'D';
    } else {
        return 'F';
    }
}

let yourScore = 85;
let tomScore = 66;
let janeScore = 95;
let peterScore = 56;
let johnScore = 40;

console.log(`Your grade is: ${findGrade(yourScore)}`);
console.log(`Tom's grade is: ${findGrade(tomScore)}`);
console.log(`Jane's grade is: ${findGrade(janeScore)}`);
console.log(`Peter's grade is: ${findGrade(peterScore)}`);
console.log(`John's grade is: ${findGrade(johnScore)}`);

