// 'use strict'

const convertFahrToCelsius = (fahrenheit) => {
  let numToConvert = +fahrenheit

  if (isNaN(numToConvert)) {
    return `${fahrenheit} is not a valid number but a/an ${typeof fahrenheit}`
  }

  return (fahrenheit - 32) * (5 / 9)
}

console.log(convertFahrToCelsius(5))
console.log(convertFahrToCelsius('3'))
console.log(convertFahrToCelsius([1, 2]))
console.log(convertFahrToCelsius({ f: '8' }))

const checkYuGiOh = (n) => {
  let checkNum = +n
  if (isNaN(checkNum)) {
    return `invalid parameter: ${n} in meh`
  }
  let result = []
  for (let i = 1; i < n; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      result.push('yu-gi-oh')
    } else if (i % 2 === 0 && i % 3 === 0) {
      result.push('yu-gi')
    } else if (i % 2 === 0) {
      result.push('yu')
    } else if (i % 3 === 0) {
      result.push('gi')
    } else if (i % 5 === 0) {
      result.push('oh')
    } else {
      result.push(i)
    }
  }

  return result
}

console.log(checkYuGiOh(30))
console.log(checkYuGiOh(10))
console.log(checkYuGiOh('jjj'))
console.log(checkYuGiOh('10'))
