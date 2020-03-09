'use strict';
const { deployScrapers } = require('../utils');


module.exports.handle = async event => {
  try {
    const fakeDBResults = ["", "", ""];
    fakeDBResults.forEach(businessName => deployScrapers(businessName));

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Cron task done',
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
