import { describe, expect, it } from 'vitest'

import { cn } from '.'

describe('cn utility', () => {
  it('should handle merging class names conditionally', () => {
    let isLoading = true

    expect(
      cn('text-red-500', {
        loading: isLoading,
      })
    ).toBe('text-red-500 loading')

    isLoading = false

    expect(
      cn('text-red-500', {
        loading: isLoading,
      })
    ).toBe('text-red-500')
  })

  it('should handle merging class names in order and resolve class name conflicts', () => {
    expect(cn('text-red-600', 'text-red-500 text-2xl text-center')).toBe(
      'text-red-500 text-2xl text-center'
    )
  })

  it('should handle merging duplicate class names and remove duplicates', () => {
    expect(
      cn(' text-2xl text-red-500', 'text-red-500 text-2xl text-center')
    ).toBe('text-red-500 text-2xl text-center')
  })

  it('should handle composing the twMerge and clsx utilities functionality', () => {
    const isLoading = true

    expect(
      cn('text-red-600', 'text-red-500 text-2xl text-center', {
        loading: isLoading,
      })
    ).toBe('text-red-500 text-2xl text-center loading')
  })
})
