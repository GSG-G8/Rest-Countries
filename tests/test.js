/* eslint-disable no-undef */
const data = require('../public/scripts/logic');

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
  expect(data(arr, 'belgium')).toEqual(['Belgium']);
});

test('should return Argentina, Armenia, Aruba', () => {
  expect(data(arr, 'ar')).toEqual(['Argentina', 'Armenia', 'Aruba']);
});

test('should return Bahamas, Bahrain', () => {
  expect(data(arr, 'bah')).toEqual(['Bahamas', 'Bahrain']);
});

test('should return Angola', () => {
  expect(data(arr, 'ango')).toEqual(['Angola']);
});

test('should return Angola and Anguilla', () => {
  expect(data(arr, 'ang')).toEqual(['Angola', 'Anguilla']);
});

test('should return Anguilla', () => {
  expect(data(arr, 'Anguilla')).toEqual(['Anguilla']);
});
