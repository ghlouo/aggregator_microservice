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

## Setup app with aws - cli
 
```bash
 aws kinesis describe-limits --stream-name lambda-stream
 aws kinesis put-record --stream-name lambda-stream --partition-key 1 --data "hello world"
 aws kinesis put-record --stream-name AggregatorMicroservice-ChangeEventStream-1Q362WBKXJANF --partition-key kuskus --data "{\"event_id\":\"moshe1\", \"vessel_id\":\"ferari\"}"
 aws kinesis get-records  --shard-iterator 1

`S3 bucket` to upload our Lambda functions packaged as ZIP before we
deploy anything - If you don't have a S3 bucket to store code artifacts then this is a good time to
create one:
export BUCKET_NAME=my_cool_new_bucket
aws s3 mb s3://$BUCKET_NAME
aws s3 ls

aws dynamodb create-table --table-name AggregatorMicroservice-RulesTable --key-schema <value> --attribute-definitions <value> 
aws dynamodb scan         --table-name AggregatorMicroservice-RulesTable
aws dynamodb list-tables

aws lambda create-function --function-name helloworld
aws lambda invoke          --function-name helloworld  
aws lambda list-functions --max-items 10
```
## deploy and run
```bash
sam package --output-template-file packaged.yml  --s3-bucket sam-temp-bucket-zim 
sam deploy --template-file packaged.yml --stack-name AggregatorMicroservice --region eu-west-1 --capabilities 
or
aws cloudformation describe-stacks     --stack-name sam-orderHandler --query 'Stacks[].Outputs'

CAPABILITY_IAM
  Start the SAM local API.
 - On a Mac: `sam local start-api --env-vars src/test/resources/test_environment_mac.json`.
 - On Windows: `sam local start-api --env-vars src/test/resources/test_environment_windows.json`
 - On Linux: `sam local start-api --env-vars src/test/resources/test_environment_linux.json`
curl -X POST "https://92i1dfls13.execute-api.eu-west-1.amazonaws.com/Prod/rules"
```
## Bringing to the next level

Next, you can use the following resources to know more about beyond hello world samples and how others
structure their Serverless applications:



* [AWS Serverless Application Repository](https://aws.amazon.com/serverless/serverlessrepo/)
* https://github.com/eon01/AWS-CheatSheet
* https://aws.amazon.com/getting-started/tutorials/
* jhipster import-jdl my_file1.jdl my_file2.jdl
* mvn spring-boot:run
* npm start
