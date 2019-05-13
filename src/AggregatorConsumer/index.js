console.log('Loading function');

var AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = function(event, context) {
    //console.log(JSON.stringify(event, null, 2));
    event.Records.forEach(function(record) {
        // Kinesis data is base64 encoded so decode here
        var payload = new Buffer(record.kinesis.data, 'base64').toString('ascii');
        var evt = JSON.parse(payload);
        console.log('This is from our template:', payload);

		var params = {
		  TableName : process.env.TABLE_NAME,
		  Item: {
		     EventId: evt.event_id,
		     VesselId: evt.vessel_id
		  }
		};

		docClient.put(params, function(err, data) {
		  if (err) console.log(err);
		  else console.log(data);
		});

    });
};