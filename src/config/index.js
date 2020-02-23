const url = process.env.REACT_APP_API_URL;

if (!url) {
  throw new Error('API Url is not provided.');
}

export const API_ROUTE = `${url}/api/v1`;
export const AUTH_ROUTE = `${url}/auth`;
