const input = document.getElementById('search__country');
const url = '/countries';

const result = document.querySelector('.result');
const insertedCountry = (e) => {
  apiFunction(url, (res) => {
    while (result.firstChild) result.removeChild(result.firstChild);
    let filteredCountries = filterByName(res.names, e.target.value);
    if (input.value === '') filteredCountries = [];
    filteredCountries.forEach((element) => {
      const option = document.createElement('div');
      option.setAttribute('class', 'option');
      option.textContent = element;
      result.appendChild(option);
    });
  });
};

input.addEventListener('input', (e) => {
  insertedCountry(e);
});
