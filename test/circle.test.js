const Circle = require('../lib/circle.js');

describe ('Circle', () => {
  it('should render a red circle', () =>{
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />')
  })
})