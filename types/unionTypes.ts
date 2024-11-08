// Using union types type narrowing
function calculateTax(price: number | string, tax: number) {
  // Type narrowing with typeof so there's no complaint about price being a string.
  // There's no complain about price being a number on line 8 either.
  if (typeof price === 'string') {
    price = parseFloat(price.replace('$', ''))
  }
  return price * tax
}

let stuff: (string | number)[] = ['hello', 1, 'world', 2]
