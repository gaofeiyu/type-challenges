type PromiseFlat<T> = T extends Promise<infer R> ? PromiseFlat<R> : T

declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{
  [K in keyof T]: PromiseFlat<T[K]>
}>
