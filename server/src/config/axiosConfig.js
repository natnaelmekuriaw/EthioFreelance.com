const axios = require('axios');
require('dotenv').config()

const tokens = require("./token")

axios.defaults.baseURL = 'https://api-et.hellocash.net/'
axios.defaults.headers.common = {'Authorization': `bearer ${ tokens.token}`}

module.exports = axios;