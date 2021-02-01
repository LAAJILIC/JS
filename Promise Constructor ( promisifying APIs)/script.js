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

/// Promises constructor
const moneyPromise = new Promise(function (resolve, reject) {
  console.log('Money draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win :)');
    } else {
      reject(new Error('You lost :/'));
    }
  }, 2000);
});
moneyPromise.then(res => console.log(res)).catch(err => console.error(err));

//// Promisifying setTimeout

const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

wait(4).then(() => {
  console.log('Wait 4 seconds');
});

Promise.reject(new Error('Problem')).catch(x => console.error(x));

//// Promisifying the Geolocation API

const getPos = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPos().then(pos => console.log(pos));

const whereAmI = function () {
  getPos()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Retype coordinates ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(` You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Retype coordinates ${response.status}`);
      return response.json();
    })
    .then(data => getCountry(data[0]))
    .catch(err => console.error(`${err.message}. Try again!`));
};
btn.addEventListener('click', whereAmI);
