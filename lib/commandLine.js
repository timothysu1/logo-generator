const inquirer = require('inquirer');
const { writeFile } = require('fs/promises')
const { createSVG } = require('./svg')


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
          validate: (input) => {
            if (input !== '' && input.length <= 3){
              return true
            } else {
              return 'Please enter up to 3 characters.'
            }
          }
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
          choices: ['circle', 'square', 'triangle']
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Please enter your logo color',
        },

      ])
      .then((response) => {
        console.log(response)
        const data = createSVG(response.shape, response.shapeColor, response.text, response.textColor)
        return writeFile(
          `./examples/${response.text}-logo.svg`,
          data)
      })
      .then(() => console.log('Created logo.svg file'))
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = CommandLine;