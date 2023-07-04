const AWS = require('aws-sdk');


// Create an instance of the DynamoDB Document Client


// Lambda handler function
const product = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  try {

    // Extract data from the event
    const { productID, name, price } = JSON.parse(event.body);
    
    console.log("this is an id " , productID)
    // Create the DynamoDB PutItem parameters
const params = {
      TableName: 'product',
      Item: {
        productID,
        name,
        price,
   
      }
    };

    // Put the item to DynamoDB
    await dynamodb.put(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Data added successfully' })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error adding data' })
    };
  }
};

module.exports = {handler: product}



//serverless -f 

