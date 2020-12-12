const delphineAverageScore = (96 + 108 + 89) / 3;
const koalasAverageScore = (88 + 91 + 110) / 3;
console.log(delphineAverageScore, koalasAverageScore);
if (delphineAverageScore > koalasAverageScore && delphineAverageScore > 100)
    console.log('The team winner is Delphine with ths score' + delphineAverageScore);
else if (delphineAverageScore < koalasAverageScore && koalasAverageScore > 100)
    console.log('The team winner is Koalas with the score' + koalasAverageScore);
else if (delphineAverageScore === koalasAverageScore && delphineAverageScore > 100)
    console.log(`Both teams are winners with the same score ${delphineAverageScore}`);
else console.log('Both teams are 