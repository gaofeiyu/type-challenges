type Chainable<T extends object = {}> = {
  option<K extends string, V>(key: K extends keyof T ? never : K, value: V): Chainable<(K extends keyof T ? Omit<T, K> : T) & { [P in K]: V }>;
  get(): T
}

/**
 * 通过泛型对option当前入参和返回值进行定义，并在递归中的类型排除掉当前的入参定义
 */
