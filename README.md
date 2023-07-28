# Logo Generator

## Description
This application allows the user to create a simple logo in an svg file. The user can choose a shape, colors, and text for the logo.
## Built With
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/about)
* [Inquirer](https://www.npmjs.com/package/inquirer#documentation)
* [Jest](https://jestjs.io/)

## Installation

To install necessary dependancies, run the following command: 

```
npm i
```
## Test
To run tests, run the following command:
  
  ```
npm test
  ```
## Usage
The user must first download the repository from GitHub and install the required dependancies. Once the application has been set up, the user can start the application typing ```npm start``` in the command line. The user will then be prompted choose the text, text color, shape, and shape color of the logo. Once the user has inputed their responses, the logo will be generated in the examples folder.

[Walkthrough Video]()
## Learning Points
* Usng jest when testing code
* Utilizing objects to modularize code
* Creating visuals with SVG

## Important Code
```js
class Circle extends Shape {
  constructor(shpColor){
    super(shpColor);
  }
  render(){
    return `<circle cx="150" cy="100" r="80" fill="${this.shpColor}" />`
  }
}
```
This portion of code shows the circle constructor inheriting the attributes of the shape constructor.

## Author Info

### Timothy Su

* [LinkedIn](https://www.linkedin.com/in/timothysu1/)
* [Github](https://github.com/timothysu1)

## License

Please refer to license in the repo. 

## Contributions

jest documentation: https://jestjs.io/docs/getting-started 

SVG tutorial: https://www.w3schools.com/graphics/svg_intro.asp 