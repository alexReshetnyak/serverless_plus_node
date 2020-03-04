const cheerio = require('cheerio');

module.exports = page => {
  try {
    const $ = cheerio.load(page);
    const ratings = $('div.i-stars__373c0__tb0kH.i-stars--regular-4-half__373c0__3B6wg');
    const reviewCount = $('span.reviewCount__373c0__2r4xT');

    const ratingValue = ratings.attr('aria-label').replace(/[^\d\.]/g, '');
    const reviewValue = reviewCount.html().replace(/[^\d\.]/g, '');

    const yelpData = { ratingValue, reviewValue };

    return Promise.resolve(yelpData);
  } catch (error) {
    return Promise.reject(`Error parsing page: ${JSON.stringify(error)}`);
  }
};
