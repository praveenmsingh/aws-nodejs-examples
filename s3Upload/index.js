const AWS = require('aws-sdk');

const bucketName = '<insert bucket name>';
const key = '<insert object key>';                   // name of file or folder to be uploaded
const body = '<insert object content>';              // content to be uploaded

const s3ObjectParams = {Bucket: bucketName, Key: key, Body: body}

const s3 = new AWS.S3();
s3.putObject(s3ObjectParams).promise().then(
    function(data) {
        console.log("Successfully uploaded to " + bucketName + "/" + key);
}).catch(
    function(err) {
        console.error(err, err.stack);
});
