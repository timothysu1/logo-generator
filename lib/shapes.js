class Shape {
  constructor(shape,shpColor,text,txtColor) {
    this.shape = shape
    this.shpColor = shpColor
    this.text = text
    this.txtColor = txtColor
  }
  render() {
    throw new Error('')
  }
  setColor(clr) {
    this.shpColor = clr
  }
}

module.exports = Shape;