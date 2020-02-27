'use strict';

module.exports.hello = async event => {
  try {
    // console.log(event);
    // throw new Error('Something went wrong');
    // const { first, second } = event; // event = '{"first": 2, "second": 10}'
    // const sum = first + second;
    const { name } = event.pathParameters;

    const now = new Date();

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Hello there ' + name + ' time:' + now,
        },
        null,
        2
      ),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: error.message,
        },
        null,
        2
      ),
    };
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
