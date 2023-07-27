const Square = require('../lib/square.js');

describe('Square', () => {
  it('should render a green square', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect x="75" y="25"width="150" height="150" fill="green" />')
  })
})