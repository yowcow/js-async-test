import assert    from 'power-assert'
import co        from 'co'
import * as math from '../src/math'

describe('math.square', () => {

  it('should square 4, delayed', () => co(function *() {
    const result = yield math.square(4)
    assert.equal(result, 16)
  }))

  it('should throw when n is not between 0 and 10', () => co(function *() {
    try {
      const result = yield math.square(11)
      assert.ok(result !== 16)
    }
    catch (e) {
      assert.ok(/^11 should be a positive integer/.test(e.message))
    }
  }))
})

describe('math.squareMulti', () => {

  it('should square [2, 3], delayed', () => co(function *() {
    const results = yield math.squareMulti([2, 3])
    assert.deepEqual(results, [4, 9])
  }))

  it('should throw when [4, 11]', () => co(function *() {
    try {
      const results = yield math.squareMulti([4, 11])
      assert.notDeepEqual(results, [16, 121])
    }
    catch (e) {
      assert.ok(e.message.match(/^11 should be a positive integer/))
    }
  }))
})
