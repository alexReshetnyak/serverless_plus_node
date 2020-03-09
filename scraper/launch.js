const request = require('request-promise');
const AWS = require('aws-sdk');

const list = [
  "",
  "",
  "",
];

function deployScraper(businessName) {
  const lambda = new AWS.Lambda({
    region: 'eu-west-1'
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

function swarm(arr) {
  arr.forEach(business => {
    deployScraper(business);
  });
}

swarm(list);