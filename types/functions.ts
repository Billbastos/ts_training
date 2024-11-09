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

// Overloading functions
function reverse(s: string): string
function reverse(s1: string, s2: string): string
function reverse<T>(a: T[]): T[]
function reverse<T>(a: T[] | string, b?: string): T[] | string {
  if (typeof a === 'string') {
    return typeof b === 'string'
      ? `${b.split('').reverse().join('')} ${a.split('').reverse().join('')}`
      : a.split('').reverse().join('')
  }
  return a.slice().reverse()
}
const arr = [1, 2, 3]
reverse(arr) // [3, 2, 1]
console.log(arr) // [1, 2, 3] slice makes a copy of the array
reverse('hello') // 'olleh'
console.log(reverse('hello', 'world')) // 'dlrow olleh'

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

// makeError('Something went wrong') // Error: Something went wrong
