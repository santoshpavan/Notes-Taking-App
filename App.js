const chalk = require('chalk');
const ans = chalk.red.inverse('Hello ') + chalk.blue.underline.bold('World');
console.log(ans);