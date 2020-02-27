
// ? Install aws serverless
// * 1 sudo npm i -g serverless

// ? save credentials
// * 2 sls config credentials --provider aws --key type_your_access_key_id --secret type_secret_access_key --profile type_aws_user_name

// ? create default template
// * 3 sls create --template aws-nodejs

// ? run default function
// * 4 sls invoke local -f hello
// {
  // "statusCode": 200,
  // "body": "{\n  \"message\": \"Go Serverless v1.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
// }

// ? run function with argument
// * 5 sls invoke local -f hello -d 'some data'
// * 5.1 sls invoke local -f hello -d '{"first": 2, "second": 10}'

// ? add package.json
// * 6 npm init -y

// ? Install serverless offline
// * 7 npm i --save-dev serverless-offline

// ? Run local server
// * 8 serverless offline

// ? Deploy all functions
// * 9 sls deploy
// * 9.1 sls deploy --aws-profile serverless-admin --verbose --force
// * 9.2 endpoint:  https://eihtufnnji.execute-api.us-east-1.amazonaws.com/dev/message/
// * 9.3 sls deploy -s production --aws-profile serverless-admin --verbose --force

// ? Deploy one functions
// * 9 serverless deploy function --function myFunction

// ? Remove all from dev
// * 9 serverless remove -s dev

