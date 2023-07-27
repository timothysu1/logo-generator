const inquirer =  require('inquirer');


class CommandLine {
  constructor() {

  }
  run() {
    return inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Please enter your name',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Please enter your name',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Please enter your name',
        choices: ['circle','square','triangle']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter your name',
      },

    ])
  }
}

module.exports = CommandLine;