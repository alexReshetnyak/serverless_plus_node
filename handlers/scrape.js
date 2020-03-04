'use strict';

const { getPage, parsePage, saveRatingsToDB } = require('../utils');


module.exports.scrape = async event => {
  try {
    const page = await getPage(event);
    const yelpData = await parsePage(page);

    await saveRatingsToDB(yelpData);

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Test ',
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

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
