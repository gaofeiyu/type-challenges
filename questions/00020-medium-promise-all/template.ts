type PromiseFlat<T> = T extends Promise<infer R> ? PromiseFlat<R> : T

declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{
  [K in keyof T]: PromiseFlat<T[K]>
}>

/**
 * 这里主要是看返回值的灵活处理
 * 简单来讲就是PromiseAll泛型中的类型和PromiseAll方法返回的Promise泛型中的类型要一致
 * 但如果values对应的值是Promise类型，则要取到最终Promise泛型里面的类型
 */
