const filterByName = (arr, val) => arr
  .filter((x) => x.toLowerCase().indexOf(val.toLowerCase()) === 0);

if (typeof module !== 'undefined') { module.exports = filterByName; }
