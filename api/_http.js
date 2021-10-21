import { api_url_prod } from '../app.json';
import axios from 'axios';
import { getToken } from './';

// TODO: export request function (get post put delete)

// TODO: handle global errors like no internet or logged out (401)

// export const api = axios.create({ baseURL: api_url });

export const request = async (
    method,
    url,
    params,
    data,
    headers = {},
    showNetworkError = true,
) => {
    const token = await getToken();

    const response = await axios({
        url: api_url_prod + url,
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Accept-Language': 'fr',
            Authorization: token ? `Bearer ${token}`: undefined,
            ...headers,
        },
        data: data,
        params: params,
    })

    return response.data;
};