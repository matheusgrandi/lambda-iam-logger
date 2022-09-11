import axios from 'axios';

const API_URL = 'http://api.com.br';

export const handler = async (event, context) => {
  const payload = Buffer(event.awslogs.data, 'base64');
  const data = (await zlib.gunzipAsync(payload)).toString('utf8');
  const jsonData = JSON.parse(data);

  try {
    const result = await performWork(jsonData);
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      message: ('There was an uncaught error', error),
    };
  }
};

async function* performWork(data) {
  axios.post(API_URL, data);
}
