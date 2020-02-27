'use strict';

module.exports.test = async event => {
  try {
    // const { name } = event.pathParameters;

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Test ',
        },
        null,
        2
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
