type First<T extends unknown[]> = T extends [] ? never : T[0];

/**
 * T 如果集成空数组，不符合条件，返回never，如果不是空数组则返回第一个元素
 */
