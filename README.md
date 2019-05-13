# SAM DynamoDB Application for Managing Rules 

This is a sample application to demonstrate how to build an application on DynamoDB using the
 Rule items in a DynamoDB table to a RESTful API



## Requirements

* AWS CLI already configured with at least PowerUser permission
* [Java SE Development Kit 8 installed](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* [Docker installed](https://www.docker.com/community-edition)
* [Maven](https://maven.apache.org/install.html)
* [SAM CLI](https://github.com/awslabs/aws-sam-cli)
* [Python 3](https://docs.python.org/3/)

## Setup process
 
### Dynamo 

1. aws dynamodb create-table --attribute-definitions <value> --table-name <value> --key-schema <value>
2. Start the SAM local API.
 - On a Mac: `sam local start-api --env-vars src/test/resources/test_environment_mac.json`.
 - On Windows: `sam local start-api --env-vars src/test/resources/test_environment_windows.json`
 - On Linux: `sam local start-api --env-vars src/test/resources/test_environment_linux.json`

 
###  kinessis  
 aws kinesis describe-limits --stream-name lambda-stream
 aws kinesis put-record --stream-name lambda-stream --partition-key 1 --data "hello world"
 aws kinesis put-record --stream-name AggregatorMicroservice-ChangeEventStream-1Q362WBKXJANF --partition-key kuskus --data "{\"event_id\":\"moshe1\", \"vessel_id\":\"ferari\"}"
 aws kinesis get-records  --shard-iterator 1

## AWS CLI commands

AWS CLI commands to package, deploy and describe outputs defined within the cloudformation stack:

 
Firstly, we need a `S3 bucket` where we can upload our Lambda functions packaged as ZIP before we
deploy anything - If you don't have a S3 bucket to store code artifacts then this is a good time to
create one:

```bash
export BUCKET_NAME=my_cool_new_bucket
aws s3 mb s3://$BUCKET_NAME
sam package --output-template-file packaged.yml  --s3-bucket sam-temp-bucket-zim 
sam deploy --template-file packaged.yml --stack-name AggregatorMicroservice --region eu-west-1 --capabilities CAPABILITY_IAM
aws cloudformation describe-stacks     --stack-name sam-orderHandler --query 'Stacks[].Outputs'
curl -X POST "https://92i1dfls13.execute-api.eu-west-1.amazonaws.com/Prod/rules"
see dynamo db 
```

## Bringing to the next level

Next, you can use the following resources to know more about beyond hello world samples and how others
structure their Serverless applications:



* [AWS Serverless Application Repository](https://aws.amazon.com/serverless/serverlessrepo/)
* https://github.com/eon01/AWS-CheatSheet
