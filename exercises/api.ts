interface Todo {
  id: number
  userId: number
  title: string
  completed: boolean
}

async function getData(): Promise<Todo> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  if (response.ok) {
    return response.json()
  }
  throw new Error('Request failed')
}

getData().then((data) => {
  console.log(data.id) // TS knows that `data` is a Todo.
  console.log(data.userId) // TS knows that `data` is a Todo.
  console.log(data.title) // TS knows that `data` is a Todo.
})

export {}
