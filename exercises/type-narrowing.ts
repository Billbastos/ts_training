/* Type narrowing examples */

/* -------------------------------------------------------------------------- */
/* Typeof guards example */
function printUppercaseName(name: string | number): string {
  if (typeof name === 'string') {
    return name.toUpperCase() // TS knows that `name` is a string.
  }
  return ''
}

/* -------------------------------------------------------------------------- */
/* instanceof guards example */
class Car {
  drive() {
    console.log('Driving...')
  }
}
const car = new Car()
if (car instanceof Car) {
  car.drive() // TS knows that `car` is an instance of `Car`.
}

const getDate = (date: Date | string) => {
  if (date instanceof Date) {
    return date.toISOString() // TS knows that `date` is a Date.
  }
  return new Date(date).toISOString() // TS knows that `date` is a string.
}

/* -------------------------------------------------------------------------- */
/* in guards example */
/* good when you you can't use typeof or instanceof */

type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

function printEmployeeInformation(emp: Admin | Employee) {
  console.log('Name: ' + emp.name)
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges) // TS knows that `emp` is an Admin.
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate) // TS knows that `emp` is an Employee.
  }
}

printEmployeeInformation({ name: 'John', privileges: ['create-server'] })

/* -------------------------------------------------------------------------- */
/* Truthy guards example */
function someFunc(a: string | number, b: string | boolean) {
  if (a === b) {
    console.log(a.toUpperCase()) // TS knows that `a` and `b` are strings.
    console.log(b.toUpperCase()) // TS knows that `a` and `b` are strings.
  } else {
    console.log(a) // Can be a string or a number.
    console.log(b) // Can be a string or a boolean.
  }
}

/* -------------------------------------------------------------------------- */
/* Type predicates example */
/* A type predicate is a function that returns a boolean */
function isString(value: any): value is string {
  return (value as string).toLowerCase !== undefined
}

function isNumber(value: any): value is number {
  return (value as number).toFixed !== undefined
}

function printValue(value: any) {
  if (isString(value)) {
    console.log(value.toUpperCase()) // TS knows that `value` is a string.
  } else if (isNumber(value)) {
    console.log(value.toFixed(2)) // TS knows that `value` is a number.
  }
}

printValue('Hello') // HELLO
printValue(123) // 123.00

/* -------------------------------------------------------------------------- */
/* Discriminated unions example */
interface Circle {
  kind: 'circle' // Discriminant property
  radius: number
}

interface Square {
  kind: 'square' // Discriminant property
  sideLength: number
}

interface Triangle {
  kind: 'triangle' // Discriminant property
  base: number
  height: number
}

type Shape = Circle | Square | Triangle

function getArea(shape: Shape) {
  switch (
    shape.kind // Check the discriminant property
  ) {
    case 'circle':
      return Math.PI * shape.radius ** 2 // TS knows that `shape` is a Circle.
    case 'square':
      return shape.sideLength ** 2 // TS knows that `shape` is a Square.
    default:
      // Exaustive check. It should never get to this point.
      // If there's no kind check for a shape, TS will complain about casting shape to never.
      const _assertNever: never = shape // Triangle cannot be assigned to never.
      return _assertNever
  }
}

// TS will treat this file as a module and won't complain about re-declaring variables with same name in other files.
export {}
