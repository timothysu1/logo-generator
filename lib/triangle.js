const Shape = require('./shapes.js')

class Triangle extends Shape {
  render () {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shpColor}" />`
  }
}
module.exports = Triangle;