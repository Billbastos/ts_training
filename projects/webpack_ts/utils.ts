import _ from 'lodash'

export function add(a: number, b: number) {
  return _.add(a, b)
}

export function subtract(a: number, b: number) {
  return a - b
}

export function multiply(a: number, b: number) {
  return a * b
}

export function divide(a: number, b: number) {
  return a / b
}
