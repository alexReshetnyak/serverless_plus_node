const uuid = require('uuid');
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (yelpData, businessName) => {
  console.log('Save to DB data', yelpData);
  const date = JSON.stringify(new Date());
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      businessName: businessName,
      reviewCount: yelpData.reviewCount,
      rating: yelpData.rating,
      scrapedAt: date,
    },
  };

  dynamoDb.put(params, err => {
    if (err) {
      console.error(`Error saving to DynamoDB : ${JSON.stringify(err)}`);
      return Promise.reject(`Error saving to DynamoDB : ${JSON.stringify(err)}`);
    } else {
      return Promise.resolve(params.Item);
    }
  })
};
