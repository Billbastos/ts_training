import Dog from './Dog'
import ShelterDog from './ShelterDog'
import { add, subtract, multiply, divide } from './utils'

const dog = new Dog('Fido', 'Golden Retriever', 4)
dog.bark()

const shelterDog = new ShelterDog(
  'Rex',
  'German Shepherd',
  2,
  'Austin Pets Alive'
)
shelterDog.bark()

console.log(add(1, 2))
console.log(subtract(3, 1))
console.log(multiply(2, 3))
console.log(divide(10, 2))

console.log('WEBPACK RUNNING!')
