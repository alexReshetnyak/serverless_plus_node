'use strict';

// const { getPage, parsePage, saveRatingsToDB } = require('../utils');


module.exports.handler = async event => {
  try {
    // const page = await getPage(event);

    // console.log('PAGE: ', page);

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
