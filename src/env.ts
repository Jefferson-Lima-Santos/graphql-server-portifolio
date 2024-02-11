import getConnectionString from "./utils/getConnectionString.js";

const env = {
    GITHUB_API_URL: getConnectionString('GITHUB_API_URL'),
}

Object.freeze(env);

export default env;