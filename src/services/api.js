import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios'

export const baseURL = 'http://localhost:8000/api/v1/tools';


const baseService = axios.create({
    timeout: 60000,
    baseURL: baseURL
})

const client = async (endpoint, {body, ...customconfig}) => {
    const headers = {'Content-Type': 'application/json'}

    const config = {
        method: body ? 'POST' : 'GET',
        ...customconfig,
        headers: {
            ...headers,
            ...customconfig.headers,
        },
    }

    if (body) {
        config.body = JSON.stringify(body)
    }

    let data;
    try{
        const response = await axios[config.method](baseService)
        data = response.json()
    
        if(response.ok) {
            return {
                status: response.status,
                data,
                headers: response.headers,
                url: response.url,
            }
        }
        throw new Error(response.statusText)
    } catch (err) {
        return Promise.reject(err.message ? err.message : data)
    }
}

export default client;