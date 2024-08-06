import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";

import axiosInstance from "@libs/axios";

const list: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {
  const page = event.queryStringParameters?.page;

  if (!page) {
    return formatJSONResponse({
      statusCode: 400,
      body: { message: "Page parameter is required" },
    });
  }

  const response = await axiosInstance
    .get(`/character?page=${page}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return {
        message: "Error making the request:",
        error,
        event: event,
      };
    });

  return formatJSONResponse(response);
};

export const main = list;
