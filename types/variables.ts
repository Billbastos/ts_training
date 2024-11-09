let bestMovie: string = 'Goonies'
bestMovie = 1 // Error: Type '1' is not assignable to type 'string'

// Type inference
let age = 48
age = 49
age = '48' // Error: Type '"48"' is not assignable to type 'number'

// Delaying initialization implicit any
let favoriteMovie

favoriteMovie = 'Aliens'
favoriteMovie = 1
favoriteMovie()

let somethingElse: boolean

somethingElse = true
somethingElse = 'true' // Error: Type '"true"' is not assignable to type 'boolean'

// Regular expressions
let myRegExp: RegExp = /foo/
myRegExp = new RegExp('foo')
myRegExp = 'foo' // Error: Type '"foo"' is not assignable to type 'RegExp'
