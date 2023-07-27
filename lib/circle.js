const Shape = require('./shapes.js');

class Circle extends Shape {
  constructor(shpColor){
    super(shpColor);
  }
  render(){
    return `<circle cx="150" cy="100" r="80" fill="${this.setColor()}" />`
  }
}
module.exports = Circle;