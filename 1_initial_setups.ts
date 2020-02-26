
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
