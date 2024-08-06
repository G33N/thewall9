import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import schema from "./schema";
import dynamoDb from "@libs/dynamo-db";
import { randomUUID } from "crypto";

const create: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const data = event.body;
  const params = {
    TableName: "character",
    Item: {
      id: randomUUID(),
      name: data.name,
      species: data.species,
      type: data.type,
      gender: data.type,
      episode: data.episode,
      url: data.url,
    },
  };

  try {
    await dynamoDb.put(params).promise();
    return formatJSONResponse({
      statusCode: 201,
      body: {
        message: "Character created successfully",
        data: params.Item,
      },
    });
  } catch (error) {
    return formatJSONResponse({
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to create character",
        error: error,
      }),
    });
  }
};

export const main = middyfy(create);
