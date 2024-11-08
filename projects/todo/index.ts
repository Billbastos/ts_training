interface Todo {
  title: string
  completed: boolean
}

const btn = document.getElementById('btn')! // Typescript `!` Non-null assertion operator.
const input = document.getElementById('todoinput') as HTMLInputElement // Typescript `as` type assertion.
const form = document.querySelector('form')! // Typescript `!` Non-null assertion operator.
const list = document.querySelector('ul')!

const todos: Todo[] = readTodos()
todos.forEach(createTodo)

form.addEventListener('submit', (e) => {
  e.preventDefault() // TS looks at the context of the event listener "submit" and knows that `preventDefault` is a valid method.
  const newTodo = { title: input.value, completed: false }
  todos.push(newTodo)
  createTodo(newTodo)
  saveTodos(todos)
  input.value = ''
})

function saveTodos(todos: Todo[]) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem('todos')
  if (todosJSON === null) return [] // TS type narrowing so TS does not complain about `JSON.parse(todosJSON)`
  return JSON.parse(todosJSON)
}

function createTodo(todo: Todo) {
  const newLI = document.createElement('li')
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = todo.completed
  checkbox.addEventListener('change', () => {
    todo.completed = checkbox.checked
    saveTodos(todos)
  })
  newLI.append(todo.title)
  newLI.append(checkbox)
  list.append(newLI)
}
