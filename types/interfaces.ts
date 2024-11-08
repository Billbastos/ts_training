// Used to shape objects
interface Point {
  x: number
  y: number
}

const point: Point = {
  x: 1,
  y: 2,
}

interface Person {
  readonly id: number
  name: string
  age: number
  nickname?: string
  sayHello(): string
}

const thomas: Person = {
  id: 1,
  name: 'Thomas',
  age: 25,
  sayHello() {
    return `Hello, I am ${this.name}`
  },
}

thomas.id = 2 // Error: Cannot assign to 'id' because it is a read-only property
thomas.sayHello() // Hello, I am Thomas

interface Dog {
  name: string
  age: number
}
// This interface will combine to the one above
// Same interface name will be merged
interface Dog {
  breed: string
  bark(): void
}

const dog: Dog = {
  name: 'Buddy',
  age: 5,
  breed: 'Golden Retriever',
  bark() {
    console.log('Woof!')
  },
}

// Inheritance, can inherit multiple interfaces
interface ServiceDog extends Dog {
  serviceType: 'guide' | 'bomb' | 'rescue'
}

const serviceDog: ServiceDog = {
  name: 'Buddy',
  age: 5,
  breed: 'Golden Retriever',
  bark() {
    console.log('Woof!')
  },
  serviceType: 'guide',
}

// Interfaces x Types
// Key differences:
// - Interfaces can be merged are opened, types are closed
// - Interfaces shape just objects, types can shape objects, unions, tuples, etc
// - Interfaces extends interfaces, types uses intersection (&) to combine types
