'use strict';

const { getPage, parsePage, saveRatingsToDB } = require('../utils');


module.exports.handle = async event => {
  try {
    const page = await getPage(event);
    const yelpData = await parsePage(page);

    await saveRatingsToDB(yelpData, 'Bars');

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Scraped Bars',
        },
      ),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: error.message },
      ),
    };
  }
};
