const portugueseTranslation = {
  name: 'nome',
  age: 'idade',
  country: 'país',
  friend: 'amigo',
}

const key: typeof portugueseTranslation = portugueseTranslation // Key is object of type { name: string, age: string, country: string, friend: string }
const nameKey: keyof typeof portugueseTranslation = 'name' // nameKey can be 'name' | 'age' | 'country' | 'friend'
const stringMethod: keyof string = 'concat'

console.log(portugueseTranslation[nameKey]) // 'nome
