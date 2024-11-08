function square(n: number): number {
  return n * n
}

function greet(name: string): string {
  return `Hello, ${name}`
}

function test(someBoolean) {
  // Error: Parameter 'someBoolean' implicitly has an 'any' type
  if (someBoolean) {
    return 'true'
  }
  return 'false'
}

square(2) // 4
greet('John') // Hello, John
test(true) // true
console.log(test('isFalse')) // true - TS does not complain because of implicit any

const colors = ['red', 'green', 'blue']
colors.map((color) => color.toUpperCase()) // ['RED', 'GREEN', 'BLUE']

// Return type never
const makeError = (str: string) => {
  // NEVER return type
  throw new Error(str)
}

const loop = () => {
  // NEVER return type
  while (true) {
    console.log('hello')
  }
}

makeError('Something went wrong') // Error: Something went wrong
