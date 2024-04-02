import axios from 'axios';

const myUrl = 'https://furniture-web-store.onrender.com';
// const myUrl = 'http://localhost:5002';

export const myFetch = axios.create({ baseURL: myUrl });
