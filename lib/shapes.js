class Shape {
  constructor() {
    this.shpColor='';
  }
  
  setColor(color) {
    this.shpColor = color;
    return this.shpColor;
  }

  render() {
    throw new Error('no proper parameter provided')
  }
}

module.exports = Shape;