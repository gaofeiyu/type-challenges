// type MyPick<T, K> = {
//   [P in Extract<keyof T, K>]: T[P]
// }

// 和omit类似的思路，Extract用来取K中包含的值
// 但是这个解不完全正确，因为如果K是不在T的属性中的时候是不会报错的

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
