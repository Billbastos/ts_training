const DOMAIN = 'https://www.example.com'
type Path = 'about' | 'contact' | 'projects' | 'blog'

function rootPath(path: Path, slug: string) {
  return `${DOMAIN}/${path}/${slug}`
}

function rootPathAsConst(path: Path, slug: string) {
  return `${DOMAIN}/${path}/${slug}` as const
}

const aboutPath = rootPath('about', 'me') // without as const aboutPath is generic type string.
const contactPath = rootPathAsConst('contact', 'me') // with `as const` contactPath is a union type of all possible return paths. `https://www.example.com/about/${string}` | `https://www.example.com/contact/${string}` | `https://www.example.com/projects/${string}` | `https://www.example.com/blog/${string}`

// Locking the object type with `as const`
const arr = [1, 2, 'hello'] as const
arr.push(3) // TS Error: Property 'push' does not exist on type 'readonly [1, 2, "hello"]'
console.log(arr[0]) // type and value === 1

export {}
