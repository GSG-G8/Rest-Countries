/* eslint-disable no-undef */
const filterByName = require('../public/scripts/logic');

const arr = ['Afghanistan',
  'Åland Islands',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia (Plurinational State of)',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil'];

test('should return Belgium', () => {
  expect(filterByName(arr, 'belgium')).toEqual(['Belgium']);
});

test('should return Argentina, Armenia, Aruba', () => {
  expect(filterByName(arr, 'ar')).toEqual(['Argentina', 'Armenia', 'Aruba']);
});

test('should return Bahamas, Bahrain', () => {
  expect(filterByName(arr, 'bah')).toEqual(['Bahamas', 'Bahrain']);
});

test('should return Angola', () => {
  expect(filterByName(arr, 'ango')).toEqual(['Angola']);
});

test('should return Angola and Anguilla', () => {
  expect(filterByName(arr, 'ang')).toEqual(['Angola', 'Anguilla']);
});

test('should return Anguilla', () => {
  expect(filterByName(arr, 'Anguilla')).toEqual(['Anguilla']);
});
