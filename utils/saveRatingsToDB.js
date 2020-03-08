const uuid = require('uuid');
const AWS = require('aws-sdk');

const config = ({
  "region": "eu-west-1",
});

const dynamoDb = new AWS.DynamoDB(config);

module.exports = async (yelpData, businessName) => {
  const date = (new Date()).toISOString();
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: { S: uuid.v1() },
      businessName: { S: businessName },
      reviewCount: { N: yelpData.reviewValue },
      rating: { N: yelpData.ratingValue },
      scrapedAt: { S: date },
    },
    ConditionExpression: 'attribute_not_exists(id)',
  };

  try {
    const data = await dynamoDb.putItem(params, err => {
      if (err) console.log('Error:', err.message);
    });
    return params.Item;
  } catch (error) {
    throw new Error(`Error saving to DynamoDB : ${error.message}`);
  }
};
