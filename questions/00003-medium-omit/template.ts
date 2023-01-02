// type MyOmit<T, K> = {
//   [P in Exclude<keyof T, K>]: T[P]
// }

// Exclude排除第二个参数的内容
// 但是这个解不完全正确，因为如果K是不在T的属性中的时候是不会报错的

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

// Omit文档：https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
// extends语法的文档：https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#handbook-content
// P需要包含在T中，然后P在K的继承上做推断，如果在K中则是不包含的也就是never，如果不在K中符合要求，返回本身，以此达到排除的能力

