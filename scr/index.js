const AWS = require('aws-sdk');
const serverless = require("serverless-http");
const express = require("express");
const app = express();

const fetchprodcut   = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  let prodcuts //to store the fetched products.
  try {
    const results = await dynamodb.scan({TableName: "prodcut"}).promise()  //The scan results are stored in the results variable.
    prodcuts=results.Items
  }
  catch (error){
    console.log(error)
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ prodcuts })
  }
  
}
module.exports= {handler: fetchprodcut}

/*app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/path", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
*/