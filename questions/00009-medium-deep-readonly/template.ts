type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? T[P] extends Function ? T[P] : DeepReadonly<T[P]> : T[P]
}

// 通过连续的推断来判断是否要进行深度的类型递归
