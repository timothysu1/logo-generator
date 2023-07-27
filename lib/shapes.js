class Shape {
  constructor(shpColor) {
    this.shpColor = shpColor
  }
  
  setColor(clr) {
    this.shpColor = clr;
    return this.shpColor;
  }

  render() {
    throw new Error('no proper parameter provided')
  }
}

module.exports = Shape;