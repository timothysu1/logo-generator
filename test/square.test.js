const Square = require('../lib/square.js');

describe('Square', () => {
  it('should render a green square', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect width="200" height="200" fill="green" />')
  })
})