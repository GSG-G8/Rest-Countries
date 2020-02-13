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

const showDetails = (name, apiValue) => {
  const container = document.createElement('div');
  const detailName = document.createElement('span');
  const detailValue = document.createElement('span');
  container.appendChild(detailName);
  container.appendChild(detailValue);
  detailName.textContent = `${name}: `;
  detailValue.textContent += apiValue;
  container.setAttribute('class', 'name');
  countryInfoContainer.appendChild(container);
};

const countryInfo = () => {
  apiFunction(countriesInfoUrl, (res) => {
    while (countryInfoContainer.firstChild) {
      countryInfoContainer
        .removeChild(countryInfoContainer.firstChild);
    }
    const countryFlag = document.createElement('img');
    countryFlag.src = res[0].flag;
    countryFlag.setAttribute('class', 'flag');
    countryInfoContainer.appendChild(countryFlag);

    showDetails('Country-Name', res[0].name);
    showDetails('capital', res[0].capital);
    showDetails('Currency', res[0].currencies[0].name);
    showDetails('Language', res[0].languages[0].name);
    showDetails('Population', res[0].population);
  });
};

input.addEventListener('input', (e) => {
  insertedCountry(e);
});

submitBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  countryInfo(e);
});
