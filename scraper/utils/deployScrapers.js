const AWS = require('aws-sdk');

module.exports = businessName => {
  const lambda = new AWS.Lambda({
    region: 'eu-west-1',
    accessKeyId: 'mock access key',
    secretAccessKey: 'mock secret access key',
  });

  const params = {
    FunctionName: 'yelp-scraper-dev-scrape',
    InvocationType: 'RequestResponse',
    LogType: 'Tail',
    Payload: JSON.stringify(businessName),
  };

  return lambda.invoke(params, (err, data) => {
    if (err) {
      console.error(err.message);
      return new Error(`Error scraping: ${err.message}`);
    } else if (data) {
      console.log('Function result:', data);
      return JSON.stringify(data);
    }
  });
}
