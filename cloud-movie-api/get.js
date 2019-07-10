import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';

export async function main(event, context) {
  const params = {
    TableName: 'Movies',

    Key: {
      genre: event.pathParameters.genre,
      title: event.pathParameters.title
    }
  };

  try {
    const result = await dynamoDbLib.call('get', params);
    console.log(result);
    if (result.Item) {
      return success(result.Item);
    } else {
      return failure({ status: false, error: 'Item not found' });
    }
  } catch (e) {
    return failure({ status: false });
  }
}
