export const square = n =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => n < 0 || n > 10
        ? reject(new Error(`${n} should be a positive integer between 0 and 10`))
        : resolve(n ** 2),
      500
    )
  )

export const squareMulti = numbers =>
  Promise.all(numbers.map(n => square(n)))
