import {version} from "../package.json"

const ENV = {
    VERSION: version,
    NODE_ENV: process.env.NODE_ENV
}

console.log(`Famille v.${ENV.VERSION} - ${ENV.NODE_ENV}`)

export default ENV