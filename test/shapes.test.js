const Shape = require('../lib/shapes.js');

describe('Shape', () => {
  it('should throw error if render is called',() => {
    const shape = new Shape();
    const err = new Error('no proper parameter provided')
    expect(shape.render).toThrow(err);
  })
})