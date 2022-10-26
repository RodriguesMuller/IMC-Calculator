export function notNumber(value) {
  return isNaN(value) || value == ''
}

export function IMC(weight, height) {
  return (height / ((weight / 100) ** 2)).toFixed(2)
}