const Shape = require('./shapes.js')

class Square extends Shape {
  render() {
    return `<rect x="75" y="25"width="150" height="150" fill="${this.shpColor}" />`
  }
}
module.exports = Square;