const inquirer =  require('inquirer');
const {writeFile} = require('fs/promises')
const {createSVG} = require('./svg')


class CommandLine {
  constructor() {

  }
  run() {
    return inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: "Please enter your logo's text",
      },
      {
        type: 'input',
        name: 'textColor',
        message: "Please enter your logo's text color",
      },
      {
        type: 'list',
        name: 'shape',
        message: "Please choose your logo's shape",
        choices: ['circle','square','triangle']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter your logo color',
      },

    ])
    .then((response) => {
      console.log(response)
    })
    .then(()=> console.log('Created logo.svg file'))
    .catch((err) =>{
      console.log(err)
    })
  }
}

module.exports = CommandLine;