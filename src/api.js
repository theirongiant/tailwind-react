import axios from 'axios';

export const basePath = ((pathname) => pathname.split('/patch')[0])(
  window.location.pathname
);
export const rootPath = ((pathname) => pathname.split('/pages')[0])(
  window.location.pathname
);

const ax = axios.create({
  baseURL: basePath
});

export const apiCall = async (endpoint, inParams = {}, inMethod = 'get') => {
  console.log('APICALL', endpoint, inParams);
  const params = typeof inParams === 'undefined' ? {} : { ...inParams };
  let method = inMethod;
  params.__method = inMethod;
  if (inMethod === 'put') {
    method = 'post';
    params.__method = 'put';
  }
  if (method === 'delete') {
    method = 'post';
    params.__method = 'delete';
  }

  try {
    const response = await ax[method](`/patch_api/${endpoint}`, params);
    return response.data;
  } catch (error) {
    console.log('Api Error', error);
    const msg = `${error.name}: ${error.message}`;
    if (
      typeof error.response !== 'undefined' &&
      typeof error.response.data !== 'undefined'
    ) {
      if (
        typeof error.response.data['login-required'] !== 'undefined' &&
        error.response.data['login-required']
      ) {
        document.location.href = `${rootPath}/login`;
        throw new Error('Session Expired. Redirecting to login...');
      }
      console.log('Error fetching data - no error data returned:', msg);
      throw new Error(
        `Unable to retrieve data: ${endpoint} ${JSON.stringify(params)}`
      );
    }
    console.log('Error fetching data - no response available', msg);
    throw new Error(msg);
  }
};

const Api = {
  apiCall
}

export default Api;
