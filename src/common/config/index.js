import dev from './dev';
import test from './test';
import prod from './prod';

let BASE_URL = {};
const node_env = process.env.NODE_ENV;
var type = process.env.BUILD_TYPE;
if(node_env === 'production') {
    if (type === 'test') {
      BASE_URL = test;
    } else {
      BASE_URL = prod;
    }
} else {
  BASE_URL = dev;
}

const HTTP_TIMEOUT = "10000";

export default BASE_URL;
