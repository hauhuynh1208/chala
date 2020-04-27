import axios from 'axios';
import {BASE_URI, API_URL} from '../constants';

export function getItem() {}

export async function get(url, params = {}, token = true) {
  try {
    if (!url) {
      throw new Error('input url not found!');
    }
    const headers = {
      'Content-Type': params.contentType
        ? params.contentType
        : 'application/json',
    };
    const data = params.body;
    let _params = {
      method: 'get',
      url: `${API_URL}/${url}`,
      headers,
      withCredentials: false,
      data,
    };

    return _results(_params);
  } catch (error) {
    throw error;
  }
}

export async function post(url, params, token = true) {
  try {
    if (!url) {
      throw new Error('input url not found!');
    }

    const headers = {
      'Content-Type': params.contentType
        ? params.contentType
        : 'application/json',
    };

    if (token === true) {
      let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
      headers.Authorization = userInfo.jwtToken;
    } else headers.Authorization = token;

    const data = params;
    let _params = {
      method: 'post',
      url: `${BASE_URI}/${url}`,
      headers,
      withCredentials: false,
      data,
    };
    return await _results(_params);
  } catch (error) {
    throw error;
  }
}

export async function put(url, params = {}) {
  try {
    if (!url) {
      throw new Error('input url not found!');
    }
    const headers = {
      'Content-Type': params.contentType
        ? params.contentType
        : 'application/json',
    };

    if (params.token) {
      headers.Authorization = params.token;
    }
    const data = params;
    let _params = {
      method: 'put',
      url: `${BASE_URI}/${url}`,
      headers,
      withCredentials: false,
      data,
    };
    return await _results(_params);
  } catch (error) {
    throw error;
  }
}

export async function del(url, params = {}) {
  try {
    if (!url) {
      throw new Error('input url not found!');
    }
    const headers = {
      'Content-Type': params.contentType
        ? params.contentType
        : 'application/json',
    };

    if (params.token) {
      headers.Authorization = params.token;
    }
    const data = params;
    let _params = {
      method: 'delete',
      url: `${BASE_URI}/${url}`,
      headers,
      withCredentials: false,
      data,
    };
    return await _results(_params);
  } catch (error) {
    throw error;
  }
}

async function _results(params) {
  try {
    const resp = await axios(params);
    if (resp.status == 200 || resp.status == 201) {
      if (resp.data.error) throw resp.data.message;
      return resp.data;
    }
    throw new Error(`${resp.statusText}`);
  } catch (error) {
    throw error;
  }
}
