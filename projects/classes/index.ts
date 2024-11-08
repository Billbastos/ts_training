console.log('Classes Recap')

// class Player { // Props shortcut in Typescript (Parameter properties)
//   constructor(public first: string, public last: string, public age?: number) {}
// }

interface Printable {
  print(): void
}

interface Identifiable {
  id: 'male' | 'female' | 'other' | undefined
}

class Player implements Printable, Identifiable {
  public readonly first: string
  public readonly last: string
  public id: 'male' | 'female' | 'other' | undefined
  public age?: number
  private _score = 0 // Private field in Typescript, TS Infers number as a type.
  protected _specialScore = 1000 // Protected field in Typescript can be accessed only by Self and Child classes, TS Infers number as a type.
  #numLives = 10 // Private field in regular Javascript.

  constructor(first: string, last: string, age?: number) {
    this.first = first
    this.last = last
    this.age = age
  }

  /*
   * Static methods are called on the class itself, not on an instance of the class.
   * They are often used to create utility functions for an application.
   * They are also used to create factory methods.
   */
  static getClassName() {
    return 'Player'
  }

  print() {
    console.log(`${this.first} ${this.last} ${this.age}`)
  }

  play() {
    console.log(`${this.first} is playing`)
  }

  loseLife() {
    this.#numLives--
    console.log(`${this.first} has ${this.numLives} lives left`)
  }

  get score(): number {
    return this._score
  }

  set score(value: number) {
    if (value < 0) {
      throw new Error('Score must be greater than 0')
    }
    this._score = value
  }

  get numLives(): number {
    return this.#numLives
  }
}

class SuperPlayer extends Player {
  public powers: string[]
  public isAdmin: boolean = true
  constructor(first: string, last: string, powers: string[]) {
    super(first, last) // Call the constructor of the parent class.
    this.powers = powers
    console.log(`My special score is: ${this._specialScore}`) // Access protected field from parent class allowed.
    // console.log(`My parent score is: ${this._score}`) // TS complains due to private access field.
  }
}

///////////////
// TESTING !!!
///////////////
const player1 = new Player('Alice', 'Cooper')
player1.play()
console.log(`num lives: ${player1.numLives}`)
// console.log(`num lives: ${player1.#score}`) // Property 'score' is private and only accessible within class 'Player'.
console.log(`num lives: ${player1.score}`) // Property 'score' from get method is accessible.
player1.loseLife()
player1.score = 101 // Property 'score' from set method is accessible.
console.log(player1)

const adminPlayer1 = new SuperPlayer('Bob', 'Marley', ['fly', 'invisibility'])
adminPlayer1.play()
console.log(adminPlayer1) // Access protected field from parent class.

/* Abstract Classes */
// Abstract classes are base classes from which other classes may be derived.
// They may not be instantiated directly.
// Unlike an interface, an abstract class may contain implementation details for its members.
// Methods within an abstract class that are marked as abstract do not contain an implementation and must be implemented in derived classes.

abstract class Animal {
  abstract makeSound(): void
  move(): void {
    console.log('roaming the earth...')
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('bark')
  }
}

const dog = new Dog()
dog.makeSound()
