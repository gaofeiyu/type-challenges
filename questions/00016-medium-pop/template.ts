type Pop<T extends unknown[]> = T extends [...infer R, unknown] ? R : T;
