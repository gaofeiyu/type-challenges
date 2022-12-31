type MyReturnType<T> = T extends (...args: any) => infer R ? R : never;

// 在extends语句中，支持infer关键字，可以推断一个类型变量，高效的对类型进行模式匹配。但是，这个类型变量只能在true的分支中使用。
/**
 * 在这个题目中是要取一个函数的返回值类型，所以使用了extends + infer推断返回类型的方式进行解题
 * 方法中(...args: any)主要用来指代任何参数的可能
 */
