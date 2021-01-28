'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  //console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `<article class="country">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getCountData('tunisia');
getCountData('germany');
getCountData('france');

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

const getCountNeighbour = function (country) {
  const request1 = new XMLHttpRequest();
  request1.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request1.send();
  //console.log(request.responseText);

  request1.addEventListener('load' /*data arrives*/, function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    getCountry(data);

    //AJAX call the neighbour country
    const [neighbour] = data.borders;
    if (!neighbour) return;
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      getCountry(data2, 'neighbour');
    });
  });
};

getCountNeighbour('tunisia');
const request2 = fetch('https://restcountries.eu/rest/v2/name/tunisia');
console.log(request2);
