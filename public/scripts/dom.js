const input = document.getElementById('search__country');
const submitBtn = document.getElementById('country__form');
const countryInfoContainer = document.querySelector('.country__info');
const countryList = document.querySelector('.country__list');
const countriesNameUrl = '/countries';
let countriesInfoUrl;


const insertedCountry = (e) => {
  apiFunction(countriesNameUrl, (res) => {
    while (countryList.firstChild) countryList.removeChild(countryList.firstChild);
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
    while (countryInfoContainer.firstChild) countryInfoContainer
      .removeChild(countryInfoContainer.firstChild);
    const countryFlag = document.createElement('img');
    countryFlag.src = res[0].flag;
    countryFlag.setAttribute('class', 'flag');

    const nameContainer = document.createElement('div');
    const name = document.createElement('span');
    const countryName = document.createElement('span');
    nameContainer.appendChild(name);
    nameContainer.appendChild(countryName);
    name.textContent = 'Country Name: ';
    nameContainer.textContent += res[0].name;
    nameContainer.setAttribute('class', 'country-name');

    const capitalContainer = document.createElement('div');
    const capital = document.createElement('span');
    const CountryCapital = document.createElement('span');
    capitalContainer.appendChild(capital);
    capitalContainer.appendChild(CountryCapital);
    capital.textContent = 'Capital: ';
    capitalContainer.textContent += res[0].capital;
    capitalContainer.setAttribute('class', 'capital');

    const currencyContainer = document.createElement('div');
    const currency = document.createElement('span');
    const CountryCurrency = document.createElement('span');
    currencyContainer.appendChild(currency);
    currencyContainer.appendChild(CountryCurrency);
    currency.textContent = 'Currency: ';
    CountryCurrency.textContent += res[0].currencies[0].name;
    currencyContainer.setAttribute('class', 'currency');

    const languageContainer = document.createElement('div');
    const language = document.createElement('span');
    const CountryLanguage = document.createElement('span');
    languageContainer.appendChild(language);
    languageContainer.appendChild(CountryLanguage);
    language.textContent = 'Language: ';
    CountryLanguage.textContent += res[0].languages[0].name;
    languageContainer.setAttribute('class', 'language');


    const populationContainer = document.createElement('div');
    const population = document.createElement('span');
    const CountryPopulation = document.createElement('span');
    populationContainer.appendChild(population, CountryPopulation);
    populationContainer.appendChild(CountryPopulation);
    population.textContent = 'Population: ';
    CountryPopulation.textContent += res[0].population;
    populationContainer.setAttribute('class', 'population');

    countryInfoContainer.appendChild(countryFlag);
    countryInfoContainer.appendChild(nameContainer);
    countryInfoContainer.appendChild(capitalContainer);
    countryInfoContainer.appendChild(currencyContainer);
    countryInfoContainer.appendChild(languageContainer);
    countryInfoContainer.appendChild(populationContainer);
  });
};

input.addEventListener('input', (e) => {
  insertedCountry(e);
});

submitBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  countryInfo(e);
});
