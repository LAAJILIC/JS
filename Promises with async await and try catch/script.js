'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

// Promises with Async/Await and try..catch

const getPos = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI2 = async function () {
  try {
    const pos = await getPos();

    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    const data = await res.json();
    getCountry(data[0]);
    return `You are in ${dataGeo.city} , ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err}`);
  }
};

console.log('First : request location');
// whereAmI2()
//   .then(res => console.log(res))
//   .finally(() => console.log('Finally : well getting location'));

(async function () {
  try {
    const res = await whereAmI2();
    console.log(`${res}`);
  } catch (err) {
    console.error(`${err}`);
  }
  console.log('Finally : well getting location');
})();
