'use strict'

var type = process.argv.slice(2)[0];
var obj = {
    NODE_ENV: '"production"'
};

switch (type) {
  case 'test':
      obj.BUILD_TYPE = '"test"';
      break;
  // 生产
  case 'prod':
      obj.BUILD_TYPE = '"prod"';
      break;

}
module.exports = obj;


