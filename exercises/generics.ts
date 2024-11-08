// Built-in Generics
const numbers: Array<number> = [1, 2, 3, 4, 5]
const words: Array<string> = ['hello', 'world']

// querySelector returns an Element or null and is a generic function.
const inputis = document.querySelector<HTMLInputElement>('.input')! // Typescript `!` Non-null assertion operator.
inputis.value = 'HELLO!' // value is a HTMLInputElement prop.

/* -------------------------------------------------------------------------- */
/* Create a generic function that takes an array of any type 
and returns the reverse of that array. */
function reverseArray<T>(array: T[]): T[] {
  return array.reverse()
}

reverseArray<number>(numbers) // [5, 4, 3, 2, 1]
reverseArray<string>(words) // ['world', 'hello']

/* -------------------------------------------------------------------------- */
/* Create a generic function that takes an object with a `length` property */
function getLength<T extends { length: number }>(obj: T): number {
  return obj.length
}

getLength<number[]>(numbers) // 5
getLength<string[]>(words) // 2
getLength({
  length: 10,
}) // 10

/* -------------------------------------------------------------------------- */
/* return random element from an array */
function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

getRandomElement<number>(numbers) // 3
getRandomElement<string>(words) // 'hello'

/* -------------------------------------------------------------------------- */
/*  Create a generic function that takes an object with a `name` property
    Does not need to be a GENERIC function, but it is a good example
    QUICK NOTE FOR JSX: Just add a comma after <...,> when it is a arrow function
    e.g: const myFunc = <T,>(obj: T): string => { return obj.name }
*/
interface SomeOne {
  name: string
  age?: number
}

const getName = (obj: SomeOne): string => {
  return obj.name
}
const anotherPerson = { name: 'John', age: 12, kite: true }
getName(anotherPerson) // 'John'
getName({ name: 'Jane' }) // 'Jane'

/* -------------------------------------------------------------------------- */
/* Create a merge function that takes two objects and merges them */
const merge = <T extends object, U extends object>(obj1: T, obj2: U): T & U => {
  return {
    ...obj1,
    ...obj2,
  }
}

const merged = merge({ name: 'John' }, { pets: ['cat', 'dog'] })
merged.name // 'John'
merged.pets.length // 2
merged.doesnexists // TS Error: Property 'doesntexists' does not exist on type 'T & U'.

const merged1 = merge({ name: 'John' }, 9) // TS Error: Argument of type '9' is not assignable to parameter of type 'object'.

/* -------------------------------------------------------------------------- */
/* Type parameter default value example */
// If no type is provided, it defaults to `string`.
function printSomeName<T = string>(name: T): T {
  return name
}

interface Client {
  readonly id: number
  name: string
  orders: number[]
}

/* -------------------------------------------------------------------------- */
/* Generic Classes */
class DataStorage<T> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }

  get items() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('John')
textStorage.addItem('Jane')
textStorage.removeItem('Jane')
textStorage.items // ['John']

const numberStorage = new DataStorage<number>()
numberStorage.addItem(1)
numberStorage.addItem(2)
numberStorage.removeItem(1)
numberStorage.items // [2]

const clientStorage = new DataStorage<Client>()
clientStorage.addItem({ id: 1, name: 'John', orders: [1, 2] })
clientStorage.addItem({ id: 2, name: 'Jane', orders: [3, 4] })
clientStorage.removeItem({ id: 2, name: 'Jane', orders: [3, 4] })
clientStorage.items // [{ id: 1, name: 'John', orders: [1, 2] }]
clientStorage.items[0].name // 'John'

export {}
