console.log('Welcome to Node Tutorial')

const load = require('lodash')
const array = [1,[2,[3,[4]]]]
const newitem = load.flattenDeep(array)
console.log(newitem);
const bootstrap = require('bootstrap')
bootstrap.