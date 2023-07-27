const Triangle = require('../lib/triangle.js')

describe('Triangle', () => {
  it('should render a blue triangle', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="115, 0 230, 200 0, 200" fill="blue" />')
  })
})