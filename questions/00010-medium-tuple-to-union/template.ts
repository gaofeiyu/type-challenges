// type TupleToUnion<T extends unknown[]> = T extends (infer O)[] ? O : never;
type TupleToUnion<T extends unknown[]> = T extends [infer O, ...infer P] ? O | TupleToUnion<P> : never;

/**
 * T extends unknown[] 用来确认泛型中一定是数组
 * T extends [infer O, ...infer P] ? O | TupleToUnion<P> : never; 递归推断元组的每一个数据并转为集合
 */
