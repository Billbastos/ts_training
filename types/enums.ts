enum Responses {
  NO,
  YES,
  MAYBE,
}

console.log(Responses.NO) // 0
console.log(Responses.YES) // 1

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
}

const myStatus = OrderStatus.PENDING

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED
}

console.log(isDelivered(myStatus)) // false

enum ArrowKeys {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

const myKey = ArrowKeys.UP
console.log(myKey) // UP

// When const is added to an enum, during compilation time
// the enum is removed and replaced with the value it represents
// This does not pollute JS that much
const enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

const myDirection = Direction.UP // 0
