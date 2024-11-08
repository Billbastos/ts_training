const color: [number, number, number] = [255, 0, 0]
const httpStatus: [number, string] = [200, 'OK']

httpStatus[0] = 404 // OK
httpStatus[1] = 'Not Found' // OK
httpStatus[0] = 'Not Found' // Error

httpStatus.push(404) // does not complain 😜
httpStatus.pop() // does not complain 😜
