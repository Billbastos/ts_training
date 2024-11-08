const printName = (person: { first: string; last: string }): void => {
  console.log(`${person.first} ${person.last}`)
}

printName({ first: 'John', last: 'Doe' }) // John Doe

const coordinate: { x: number; y: number } = { x: 10, y: 20 }

function coordinates(): { x: number; y: number } {
  return {
    x: Math.random() * 10,
    y: Math.random() * 10,
  }
}

printName({ first: 'Gui', last: 'Bastos', age: 48 }) // It complains about the age  :?
const user = { first: 'John', last: 'Doe', age: 48 }
printName(user) // Does not complain error :D

// readonly modifier
type User = {
  readonly id: number
  first: string
  last: string
}

const user2: User = {
  id: 1,
  first: 'John',
  last: 'Doe',
}

user2.id = 5 // Error: Cannot assign to 'id' because it is a read-only property
