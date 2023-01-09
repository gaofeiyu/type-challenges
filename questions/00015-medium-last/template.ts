type Last<T extends unknown[]> = T extends [...unknown[], infer R] ? R : never;

/**
 * 用扩展留出最后一个元素进行推断
 */
