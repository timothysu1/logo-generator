const Shape = require('./shapes.js')

class Triangle extends Shape {
  render () {
    return `<polygon points="115, 0 230, 200 0, 200" fill="${this.shpColor}" />`
  }
}
module.exports = Triangle;