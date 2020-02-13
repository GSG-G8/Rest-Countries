const input = document.getElementById('search__country');
const submitBtn = document.getElementById('country__form');
const countryInfoContainer = document.querySelector('.country__info');
const countryList = document.querySelector('.country__list');
const countriesNameUrl = '/countries';
let countriesInfoUrl;

const insertedCountry = (e) => {
  apiFunction(countriesNameUrl, (res) => {
    while (countryList.firstChild) {
      countryList.removeChild(countryList.firstChild);
    }
    let filteredCountries = filterByName(res.names, e.target.value);
    if (input.value === '') filteredCountries = [];
    filteredCountries.forEach((element) => {
      const option = document.createElement('div');
      option.setAttribute('class', 'option');
      option.textContent = element;
      countryList.appendChild(option);
      option.addEventListener('click', (event) => {
        input.value = event.target.textContent;
        while (countryList.firstChild) countryList.removeChild(countryList.firstChild);
        countriesInfoUrl = `https://restcountries.eu/rest/v2/name/${input.value}`;
      });
    });
  });
};

const countryInfo = () => {
  apiFunction(countriesInfoUrl, (res) => {
    while (countryInfoContainer.firstChild) {
      countryInfoContainer
        .removeChild(countryInfoContainer.firstChild);
    }
    const result = {
      'country name': res[0].name, Capital: res[0].capital, currencies: res[0].currencies[0].name, population: res[0].population, languages: res[0].languages[0].name,
    };

    const countryFlag = document.createElement('img');
    countryFlag.src = res[0].flag;
    countryFlag.setAttribute('class', 'flag');
    countryInfoContainer.appendChild(countryFlag);

    for (let i = 0; i < 5;) {
      const Container = document.createElement('div');
      Container.textContent = `${Object.keys(result)[i]} : ${Object.values(result)[i]}`;
      Container.setAttribute('class', 'country-name');
      countryInfoContainer.appendChild(Container);
      i += 1;
    }
  });
};

input.addEventListener('input', (e) => {
  insertedCountry(e);
});

submitBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  countryInfo(e);
});
