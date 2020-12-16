const measureCyrine = function () {
  const measure = {
    type: 'temp',
    uni: 'cels',
    //Fix the bug by adding the Number function to be able to sum the input value with 3
    value: Number(prompt('Give me your temp degree:')),
  };
  console.table(measure); // to find the bug by displaying the result
  const areYouInLove = measure.value + 3;
  const isItNormal = 37.5 - measure.value;
  return [isItNormal, areYouInLove];
};
console.log(measureCyrine()); // Identify
