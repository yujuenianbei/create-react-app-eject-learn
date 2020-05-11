const inquirer = require('inquirer');
const chalk = require('chalk');

const promptList = [{
    type: 'list',
    message: '请选择一种水果:',
    name: 'fruit',
    choices: [
        "Apple",
        "Pear",
        "Banana"
    ],
    filter: function (val) { // 使用filter将回答变为小写
        return val.toLowerCase();
    }
}];

console.log(chalk.green('welcome'))
console.log(chalk.bold("use"))

inquirer.prompt(promptList).then(answers => {
    console.log(answers); // 返回的结果
})