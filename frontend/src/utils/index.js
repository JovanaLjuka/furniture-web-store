import axios from 'axios';

const myUrl = 'http://localhost:5002/api/products';

export const myFetch = axios.create({ baseURL: myUrl });
