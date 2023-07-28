const Triangle = require("./triangle");
const Square = require("./square");
const Circle = require("./circle");

function createSVG(shape,shapeColor, text, textColor) {
  let logoShape;
  if (shape === "circle") {
    logoShape = new Circle();
  } else if (shape === "square") {
    logoShape = new Square();
  } else if (shape === "triangle") {
    logoShape = new Triangle();
  }
  logoShape.setColor(shapeColor);

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${logoShape.render()}

  <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`
}

module.exports = { createSVG };