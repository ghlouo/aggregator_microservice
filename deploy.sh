sam package --s3-bucket sam-temp-bucket-zim --output-template-file packaged.yml
sam deploy --template-file packaged.yml --stack-name AggregatorMicroservice --region eu-west-1 --capabilities CAPABILITY_IAM

