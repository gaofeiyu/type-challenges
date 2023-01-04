type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & {
  [U in keyof T as U extends K ? never : U]: T[U]
}

// 泛型是可以给初始值的
// 另外这个题要注意的是除了目标要readonly的属性，剩下的属性也要继承过来
