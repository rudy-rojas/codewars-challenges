const narcissistic = require('./DoesMyNumberLookBigInThis.js')
const target = (input, result) => `${input} should be ${result}`

const testing = (input, result) => {
  it(target(input, result), ()=>{
    expect(narcissistic(input)).toEqual(result);
  })
}
describe(`Narcissictic Function`, ()=> {
  testing(7, true)
  testing(371, true)
  testing(10866660, false)
  testing(92727, true)
  testing(11290282, false)
  testing(24678050, true)
  testing(548834,true)
  testing(10766483,false)
  testing(4210818,true)
  testing(36772,false)
})