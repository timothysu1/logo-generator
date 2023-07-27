const Shape = require('./shapes.js')

class Square extends Shape {
  render() {
    return `<rect width="200" height="200" fill="${this.setColor()}" /> `
  }
}
module.exports = Square;