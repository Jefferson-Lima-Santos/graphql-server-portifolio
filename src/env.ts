import 'dotenv/config'

const env = {
    GITHUB_API_URL: process.env.GITHUB_API_URL,
    GITHUB_API_TOKEN: process.env.GITHUB_API_TOKEN,
    GITHUB_API_USER: process.env.GITHUB_API_USER,
    MESSAGER_API_URL: process.env.MESSAGER_API_URL,
}

Object.freeze(env);

export default env;