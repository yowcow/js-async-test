import * as math from './src/math'

/**
 * Example function to do async "square" in sync
 */
const main = async () => {
  const res1 = await math.square(4)
  console.log(`square(4) is ${res1}`)

  const res2 = await math.squareMulti([2, 3])
  console.log(`squareMulti([2, 3]) is ${res2}`)
}

main()
