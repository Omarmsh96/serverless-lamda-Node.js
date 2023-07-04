const AWS = require('aws-sdk');
const express = require("express");


const getprodcut   = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const {id} = event.pathParameters;
  let prodcut //to store the fetched products.
  try {
    const results = await dynamodb.get({
        TableName: "prodcut",
        Key : {id},
    }).promise()  
    prodcut=results.Item
  }
  catch (error){
    console.log(error)
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ prodcut })
  }
  
}
module.exports= {handler: getprodcut}