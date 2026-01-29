import { describe, test, expect } from 'vitest'

describe('suma de dos números', () => {
  test('debería sumar 2 + 3 = 5', () => {
    const a = 2
    const b = 3
    const resultado = a + b
    expect(resultado).toBe(5)
  })
})
