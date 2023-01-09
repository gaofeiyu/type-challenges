import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
  Expect<Equal<Last<[]>, never>>,
  Expect<Equal<Last<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  Last<'notArray'>,
  // @ts-expect-error
  Last<{ 0: 'arrayLike' }>,
]
