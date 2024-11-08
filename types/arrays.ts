const arrStr: string[] = []
arrStr.push('Hello')
arrStr.push(1) // Error: Argument of type '1' is not assignable to parameter of type 'string'

const arrNum: number[] = []
arrNum.push(1)
arrNum.push('1') // Error: Argument of type '"1"' is not assignable to parameter of type 'number'

const arrAny: any[] = []
arrAny.push(1)
arrAny.push('1')

const arrMixed: (string | number)[] = []
arrMixed.push(1)
arrMixed.push('1')
arrMixed.push(true) // Error: Argument of type 'true' is not assignable to parameter of type 'string | number'

type Point = {
  x: number
  y: number
}

const arrPoint: Point[] = []
arrPoint.push({ x: 1, y: 2 })
arrPoint.push({ x: '1', y: '2' }) // Error: Argument of type '{ x: string; y: string; }' is not assignable to parameter of type 'Point'

const ticTacToe: string[][] = []
ticTacToe.push(['X', 'O', 'X'])
ticTacToe.push(['O', 'O', 'X'])
ticTacToe.push(['X', 'X', 'X'])
