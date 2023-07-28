const { createSVG } = require('../lib/svg');

describe('Blue Square', () => {
  it('should create a blue square with the test WZR', () => {
    const shape = 'square';
    const shapeColor = '#189BCC';
    const text = 'WZR';
    const textColor = 'black'
    expect(createSVG(shape, shapeColor, text, textColor)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect x="75" y="25"width="150" height="150" fill="#189BCC" />

  <text x="150" y="120" font-size="60" text-anchor="middle" fill="black">WZR</text>

</svg>`)
  })
})

describe('Red Triangle', () => {
  it('should create a red triangle with the test A', () => {
    const shape = 'triangle';
    const shapeColor = 'red';
    const text = 'A';
    const textColor = '#37EAA9'
    expect(createSVG(shape, shapeColor, text, textColor)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 244, 182 56, 182" fill="red" />

  <text x="150" y="120" font-size="60" text-anchor="middle" fill="#37EAA9">A</text>

</svg>`)
  })
})

describe('Pink Circle', () => {
  it('should create a pink circle with the test ISC', () => {
    const shape = 'circle';
    const shapeColor = '#FFB6C1';
    const text = 'ISC';
    const textColor = '#AFEEEE'
    expect(createSVG(shape, shapeColor, text, textColor)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="#FFB6C1" />

  <text x="150" y="120" font-size="60" text-anchor="middle" fill="#AFEEEE">ISC</text>

</svg>`)
  })
})