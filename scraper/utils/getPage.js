
const request = require('request-promise');

module.exports = businessName => {
  // const url = `https://www.yelp.com/search?find_desc=${businessName}&find_loc=San+Francisco%2C+CA`;
  const url = `https://www.yelp.com/search?find_desc=Bars&find_loc=San+Francisco%2C+CA`;
  return request({ method: 'GET', url });
};