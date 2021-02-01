'use strict';

const getCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
<img class="country__img" src="${data.flag}" />
<div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )}</p>
  <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
  <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
</div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, err = `Can't fetch`) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${err} (${response.status})`);

    return response.json();
  });
};

////Running Promises in parallel
const search4Countries = async function (c1, c2, c3, c4) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c4}`),
    ]);
    console.log(data.map(d => d[0].capital));
    // map transforms one object into other by applying a function
  } catch (err) {
    console.error(err);
  }
};
search4Countries('tunisia', 'germany', 'tanzania', 'norway');

//Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/china`),
  ]);
  console.log(res[0]);
})();

///Promise.allSettled

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.resolve('ERROR'),
  Promise.resolve('Seconc success'),
]).then(res => console.log(res));

///Promise.any

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Seconc success'),
]).then(res => console.log(res));
