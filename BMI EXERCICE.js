/* BMI exercice
TEST1
const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.95;
const johnMass = 92;
const bmiMark1 = markMass / markHeight ** 2;
//const bmiMark2 = markMass / (markHeight * markHeight);
const bmiJohn1 = johnMass / johnHeight ** 2;
//const bmiJohn2 = johnMass / (johnHeight * johnHeight);
console.log(bmiMark1, bmiJohn1);
const markHigherBmi = bmiMark1 > bmiJohn1;
console.log(markHigherBmi);  */

/*TEST2 */
const markHeight = 1.88;
const markMass = 95;
const johnHeight = 1.76;
const johnMass = 85;
//const bmiMark1 = markMass / markHeight ** 2;
const bmiMark = markMass / (markHeight * markHeight);
//const bmiJohn1 = johnMass / johnHeight ** 2;
const bmiJohn = johnMass / (johnHeight * johnHeight);
const markHigherBmi = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markHigherBmi);

/*if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI is higher than John's!`);
}
else {
    console.log(`John's BMI is higher than Mark's!`);
}
*/
if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI ${bmiMark} is higher than John's${bmiJohn}!`);
}
else {
    console.log(`John's BMI ${bmiJohn} is higher than Mark's ${bmiMark} !`);
}
