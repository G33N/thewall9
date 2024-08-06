import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import schema from "./schema";
import dynamoDb from "@libs/dynamo-db";

const update: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const data = event.body;
  const { id } = event.pathParameters;

  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Character ID is required" }),
    };
  }

  let updateExpression = "set";
  const expressionAttributeNames: { [key: string]: string } = {};
  const expressionAttributeValues: { [key: string]: any } = {};
  for (const key in data) {
    updateExpression += ` #${key} = :${key},`;
    expressionAttributeNames[`#${key}`] = key;
    expressionAttributeValues[`:${key}`] = data[key];
  }
  updateExpression = updateExpression.slice(0, -1);

  const params = {
    TableName: "character",
    Key: { id },
    UpdateExpression: updateExpression,
    ExpressionAttributeNames: expressionAttributeNames,
    ExpressionAttributeValues: expressionAttributeValues,
    ReturnValues: "UPDATED_NEW",
  };

  try {
    const result = await dynamoDb.update(params).promise();
    return formatJSONResponse({
      statusCode: 200,
      body: JSON.stringify({
        message: "Character updated successfully",
        data: result.Attributes,
      }),
    });
  } catch (error) {
    return formatJSONResponse({
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to update character",
        error: error.message,
      }),
    });
  }
};

export const main = middyfy(update);
