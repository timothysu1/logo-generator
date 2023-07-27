const Triangle = require("./triangle");
const Square = require("./square");
const Circle = require("./circle");

//const triangle = new Triangle().render();


function createSVG(shape, text, textColor) {
  let logoShape;
  if (shape === "circle") {
    logoShape = new Circle().render();
  } else if (shape === "square") {
    logoShape = new Square().render();
  } else if (shape === "triangle") {
    logoShape = new Triangle().render();
  }

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${logoShape}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`
}

module.exports = { createSVG };